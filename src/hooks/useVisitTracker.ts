import { useEffect } from 'react';

interface VisitStats {
  totalVisits: number;
  dailyVisits: { [key: string]: number };
  lastVisit: string;
}

export const useVisitTracker = () => {
  useEffect(() => {
    const updateVisitStats = () => {
      const today = new Date().toISOString().split('T')[0];
      const storedStats = localStorage.getItem('visitStats');
      let stats: VisitStats;

      if (storedStats) {
        stats = JSON.parse(storedStats);
        stats.totalVisits += 1;
        stats.dailyVisits[today] = (stats.dailyVisits[today] || 0) + 1;
      } else {
        stats = {
          totalVisits: 1,
          dailyVisits: { [today]: 1 },
          lastVisit: new Date().toISOString(),
        };
      }

      stats.lastVisit = new Date().toISOString();
      localStorage.setItem('visitStats', JSON.stringify(stats));
    };

    updateVisitStats();
  }, []);
};