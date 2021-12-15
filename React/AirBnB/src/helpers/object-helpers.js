export const removeProperty = (obj, prop) => Object.entries(obj)
  .reduce((res, [propName, propValue]) => {
    if (prop !== propName) {
      res[propName] = propValue;
    }
    return res;
  }, {});

export default {
  removeProperty,
};
