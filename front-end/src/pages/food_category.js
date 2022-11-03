// import rareBeefPho from '../assets/ND_img_beefPho.jpg';
import beefPho from '../assets/ND_img_PhoTai.jpg';
import bunCha from '../assets/Bun-cha.jpg';
const food_category = [
  {
    title: 'Entree',
    food_items: [
      {
        name: 'Rice paper rolls',
        desc: 'Grill pork/ chicken/ beef/ prawn/ tofu',
        price: '10',
      }, {
        name: 'Deep fried spring rolls',
        desc: 'Pork and taro/ veggies and tofu',
        price: '10'
      }, {
        name: 'Crispy Vietnamese panscake',
        price: '15'
      }, {
        name: 'Ground beef in betel leaf',
        price: '8'
      }, {
        name: 'Dumpling',
        price: '10'
      }
    ]
  }, {
    title: 'Salt and pepper',
    food_items: [
      {
        name: 'Porkchop',
        price: '16'
      }, {
        name: 'Calamari',
        price: '21'
      }, {
        name: 'Prawn',
        price: '21'
      }, {
        name: 'Chicken',
        price: '17'
      }, {
        name: 'Fish',
        price: '21'
      }
    ]
  }, {
    title: 'Rice noodle soup',
    food_items: [
      {
        name: 'Rare beef noodle soup (beef Pho)',
        desc: 'tripe/ meetball/ brisket',
        image: beefPho,
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
  }
]

export default food_category;