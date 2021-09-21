export default (state = {}, action) => {
    switch (action.type) {

        case 'ResetPassword':
            return {
                ...state,
                resetStatus: true,
                message: action.payload.message,
                successMessage: ''
            }
        case 'ResetPasswordError':
            return {
                ...state,
                resetStatus: false,
                errorMessage: action.payload.message,
                successMessage: ''
            }
        case 'ResetPasswordSucess':
            return {
                ...state,
                resetStatus: false,
                successMessage: action.payload.message,
                message: ''
            }
        default:
            return state
    }
}