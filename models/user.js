const Sequelize = require('sequelize');


module.exports= class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
        name : {
            type:Sequelize.STRING(40),
            allowNull :false
        },
        email : {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true
        },
        password: {
            type: Sequelize.STRING(100),
            allowNull: true,
          }
    },{
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci'
      })
}
}