export const VALID_USER = 'VALID_USER';

export const validUser = (email) => ({
  type: VALID_USER,
  email,
});
