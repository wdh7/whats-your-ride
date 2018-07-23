// Return new object without empty string values
export function removeEmptyData(data) {
  const newData = {};
  const keys = Object.keys(data);

  keys.forEach(key => {
    if (data[key] !== '') {
      newData[key] = data[key];
    }
  })

  return newData;
}
