import BaseAction from '../../../redux/base-action'

export default class updateValue extends BaseAction {
  update(currentState, payload, immuableState) {
    if (payload.key != undefined && payload.key != null) {
      currentState[payload.key] = payload.value;
    }

    if (payload.keys != undefined && payload.keys != null && payload.keys.length > 0) {
      const immuableStateJs = immuableState.setIn(payload.keys, payload.value).toJS();
      currentState[payload.keys[0]] = immuableStateJs[payload.keys[0]];
    }
  }
}
