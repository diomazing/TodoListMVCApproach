module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
        Taskid: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Task.associate = models => {
        Task.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Task;
};