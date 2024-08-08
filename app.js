
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { initModels } from './models/index.js';
const app = express();

app.use(express.json());

// Initialize database models
initModels();

// Set up routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
