export const URLSearchParamsToObject = (searchParams) => {
  const result = {};
  searchParams.forEach((value, key) => {
    result[key] = value;
  });
  return result;
};

export default {
  URLSearchParamsToObject,
};
