const contactUs = contactUsDetails => ({
  type: 'CONTACT_US',
  contactUsDetails
})

const resetPassword = resetPasswordDetails => ({
  type: 'RESET_PASSWORD',
  resetPasswordDetails
})

const resetContactStatus = () => ({
  type: 'RESET_CONTACT_US',
})

export { contactUs, resetPassword, resetContactStatus }