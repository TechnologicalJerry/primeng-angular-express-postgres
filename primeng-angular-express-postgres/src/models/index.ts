import User from './User';
import sequelize from '../config/database';

// Export all models
export { User };

// Export sequelize instance
export { sequelize };

// Define associations here if needed in the future
// Example: User.hasMany(Post);

export default sequelize;
