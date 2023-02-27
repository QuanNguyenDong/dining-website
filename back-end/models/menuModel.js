const mongoose = require('mongoose')

const menuSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    food_items: [{
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
    }
    ]
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Menu', menuSchema)