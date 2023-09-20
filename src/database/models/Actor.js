
module.exports = (sequelize, dataTypes) => {

    const alias = "Actor";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        rating: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique:true
        },
       favorite_movie_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue: null
            
        }
    }
    // siempre tiene que estar escrita en plural y en ingles 
    // si es que la marca de tiempo no estan te pone error si no aclaraste

    const config = {
        tableName: "actors",
        timestamps: true,
        underscored: true
    }


    const Actor = sequelize.define(alias, cols, config);

    return Actor
}
