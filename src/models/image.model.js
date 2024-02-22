module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
        type: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        data: {
            type: DataTypes.BLOB("long")
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    });

    return Image;
};
