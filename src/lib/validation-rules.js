function checkEmail (value) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}

function checkNumberPositive (value) {
  return /^\+?([1-9]\d*)$/.test(value)
}

function checkUrl (value) {
  return /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(value)
}

function checkPassword (value, param) {
  if (value.length >= param) {
    return true
  }
  return false
}

function checkRePassword (value, compareTo) {
  if (value === compareTo) {
    return true
  }
  return false
}

function positiveNumberWithLimit (value, limit) {
  if (parseInt(value, 10) <= parseInt(limit, 10) && this.checkNumberPositive(value)) {
    return true
  }
  return false
}

function customValidation (value, regex) {
  var pattern = new RegExp(regex)
  return pattern.test(value)
}

module.exports = {
  checkEmail,
  checkNumberPositive,
  checkUrl,
  checkPassword,
  checkRePassword,
  positiveNumberWithLimit,
  customValidation
}
