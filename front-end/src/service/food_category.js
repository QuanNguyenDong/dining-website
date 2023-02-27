import rareBeef from '../assets/images/rare beef.jpg';
import bunCha from '../assets/images/Bun-cha.jpg';
import springRolls from '../assets/images/spring-rolls.jpg';
import pancakes from '../assets/images/pancakes.jpg';
import fishCakes from '../assets/images/fish cakes.jpg';
import eggplant from '../assets/images/eggplant SP.jpg';
import images from '../constants/images';

const food_category = [
  {
    title: 'Entree',
    food_items: [
      {
        name: 'Rice paper rolls (3 rolls)(no mixing)',
        desc: 'Grilled pork/ beef/ prawn/ chicken/ tofu',
        price: '10',
        // image: 
      }, {
        name: 'Vietnamese deep fried spring rolls (3 rolls)',
        desc: 'Pork & taro/ veggies & tofu',
        price: '10',
        image: springRolls
      }, {
        name: 'Crispy Vietnamese pancake',
        price: '15',
        image: pancakes
      }, {
        name: 'Fish cakes',
        price: '12',
        image: fishCakes
      }, {
        name: 'Ground beef in betal leaf (6 pieces)',
        price: '10',
        // image: fishCakes
      }, {
        name: 'Crispy tofu with tamarind sauce',
        price: '8',
        // image: fishCakes
      }, {
        name: 'Dumpling (no mixing)',
        desc: 'Pork/ prawn/ veggies',
        price: '10',
        // image: fishCakes
      }, {
        name: 'Dumpling Scallop',
        price: '12',
        // image: fishCakes
      }, {
        name: 'Tempura',
        desc: 'Prawn/ Veggies',
        price: '9',
        // image: fishCakes
      }, {
        name: 'Sugarcane prawn',
        price: '13',
        // image: fishCakes
      }, {
        name: 'Eggplant tossed with ginger & shallot',
        price: '14',
        // image: fishCakes
      }, {
        name: 'Deep fried quail',
        price: '15',
        // image: fishCakes
      }, {
        name: 'Deep fried dough sticks',
        price: '3.5ea',
        // image: fishCakes
      }
    ]
  }, {
    title: 'Salt and pepper',
    food_items: [
      {
        name: 'Porkchop',
        price: '16',
        // image: eggplant
      }, {
        name: 'Calamari',
        price: '21',
        // image: eggplant
      }, {
        name: 'Prawn',
        price: '21',
        // image: eggplant
      }, {
        name: 'Chicken',
        price: '17',
        // image: eggplant
      }, {
        name: 'Fish',
        price: '21',
        // image: eggplant
      }, {
        name: 'Tofu',
        price: '14',
        // image: eggplant
      }, {
        name: 'Eggplant',
        price: '14',
        image: eggplant
      }
    ]
  }, {
    title: 'Rice noodle soup',
    food_items: [
      {
        name: 'Nam Dinh beef rice noodle soup',
        // image: rareBeef,
        price: '17'
      }, {
        name: 'Wagu beef rice noodle soup',
        // image: rareBeef,
        price: '21'
      }, {
        name: 'Rare beef rice noodle soup',
        // image: rareBeef,
        price: '16'
      }, {
        name: 'Rare beef rice noodle soup with',
        desc: 'Tripe/ meatball/ brisket',
        // image: rareBeef,
        price: '17'
      }, {
        name: 'Combination rice noodle soup',
        // image: rareBeef,
        price: '18'
      }, {
        name: '(Boneless/ Free range +$1) chicken rice noodle soup',
        // image: rareBeef,
        price: '15'
      }, {
        name: 'Seafood rice noodle soup',
        // image: rareBeef,
        price: '19'
      }, {
        name: 'Crispy chicken rice noodle soup',
        // image: rareBeef,
        price: '17'
      }, {
        name: 'Stew beef rice noodle soup',
        // image: rareBeef,
        price: '17'
      }, {
        name: 'Stir fried rice noodle (crispy/ soft) with',
        desc: 'Beef/ chicken/ seafood +$4',
        // image: rareBeef,
        price: '15'
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