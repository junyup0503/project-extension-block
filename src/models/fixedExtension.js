import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class fixedExtension extends Model {
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
        isCheck: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: 'fixed_extension',
        timestamps: true,
        updatedAt: false,
        underscored: true,
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
