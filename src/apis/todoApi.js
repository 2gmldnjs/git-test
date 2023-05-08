import { api, axios } from "boot/axios";
import qs from "qs";

const todoRouter = `/api/todo`;

const token = {
  create: null,
};

const create = async (payload) => {
  try {
    if (token.create != null) {
      token.create = token.create.cancel("create cancel");
    }
    token.create = axios.CancelToken.source(); // 중복이벤트시 취소할수 있는 함수
    const result = await api.post(`${todoRouter}`, payload, {
      cancelToken: token.create.token,
    });
    console.log(result);
    return result;
  } catch (error) {
    console.error({ err: error });
    return false;
  }
};


export default { create };
