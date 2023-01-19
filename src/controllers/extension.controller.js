import { ValidationError } from '../helpers/errors.helper';
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
  blockExt: async (req, res, next) => {
    const name = req.body.name.toLowerCase();

    // 최대 갯수 검사
    const count = await customExtService.countAllCustomExt();
    if (count >= 200) {
      throw new ValidationError('최대 갯수를 초과 하였습니다.', 4001);
    }

    // 고정 확장자에 존재하는지 검사
    let ext = await fixedExtService.findOneFixedExt(name);
    if (ext) {
      throw new ValidationError('고정 확장자 입니다', 4002);
    }

    // 커스텀 중복 검사
    ext = await customExtService.findOneCustomExt(name);
    if (ext) {
      throw new ValidationError('이미 존재하는 확장자입니다.', 4003);
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

    const result = await customExtService.deleteCustomExt(extNo);

    if (result) {
      res.status(200).json({
        code: 2000,
        msh: '차단된 확장자 삭제 성공',
      });
    } else {
      return new ValidationError('존재하지 않는 확장자 입니다.', 4001);
    }
  },
};
