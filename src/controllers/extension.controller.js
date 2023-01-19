import { async } from 'regenerator-runtime';
import { ValidationError } from 'sequelize';
import customExtService from '../services/customExt.service';
import fixedExtService from '../services/fixedExt.service';

export default {
  /** 차단된 확장자 정보 조회
   *
   * @param {*} req
   * @param {*} res
   * @return {Promise<void>}
   */
  findExt: async (req, res) => {
    const { count, rows } = await customExtService.findAndCountAllCustomExt();
    const fixedExt = await fixedExtService.findAllFixedList();

    res.status(200).json({
      code: 2000,
      msg: '차단된 확장자 조회 성공',
      data: {
        fixedExt,
        customExt: rows,
        customExtCnt: count,
      },
    });
  },

  // 고정 확장자 체크 함수
  checkExt: async (req, res) => {
    const { no, isCheck } = req.body;

    await fixedExtService.checkFixedExt(no, isCheck);

    res.status(200).json({
      code: 2000,
      msg: '체크여부 수정 성공',
    });
  },

  // 차단된 확장자 추가
  blockExt: async (req, res) => {
    const { name } = req.body;

    let ext = await customExtService.findOneCustomExt(name);

    if (ext) {
      throw new ValidationError('이미 존재하는 확장자입니다.', 4001);
    }

    ext = await customExtService.createCustomExt(name);

    res.status(200).json({
      code: 2000,
      msg: '차단된 확장자 추가 성공',
      data: {
        ext,
      },
    });
  },
  // 차단된 확장자 삭제
  deleteExt: async (req, res) => {
    const { extNo } = req.params;
    console.log(extNo);

    const result = await customExtService.deleteCustomExt(extNo);

    if (result) {
      res.status(200).json({
        code: 2000,
        msh: '차단된 확장자 삭제 성공',
      });
    } else {
      throw new ValidationError('존재하지 않는 확장자 입니다.');
    }
  },
};
