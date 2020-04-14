const initialState = {
  data: {
    news: null,
    levels: null
  },
  isFetching: null,
  errorStatus: false
};

const main = (state = initialState, action) => {
  // if(state === undefined) {
  //   return {
  //     data: null,
  //     isFetching: false
  //   }
  // }

  switch (action.type) {
    case 'REQUEST_DATA_FETCHING':
      return {
        data: state.data,
        isFetching: true,
        errorStatus: false
      };
    case 'FETCHING_DATA_SUCCESS':
      return {
        data: action.payload,
        isFetching: false,
        errorStatus: false
      };
    case 'FETCHING_DATA_FAIL':
      return {
        data: {
          ...state.data
        },
        isFetching: false,
        errorStatus: true
      };
    default:
      return state
  }
};

export default main