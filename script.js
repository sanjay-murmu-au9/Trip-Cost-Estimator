// Default values for quick tweaking
const DEFAULTS = {
  flightPerPersonINR: 60000,
  hotelBudgetPerNightINR: 7000,
  hotelMidPerNightINR: 12000,
  hotelLuxuryPerNightINR: 25000,
  foodPerPersonPerDayINR: 3000,
  transportPerPersonPerDayINR: 1000,
  miscBufferINR: 20000
};

/* Test data:
{
  travelers: 2,
  days: 7,
  hotelType: 'mid-range',
  expectedTotalINR: ~200,000
}
*/

// Cache DOM elements
const elements = {
  converterForm: document.getElementById('converter-form'),
  estimatorForm: document.getElementById('estimator-form'),
  inrInput: document.getElementById('inr-amount'),
  chfResult: document.getElementById('chf-result'),
  numTravelers: document.getElementById('num-travelers'),
  numDays: document.getElementById('num-days'),
  hotelType: document.getElementById('hotel-type'),
  resultsArea: document.getElementById('results-area'),
  breakdownTable: document.getElementById('breakdown-table'),
  saveButton: document.getElementById('save-estimate')
};

// Format number with Indian formatting (e.g., 1,00,000)
function formatIndianNumber(num) {
  return num.toLocaleString('en-IN');
}// State management
let currentRate = 0.011; // Fallback rate (1 INR = 0.011 CHF)
let lastEstimate = null;
let lastUpdateTime = 0;
const RATE_UPDATE_INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds

// Fetch exchange rate from API
async function fetchExchangeRate(force = false) {
  const now = Date.now();
  if (!force && now - lastUpdateTime < RATE_UPDATE_INTERVAL) {
    console.log('Using cached rate:', currentRate);
    return currentRate;
  }

  try {
    // Use exchangerate-api.com as our primary source
    const response = await fetch('https://open.er-api.com/v6/latest/INR');
    const data = await response.json();
    console.log('API Response:', data);

    if (data.result !== 'success' || !data.rates || !data.rates.CHF) {
      throw new Error('Invalid API response format');
    }

    // Validate rate is reasonable (1 INR should be between 0.005 and 0.02 CHF)
    if (data.rates.CHF < 0.005 || data.rates.CHF > 0.02) {
      throw new Error('Exchange rate seems incorrect');
    }

    currentRate = data.rates.CHF;
    console.log('New exchange rate:', currentRate);
    lastUpdateTime = now;
    localStorage.setItem('lastRate', currentRate);
    localStorage.setItem('lastUpdateTime', now);
    return currentRate;
  } catch (error) {
    console.error('Error with primary API:', error);

    // Try backup API from frankfurter
    try {
      const backupResponse = await fetch('https://api.frankfurter.app/latest?from=INR&to=CHF');
      const backupData = await backupResponse.json();
      console.log('Backup API Response:', backupData);

      if (backupData.rates && backupData.rates.CHF) {
        const rate = backupData.rates.CHF;
        // Validate backup rate
        if (rate >= 0.005 && rate <= 0.02) {
          currentRate = rate;
          console.log('Using backup API rate:', currentRate);
          lastUpdateTime = now;
          localStorage.setItem('lastRate', currentRate);
          localStorage.setItem('lastUpdateTime', now);
          return currentRate;
        }
        console.log('Using backup API rate:', currentRate);
        lastUpdateTime = now;
        localStorage.setItem('lastRate', currentRate);
        localStorage.setItem('lastUpdateTime', now);
        return currentRate;
      }
    } catch (backupError) {
      console.error('Backup API also failed:', backupError);
    }

    // If both APIs fail, use fallback rate and show warning
    console.warn('Using fallback rate:', currentRate);
    return currentRate;
  }
}

// Convert currency with formatting
function convertCurrency(amount, format = true) {
  const converted = amount * currentRate;
  return format ? converted.toFixed(2) : converted;
}

// Update converter display
function updateConverterDisplay(amount) {
  if (isNaN(amount) || amount === '') {
    elements.chfResult.innerHTML = `<div class="conversion-result">Enter an amount to convert</div>`;
    return;
  }

  const chfAmount = convertCurrency(amount);
  const formattedINR = formatIndianNumber(amount);

  elements.chfResult.innerHTML = `
    <div class="conversion-result">
      <div class="amount">₹${formattedINR} = <strong>CHF ${chfAmount}</strong></div>
      <div class="rate-info">1 INR = ${currentRate.toFixed(4)} CHF</div>
      <div class="update-time">Last updated: ${new Date(lastUpdateTime).toLocaleTimeString()}</div>
    </div>
  `;
}

// Calculate trip costs
function calculateTripCost(travelers, days, hotelType) {
  const hotelRates = {
    'budget': DEFAULTS.hotelBudgetPerNightINR,
    'mid-range': DEFAULTS.hotelMidPerNightINR,
    'luxury': DEFAULTS.hotelLuxuryPerNightINR
  };

  const costs = {
    flights: travelers * DEFAULTS.flightPerPersonINR,
    hotel: days * hotelRates[hotelType],
    food: travelers * days * DEFAULTS.foodPerPersonPerDayINR,
    transport: travelers * days * DEFAULTS.transportPerPersonPerDayINR,
    misc: DEFAULTS.miscBufferINR
  };

  const totalINR = Object.values(costs).reduce((sum, cost) => sum + cost, 0);
  const totalCHF = convertCurrency(totalINR);

  return {
    ...costs,
    totalINR,
    totalCHF
  };
}

// Update results table
function updateResults(costs) {
  console.log('updateResults called with costs:', costs);
  const travelers = parseInt(elements.numTravelers.value);
  const days = parseInt(elements.numDays.value);
  const hotelType = elements.hotelType.value;

  // Create summary message
  const summaryMessage = `
    <div class="trip-summary">
      <h3>Trip Summary</h3>
      <p>Your ${days}-day trip to Switzerland for ${travelers} ${travelers > 1 ? 'travelers' : 'traveler'} with ${hotelType} accommodation will cost approximately:</p>
      <div class="total-cost">
        <div class="cost-inr">₹${costs.totalINR.toLocaleString('en-IN')}</div>
        <div class="cost-chf">CHF ${costs.totalCHF}</div>
      </div>
      <p class="cost-per-person">
        That's about ₹${Math.round(costs.totalINR / travelers).toLocaleString('en-IN')} per person
      </p>
    </div>
  `;

  // Create detailed breakdown
  const rows = Object.entries(costs).map(([category, amount]) => {
    if (category === 'totalINR' || category === 'totalCHF') return '';
    const formattedCategory = category.split(/(?=[A-Z])/).join(' ');
    return `
      <tr>
        <td>${formattedCategory.charAt(0).toUpperCase() + formattedCategory.slice(1)}</td>
        <td>₹${amount.toLocaleString('en-IN')}</td>
        <td>CHF ${convertCurrency(amount)}</td>
      </tr>
    `;
  }).join('');

  const resultsHtml = `
    ${summaryMessage}
    <table class="results-table">
      ${rows}
      <tr class="total">
        <td><strong>Total Cost</strong></td>
        <td><strong>₹${costs.totalINR.toLocaleString('en-IN')}</strong></td>
        <td><strong>CHF ${costs.totalCHF}</strong></td>
      </tr>
    </table>
    <button id="save-estimate" class="save-button">
      <svg viewBox="0 0 24 24" width="16" height="16" style="margin-right: 8px;">
        <path fill="currentColor" d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/>
      </svg>
      Save Estimate
    </button>
  `;

  // Update the results area
  console.log('Creating new results container');
  const resultsDiv = document.createElement('div');
  resultsDiv.className = 'results-container';
  resultsDiv.innerHTML = resultsHtml;

  // Clear and add new results
  elements.resultsArea.innerHTML = '';
  elements.resultsArea.appendChild(resultsDiv);

  // Setup save button event listener
  const saveButton = resultsDiv.querySelector('#save-estimate');
  saveButton.addEventListener('click', () => {
    if (lastEstimate) {
      saveEstimate(lastEstimate);
      alert('Estimate saved successfully!');
    }
  });

  // Animate in
  console.log('Starting animation');
  resultsDiv.style.opacity = '0';
  resultsDiv.style.transform = 'translateY(20px)';
  requestAnimationFrame(() => {
    resultsDiv.style.transition = 'all 0.3s ease-out';
    resultsDiv.style.opacity = '1';
    resultsDiv.style.transform = 'translateY(0)';
  });

  elements.resultsArea.setAttribute('aria-live', 'polite');
  elements.resultsArea.classList.remove('visually-hidden');
}

// Save estimate to localStorage
function saveEstimate(estimate) {
  const saved = JSON.parse(localStorage.getItem('savedEstimates') || '[]');
  saved.push({
    ...estimate,
    date: new Date().toISOString()
  });
  localStorage.setItem('savedEstimates', JSON.stringify(saved));
}

// Event listeners
// Initialize converter
async function initializeConverter() {
  // Try to load saved rate
  const savedRate = localStorage.getItem('lastRate');
  const savedTime = localStorage.getItem('lastUpdateTime');
  if (savedRate && savedTime) {
    currentRate = parseFloat(savedRate);
    lastUpdateTime = parseInt(savedTime);
  }

  // Fetch fresh rate
  await fetchExchangeRate(true);
}

// Handle input changes immediately with debouncing
let debounceTimer;
elements.inrInput.addEventListener('input', (e) => {
  const amount = parseFloat(e.target.value);
  updateConverterDisplay(amount);

  // Debounce API calls
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(async () => {
    await fetchExchangeRate();
    updateConverterDisplay(amount);
  }, 1000);
});// Get precise rate on form submit
elements.converterForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const amount = parseFloat(elements.inrInput.value);
  if (isNaN(amount)) return;

  const button = e.target.querySelector('button');
  button.disabled = true;
  button.textContent = 'Converting...';

  try {
    await fetchExchangeRate();
    const result = convertCurrency(amount);
    elements.chfResult.textContent = `₹${formatIndianNumber(amount)} = CHF ${result}`;
    elements.chfResult.classList.add('result');
  } catch (error) {
    elements.chfResult.textContent = 'Error fetching latest rate. Using estimated rate.';
  } finally {
    button.disabled = false;
    button.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" style="margin-right: 8px; vertical-align: middle;"><path fill="currentColor" d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/></svg>Convert to CHF';
  }
}); elements.estimatorForm.addEventListener('submit', async (e) => {
  console.log('Form submission started');
  e.preventDefault();
  console.log('Default form submission prevented');
  const travelers = parseInt(elements.numTravelers.value);
  const days = parseInt(elements.numDays.value);
  const hotelType = elements.hotelType.value;

  // Validate inputs
  if (isNaN(travelers) || travelers < 1) {
    alert('Please enter a valid number of travelers');
    elements.numTravelers.focus();
    return;
  }
  if (isNaN(days) || days < 1) {
    alert('Please enter a valid number of days');
    elements.numDays.focus();
    return;
  }

  // Show loading state
  const button = e.target.querySelector('button');
  const originalText = button.innerHTML;
  button.disabled = true;
  button.innerHTML = `<svg class="spinner" viewBox="0 0 50 50" style="width: 20px; height: 20px; margin-right: 8px;">
    <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5"></circle>
  </svg>Calculating...`;

  // Make sure results area is empty and visible
  elements.resultsArea.innerHTML = `
    <div class="loading-message" style="text-align: center; padding: 2rem;">
      <svg class="spinner" viewBox="0 0 50 50" style="width: 40px; height: 40px; margin-bottom: 1rem;">
        <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5"></circle>
      </svg>
      <p>Calculating your Switzerland trip budget...</p>
    </div>
  `;
  elements.resultsArea.classList.remove('visually-hidden');

  // Smooth scroll to results
  elements.resultsArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  try {
    // Get latest exchange rate
    console.log('Fetching latest exchange rate...');
    await fetchExchangeRate();
    console.log('New exchange rate:', currentRate);
    const costs = calculateTripCost(travelers, days, hotelType);
    lastEstimate = costs;

    // Update with new results
    updateResults(costs);

    // Show success state
    button.innerHTML = `<svg viewBox="0 0 24 24" style="width: 20px; height: 20px; margin-right: 8px;">
      <path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
    </svg>Budget Calculated!`;

    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 2000);

  } catch (error) {
    console.error('Error calculating budget:', error);
    console.log('Error details:', {
      formData: {
        travelers,
        days,
        hotelType
      },
      currentRate,
      lastEstimate
    });
    button.innerHTML = `⚠️ Error - Try Again`;
    alert('There was an error calculating your budget. Please try again.');
  } finally {
    button.disabled = false;
  }
});

elements.saveButton.addEventListener('click', () => {
  if (lastEstimate) {
    saveEstimate(lastEstimate);
    alert('Estimate saved successfully!');
  }
});

// Initialize everything
initializeConverter();
