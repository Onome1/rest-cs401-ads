module.exports = function(mongoose) {
  let modelName = 'vehicleRecord'
  let Types = mongoose.Schema.Types
  let Schema = new mongoose.Schema(
    {
      vinNumber: {
        type: Types.String,
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
