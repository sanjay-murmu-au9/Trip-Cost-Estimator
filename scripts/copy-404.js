import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distIndex = path.join(__dirname, '..', 'dist', 'index.html');
const dist404 = path.join(__dirname, '..', 'dist', '404.html');

try {
    if (fs.existsSync(distIndex)) {
        fs.copyFileSync(distIndex, dist404);
        console.log('Copied dist/index.html to dist/404.html');
    } else {
        console.warn('dist/index.html not found. Did you run the build?');
    }
} catch (err) {
    console.error('Failed to copy index.html to 404.html:', err);
    process.exit(1);
}
