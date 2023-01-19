import _sequelize from 'sequelize';
import _customExtension from './customExtension.js';
import _fixedExtension from './fixedExtension.js';

const DataTypes = _sequelize.DataTypes;
export default function initModels(sequelize) {
  const customExtension = _customExtension.init(sequelize, DataTypes);
  const fixedExtension = _fixedExtension.init(sequelize, DataTypes);

  return {
    customExtension,
    fixedExtension,
  };
}
