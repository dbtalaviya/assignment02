const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            /**
             * Ensures the email address is in a valid format.
             */
            isEmail: true,
        },
    },
    /**
     * The user's role in the system.
     */
    role: {
        type: DataTypes.ENUM('Admin', 'Editor', 'Viewer'),
        allowNull: false,
    },
}, {
    /**
     * Enables automatic timestamp for the model.
     */
    timestamps: true,
});

module.exports = User;