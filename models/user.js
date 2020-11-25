const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

	class User extends Model {

		static associate(models) {
			User.hasMany(models.Task);
		}

		// Create the validPassword method to compare hashed passwords.
		validPassword(password) {
			return bcrypt.compareSync(password, this.password);
		}

	}

	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: { isEmail: true },
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: { isAlpha: true },
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: { isAlpha: true },
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			// Add hook to automatically hash the password before the user is created.
			hooks: {
                beforeCreate(user) {
                    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
				},
			},
			sequelize,
			modelName: 'User',
		},
	);

	return User;

};
