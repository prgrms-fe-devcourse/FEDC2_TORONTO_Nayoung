import Cookies from 'universal-cookie';

/* token 저장 */
export const onSaveToken = async (token) => {
  const cookies = new Cookies();
  cookies.set('USER_TOKEN', token, { path: '/' });
};

/* get token */
export const getToken = () => {
  const cookies = new Cookies();
  return cookies.get('USER_TOKEN');
};
