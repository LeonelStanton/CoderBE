import app from './app.js';

import { initDB } from './db/mongodb.js';
import config from './config.js';

console.log('config', config);

await initDB();
const PORT = config.port;

const httpServer = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});

