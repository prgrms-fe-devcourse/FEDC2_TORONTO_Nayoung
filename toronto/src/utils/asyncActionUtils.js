//  함수의 파라미터로 Action 타입과 Promise 만들어주는 함수를 받아옵니다.
export const createAsyncDispatcher = (type, promiseFn) => {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;
  const actionHandler = async (dispatch, ...rest) => {
    dispatch({ type }); //요청 시작
    try {
      const data = await promiseFn(...rest); //rest 배열 spread로 받음
      dispatch({
        type: SUCCESS,
        data,
      });
      return data;
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e,
      });
    }
  };
  return actionHandler;
};

export const initialAsyncState = {
  loading: false,
  data: null,
  error: null,
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

// 세가지 액션을 처리하는 리듀서 생성, type은 액션 타입, key는 리듀서에서 사용할 필드
export const createAsyncHandler = (type, key) => {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  const handler = (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data),
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error),
        };
      default:
        return state;
    }
  };
  return handler;
};
