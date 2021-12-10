import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/model/User';

const model = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    model.map((models) => models.init(this.connection));
  }
}

export default new Database();
