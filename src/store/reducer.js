/* import * as actionTypes from './actions';
const initialState = {
    name: '',
    model: '',
    yearOfBuild: 0,
    odometer: 0,
    gasolineCapacity: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.getCarData:
            return {
                ...state,
                name: action.saveResult.cardata.name,

            }
        default:
            return state
    }
};

export default reducer; */