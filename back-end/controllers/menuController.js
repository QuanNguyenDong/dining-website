const asyncHandler = require('express-async-handler')
const Menu = require('../models/menuModel')

// @desc Get all list
// @route GET /api/menu
// @access Public
const getMenu = asyncHandler(async (req, res) => {
  const menu = await Menu.find({})

  res.status(200).json(menu)
})

// const postMenu = asyncHandler(async (req, res) => {
//   const menu = await Menu.create({
//     name: req.body.name,
//     desc: req.body.desc,
//     price: req.body.price,
//   })
//   console.log(req.body)
//   res.status(200).json(menu)
// })

module.exports = {getMenu}