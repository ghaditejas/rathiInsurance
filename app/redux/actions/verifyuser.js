const verifyUser = (verifyUserDetails,method) => (
  {
    type: 'VERIFY_USER',
    verifyUserDetails,
    method,
  })
export { verifyUser }