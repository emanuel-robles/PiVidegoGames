const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    released:{
      type: DataTypes.DATE,
      allowNull: true,
    },
    background_image:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rating:{
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    createdVideoGame: {
      type:DataTypes.BOOLEAN,
      allowNull:true,
      defaultValue:true,
    }
    
  });
};
