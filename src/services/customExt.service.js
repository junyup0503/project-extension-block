import { db } from '../models/index';

export default {
  /** 차단된 커스텀 확장자 조회 (카운트 포함)
   *
   * @returns /{count: 123, rows: [...{no: 1, name: 'sh', isFixed: 0}]}
   */
  findAndCountAllCustomExt: async () => {
    const { count, rows } = await db.customExtension.findAndCountAll({
      attributes: ['no', 'name'],
      order: [['no', 'ASC']],
    });

    return { count, rows };
  },

  /**
   *
   * @returns 100 커스텀 확장자 총 갯수
   */
  countAllCustomExt: async () => {
    const count = await db.customExtension.count();

    return count;
  },

  /** 차단된 확장자 단일 조회(확장자 이름으로 조회)
   *
   * @param {String} name
   * @returns /{no: 1, name: 'sh', toFixed: 0}
   */
  findOneCustomExt: async (name) => {
    const result = await db.customExtension.findOne({
      attributes: ['no', 'name'],
      where: { name },
    });

    return result;
  },

  /**
   *
   * @param {*} name
   * @returns 만들어진 객체
   */
  createCustomExt: async (name) => {
    const result = await db.customExtension.create({
      name,
    });

    return result;
  },

  // 차단된 확장자 삭제
  /**
   *
   * @param {Number} no
   * @returns 삭제 성공 여부에 따라 0 or 1
   */
  deleteCustomExt: async (no) => {
    const result = await db.customExtension.destroy({ where: { no } });

    return result;
  },
};
