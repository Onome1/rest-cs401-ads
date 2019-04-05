module.exports = function(mongoose) {
  let modelName = 'mechanic'
  let Types = mongoose.Schema.Types
  let Schema = new mongoose.Schema(
    {
      name: {
        type: Types.String,
        required: true
      },
      address: {
        type: Types.String
      },
      city: {
        type: Types.String
      },
      state: {
        type: Types.String
      },
      zipCode: {
        type: Types.String
      }
    },
    { collection: modelName }
  )

  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
      /*associations: {
        users: {
          type: 'ONE_MANY',
          alias: 'user',
          foreignField: 'role',
          model: 'user'
        },
        permissions: {
          type: 'MANY_MANY',
          alias: 'permission',
          model: 'permission',
          linkingModel: 'role_permission'
        }
      }*/
    }
  }

  return Schema
}
