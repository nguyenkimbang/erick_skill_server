import BaseAction from '../../../redux/base-action'

export default class displayLoadingIndicator extends BaseAction {
  update(currentState, payload) {
    currentState.showLoadingIndicator = payload.show
  }
}
