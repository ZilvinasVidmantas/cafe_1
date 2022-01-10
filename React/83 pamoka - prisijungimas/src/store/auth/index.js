const initState = {
  loggedIn: false,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = initState, action) => {
  switch (action.type) {
    // Action'ų apdorojimas
    default:
      return state;
  }
};

export default authReducer;
