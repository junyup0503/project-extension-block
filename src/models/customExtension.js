import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class customExtension extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        no: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: 'name',
        },
      },
      {
        sequelize,
        tableName: 'custom_extension',
        underscored: true,
        timestamps: true,
        updatedAt: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'no' }],
          },
          {
            name: 'name',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'name' }],
          },
        ],
      },
    );
  }
}
