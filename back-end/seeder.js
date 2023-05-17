const food = require('./data/food.js')
const Menu = require('./models/menuModel.js')
const connectDB = require('./config/db');

connectDB();

const importData = async () => {
  try {
    await Menu.deleteMany();

    // const createdUsers = await User.insertMany(users)

    const sampleFood = food.map((item) => {
      return { ...item }
    })

    await Menu.insertMany(sampleFood)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Menu.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}