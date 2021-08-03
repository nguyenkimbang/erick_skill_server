
export function reducer(actionClasses, prefix, state, { type, payload }, immuableState) {
  if (!type.startsWith(prefix)) return;
  
  const classType = type.substring(prefix.length);

  const actionObject = actionClasses[classType];

  console.log(JSON.stringify(payload));
  if (actionObject == null) return;

  actionObject.update(state, payload, immuableState);
}

export function createActionByName(actionClasses, prefix, name) {
  return (payload) => {
    return (dispatch, getState) => {
      const instance = actionClasses[name];
      instance.pushAction = dispatch;
      if (!instance.runMiddleware) {
        dispatch({ type: `${prefix}${name}`, payload });
      }
      else {
        instance.runMiddleware(payload, getState).then(x => {
          dispatch({ type: `${prefix}${name}`, payload: x });
        })
      }
    }
  }
}

export function createWrapActions(actionClasses, prefix) {
  const classes = Object.keys(actionClasses);
  return classes.reduce((preValue, currentValue) => {
    preValue[currentValue] = createActionByName(actionClasses, prefix, currentValue)
    return preValue;
  }, {});
}