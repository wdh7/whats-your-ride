export function resetForm(state) {
  const stateKeys = Object.keys(state);
  const originalState = stateKeys.reduce((obj, key) => {
    obj[key] = '';

    return obj;
  }, {});

  this.setState(originalState);
}
