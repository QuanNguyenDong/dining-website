import rareBeef from '../assets/images/rare beef.jpg';
import bunCha from '../assets/images/Bun-cha.jpg';
import springRolls from '../assets/images/spring rolls.jpg';
import pancakes from '../assets/images/pancakes.jpg';
import fishCakes from '../assets/images/fish cakes.jpg';
import eggplant from '../assets/images/eggplant SP.jpg';
import images from '../constants/images';
const food_category = [
  {
    title: 'Entree',
    food_items: [
      {
        name: 'Deep fried spring rolls',
        desc: 'Pork and taro/ veggies and tofu',
        price: '10',
        image: springRolls
      }, {
        name: 'Crispy Vietnamese panscake',
        price: '15',
        image: pancakes
      }, {
        name: 'Fish cakes',
        price: '12',
        image: fishCakes
      }, {
        name: 'Fish cakes',
        price: '12',
        image: fishCakes
      }
    ]
  }, {
    title: 'Salt and pepper',
    food_items: [
      {
        name: 'Eggplant',
        price: '14',
        image: eggplant
      }
    ]
  }, {
    title: 'Rice noodle soup',
    food_items: [
      {
        name: 'Rare beef noodle soup (beef Pho)',
        desc: 'tripe/ meetball/ brisket',
        image: rareBeef,
        price: '16'
      }
    ]
  }, {
    title: 'Vermicelli',
    food_items: [
      {
        name: 'Rare beef noodle soup (beef Pho)',
        desc: 'tripe/ meetball/ brisket',
        image: bunCha,
        price: '16'
      }
    ]
  }, {
    title: 'Egg Noodle',
    food_items: [
      {
        name: 'Egg Noodle with Crispy chicken',
        image: images.eggNoodleCC,
        price: '16'
      }
    ]
  }
]

export default food_category;