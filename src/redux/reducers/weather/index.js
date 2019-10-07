import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  LOADING,
  SUCCESS,
  FAILURE
} from '../../constants/weather'

const deafultState = {
  status: LOADING
}

const weather = (state = { ...deafultState }, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return { status: LOADING }
    case FETCH_SUCCESS:
      return {
        ...state,
        status: SUCCESS,
        ...action.result
      }
    case FETCH_FAILURE:
      return { status: FAILURE }
    default:
      return state
  }
}

export default weather
