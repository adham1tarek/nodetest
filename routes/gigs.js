import express from 'express';
import { Sequelize } from 'sequelize';

const router = express.Router();

// Database connection
const db = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
});

// List Gigs
router.get('/', async (req, res) => {
  try {
    const gigs = await Gig.findAll();
    console.log('Gigs retrieved:', gigs);
    res.json(gigs);
  } catch (err) {
    console.error('Failed to retrieve gigs:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;