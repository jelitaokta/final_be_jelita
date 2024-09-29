module.exports = (sequelize, DataTypes) => {

    const Pengalaman = sequelize.define("pengalaman", {
  
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },  
  
         pengalaman: {
            type: DataTypes.STRING(50),
            allowNull: true
          },
  
    }, {
  
      sequelize,
      tableName: 'pengalaman',
      timestamps: true,
      indexes: [
  
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  
  
  
    return Pengalaman;
  
  }; 