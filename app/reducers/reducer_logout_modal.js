'use strict'

import { UPDATE_LOGOUT_MODAL_STATUS } from '../actions/index'

export default function (state = 'OFF', action) {
  switch (action.type) {
    case UPDATE_LOGOUT_MODAL_STATUS:
      return action.payload

    default:
      return state
  }
}
