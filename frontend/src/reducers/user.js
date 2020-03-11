const initialState = {
    data: null,
    isAuth: false,
    isFetching: false
  };
  
const user = (state = initialState, action) => {
  
    switch (action.type) {
       case 'LOGIN_USER':
        return {
            data: {
                ...action.payload,
                isAuth: true
            },
            isFetching: true
        };
        
      case 'USER_DATA_FETCHING':
        return {
          data: state.data,
          isFetching: true
        };
      case 'USER_DATA_SUCCESS':
        return {
          data: action.payload,
          isFetching: false
        };
      case 'USER_DATA_FAIL':
        return {
          data: {
            ...state.data
          },
          isFetching: false
        };
      default:
        return state
    }
  };
  
  export default user