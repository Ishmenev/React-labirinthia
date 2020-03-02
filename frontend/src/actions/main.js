import axios from "axios";

export const getMainData  = () => {
  return async (dispatch) => {
    dispatch(requestDataFetching());
  
    try {
      const res = await axios.get("/api/main");
      const data = res.data[0];
      dispatch(fetchingDataSuccess(data));

    
    } catch (err) {
      dispatch(fetchingDataFail());
    }
  } 
};


function requestDataFetching() {
  return {
    type: 'REQUEST_DATA_FETCHING'
  }
}

function fetchingDataSuccess(data) {
  const newData = {
    news: data.properties,
    levels: data.levels
  };

  return {
    type: 'FETCHING_DATA_SUCCESS',
    payload: newData
  }
}

function fetchingDataFail() {
  return {
    type: 'FETCHING_DATA_FAIL'
  }
}
