import { db } from '../models';

export default {
  /** 고정 확장자 목록 조회
   *
   * @returns [...{no: 1, name: 'exe'}]
   */
  findAllFixedList: async () => {
    const result = await db.fixedExtension.findAll({
      attributes: ['no', 'name', 'isCheck'],
      order: [['no', 'DESC']],
    });

    return result;
  },

  /** 고정 확장자 단일 조회
   *
   * @param {*} name
   * @returns 조회된 고정 확장자
   */
  findOneFixedExt: async (name) => {
    const result = await db.fixedExtension.findOne({
      where: { name },
    });

    return result;
  },

  checkFixedExt: async (no, isCheck) => {
    let result;
    if (isCheck) {
      result = await db.fixedExtension.update(
        { isCheck: 0 },
        { where: { no } },
      );
    } else {
      result = await db.fixedExtension.update(
        { isCheck: 1 },
        { where: { no } },
      );
    }

    return result;
  },
};
