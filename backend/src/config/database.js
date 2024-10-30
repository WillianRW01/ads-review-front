const { Sequelize } = require("sequelize");

class Database {
  constructor() {
    this.init();
  }

  //Configurar a conexa0 do banco - nao starta a caralia do banco 
  init() {
    this.db = new Sequelize({
      database: "exemplo",
      host: "localhost",
      username: "root",
      dialect: "mysql",
      password: "",
    });
  }
}

module.exports = new Database();
