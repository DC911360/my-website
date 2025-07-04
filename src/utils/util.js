
//验证手机号 合法性
export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return
  var reg = /^1[3456789]\d{9}$/
  if (reg.test(phoneNumber)) {
    return true
  } else {
    return false
  }
}