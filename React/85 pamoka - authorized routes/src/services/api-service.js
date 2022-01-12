const fakeFetch = ({ email, password }) => new Promise(((success, failure) => {
  setTimeout(() => {
    if (email === 'admin@gmail.com' && password === 'Vilnius123') {
      success({
        token: 'isdfvblska;dfgb;sdfh',
        user: {
          id: '5165',
          role: 'user',
          email: 'admin@gmail.com',
        },
      });
    } else {
      failure(new Error('Incorect email or/and password'));
    }
  }, 2000);
}));

const login = async ({ email, password }) => {
  const response = await fakeFetch({ email, password });
  return response;
};

export default {
  login,
};
