/* export const GET_CARDATA = 'GET_CARDATA'

//This will run sync
export const saveResult = (cardata) => {
    return {
        type: GET_CARDATA,
        cardata: cardata
    }
}

//This will use Thunk Middleware and will run async
export const getCarData = () => {
    return dispatch => {
        //run Asyns function here and call dispatch(saveResult()) in that.
        dispatch(saveResult());
    }
}; */