const mongoose = require('mongoose')

const menuSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Menu', menuSchema)