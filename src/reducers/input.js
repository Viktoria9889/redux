import { 
  INPUT_SET_DATA
} from './types'

// The initial state of the App
export const initialState = {
  data: '',
}

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case INPUT_SET_DATA:
        return { ...state, data: action.payload.data }
        break
    }
    return state
  }

export default reducer