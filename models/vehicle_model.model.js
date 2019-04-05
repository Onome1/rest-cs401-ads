module.exports = function(mongoose) {
  let modelName = 'vehicleModel'
  let Types = mongoose.Schema.Types
  let Schema = new mongoose.Schema(
    {
      make: {
        type: Types.String,
        required: true
      },
      model: {
        type: Types.String,
        required: true
      },
      year: {
        type: Types.Number,
        required: true
      }
    },
    { collection: modelName }
  )

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
    }
  }

  return Schema
}
