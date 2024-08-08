// models/index.js

import sequelize from '../config/database.js';
import User from './usersdb.js';

const initModels = async () => {
  await sequelize.sync({ force: true }); // For demo purposes, this will drop and recreate tables on each run
  console.log('Database synced');
};

export { initModels, User };
