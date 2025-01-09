const sequelize = require('./config/database');
const User = require('./models/user');

sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
});
