module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    User.associate = models => {
        User.hasMany(models.Task, {
            onDelete: "cascade"
        });

        User.hasOne(models.Profile, {
            onDelete: "cascade"
        });
    };
    return User;
};