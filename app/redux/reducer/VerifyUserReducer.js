export default (state = {}, action) => {
    switch (action.type) {
      case 'verifyUser':
        console.log(action);
        return {
          ...state,
          VerifyUserStatus: true,
          message: 'user Verificaction in process'
        }
        case 'verifyUserError':
      return {
        ...state,
        VerifyUserStatus: false,
        message: action.payload.message
      }
      default:
        return state
    }
  }