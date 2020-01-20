const initialState = {
  data: {
    properties: [],
    levels: []
  }
}

const reducer = (state = initialState, action) => {

  console.log(action.type)

  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        data: action.payload
      }
    
    default:
      return state
  }
}

export default reducer