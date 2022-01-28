// import { Action } from '../../actions';

interface IWheather {
  name?: string,
  temperature?: number,
  time?: Date
}

const initState: Array<IWheather> = [];

export default (state = initState, action: any) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return [...state, action.payload];
    default:
      return state;
  }
};