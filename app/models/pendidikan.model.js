module.exports = (sequelize, DataTypes) => {

    const Pendidikan = sequelize.define("pendidikan", {
  
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true 
          },  
  
         jenjang: {
            type: DataTypes.STRING,
            allowNull: true 
          },

          nama_sekolah: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
          },
  
    }, {
  
      sequelize,
      tableName: 'pendidikan',
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
  
  
  
    return Pendidikan;
  }; 