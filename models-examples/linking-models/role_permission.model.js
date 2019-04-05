let mongoose = require('mongoose')

module.exports = function() {
  let Types = mongoose.Schema.Types

  let Model = {
    Schema: {
      enabled: {
        type: Types.Boolean,
        default: true
      }
    },
    modelName: 'role_permission'
  }

  return Model
}
