export default (state = {}, action) => {
  switch (action.type) {
    case 'ContactUS':
      return {
        ...state,
        contactStatus: true,
        message: 'Your feedback has been received'
      }
    case 'ContactUsError':
      return {
        ...state,
        contactStatus: false,
        message: action.payload.message
      }
    case 'ResetContactUS':
      return {
        ...state,
        contactStatus: undefined
      }
    default:
      return state
  }
}