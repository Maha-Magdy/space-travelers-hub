/* eslint-disable consistent-return */
// import axios from 'axios';

const ROCKETS_LIST = 'space_travelers_hub/rockets/ROCKETS_LIST';
const RESERVE_ROCKET = 'space_travelers_hub/rockets/RESERVE_ROCKET';

const initialState = [];
export default function rocketsReducer(state = initialState, action) {
  let newState = [];
  switch (action.type) {
    case ROCKETS_LIST:
      return [...state, ...action.payload];
    case RESERVE_ROCKET:
      newState = state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return [...newState];
    default:
      return state;
  }
}

export const rocketsList = (payload) => ({
  type: ROCKETS_LIST,
  payload,
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});
