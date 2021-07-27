export const paymentFieldsLengths = {
    PHONE_MIN: 10,
    PHONE_MAX: 10,
    CVV_MIN: 3,
    CVV_MAX: 4,
    CC_MIN: 13,
    CC_MAX: 19
  };
  
  export const errors = {
    FIRST_NAME_REQUIRED: 'Please enter your First Name',
    LAST_NAME_REQUIRED: 'Please enter your Last Name',
    PHONE_REQUIRED: 'Please enter your Phone',
    EMAIL_REQUIRED: 'Please enter your Email Address',
    ADDRESS_REQUIRED: 'Please enter your Address',
    CITY_REQUIRED: 'Please enter your City',
    STATE_REQUIRED: 'Please select your State',
    PROVINCE_REQUIRED: 'Please select your Province',
    POSTAL_REQUIRED: 'Please enter your Postal Code',
    POSTAL_ONLY_5: 'Postal Code must be exactly 5 characters',
    POSTAL_INVALID: 'Postal Code is invalid',
    NAME_ON_CARD_REQUIRED: 'Please enter your Name on Card',
    CARD_NUMBER_REQUIRED: 'Please enter your Card Number',
    CVV_REQUIRED: 'Required',
    EMAIL: 'Email address should be in the format xx@xxx.xx',
    PHONE: 'Phone should be in the format (xxx) xxx-xxxx',
    CVV_ONLY_NUMBERS: 'Use only #s',
    PHONE_LENGTH: `Invalid size, must be of ${paymentFieldsLengths.PHONE_MAX}`,
    CVV_LENGTH: `${paymentFieldsLengths.CVV_MIN}
      to ${paymentFieldsLengths.CVV_MAX} digits`,
    PAYMENT: 'Invalid Payment Option',
    OPTION: 'Invalid option',
    REQUIRED_MONTH: 'Select Month',
    REQUIRED_YEAR: 'Select Year',
    REQUIRED_COUNTRY: 'Please select your Country',
    VALID_CREDIT_CARD_NUMBER: 'Card Number must be a valid credit card',
    CURRENT_PASSWORD_REQUIRED: 'Current Password is required',
    NEW_PASSWORD_CAN_NOT_MATCH_CURRENT:
      'New Password cannot match Current Password',
    NEW_COMFIRM_PASSWORD_SHOULD_MATCH:
      'Password and Confirm Password do not match.',
    CONFIRMATION_PASSWORD_REQUIRED: 'Confirmation Password is required',
    NEW_PASSWORD_REQUIRED: 'Password is required',
    NOT_VALID_PASSWORD:
      'A valid Password must contain: 1 number, 1 upper case letter, 1 lower case letter and be at least 8 characters long'
  };
  