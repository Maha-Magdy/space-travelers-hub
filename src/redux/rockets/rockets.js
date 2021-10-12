// import axios from 'axios';

const ROCKETS_LIST = 'space_travelers_hub/rockets/ROCKETS_LIST';

const initialState = [];
export default function rocketsReducer(state = initialState, action) {
  switch (action.type) {
    case ROCKETS_LIST:
      console.log('Come to your Mummy', action.payload);
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export const rocketsList = (payload) => ({
  type: ROCKETS_LIST,
  payload,
});
