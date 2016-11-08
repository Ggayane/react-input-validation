function _bind (...methods) {
  methods.forEach((method) => this[method] = this[method].bind(this))
}

module.exports = {
  _bind
}
