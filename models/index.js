
import sequelize from '../config/database.js';
import User from './usersdb.js';

const initModels = async () => {
  await sequelize.sync({ force: true }); 
  console.log('Database synced');
};

export { initModels, User };
