
// Entree
import springRolls from '../assets/entree/springRolls.jpg';
import ricePaper from '../assets/entree/ricePaper.jpg';
import pancakes from '../assets/entree/pancakes.jpg';
import fishCakes from '../assets/entree/fishCakes.jpg';
// import betalLeaf from '../assets/entree/fishCakes.jpg';
import tofuTamarind from '../assets/entree/tofuTamarind.jpg';
import dumpling from '../assets/entree/dumpling.jpg';
import scallop from '../assets/entree/scallop.jpg';
import tempuraPrawn from '../assets/entree/tempuraPrawn.jpg';
import sugarcanePrawn from '../assets/entree/sugarcanePrawn.jpg';
import eggplantGS from '../assets/entree/eggplantGS.jpg';

// Salt and Pepper
import porkchopSP from '../assets/saltAndPepper/porkchopSP.jpg';
import prawnSP from '../assets/saltAndPepper/prawnSP.jpg';
import calamariSP from '../assets/saltAndPepper/calamariSP.jpg';
import eggplantSP from '../assets/saltAndPepper/eggplantSP.jpg';

// Rice noodle soup
import rareBeef from '../assets/riceNoodle/rareBeef.jpg';
import combinationPho from '../assets/riceNoodle/combinationPho.jpg';
import namDinh from '../assets/riceNoodle/namDinh.jpg';
import rarebeefBrisker from '../assets/riceNoodle/rareBeefBrisker.jpg';
import stewBeef from '../assets/riceNoodle/stewBeef.jpg';
import friedNoodle from '../assets/riceNoodle/friedNoodle.jpg';

const food_category = [
  {
    title: 'Entree',
    food_items: [
      {
        name: 'Rice paper rolls (3 rolls)(no mixing)',
        desc: 'Grilled pork/ beef/ prawn/ chicken/ tofu',
        price: '10',
        image: ricePaper 
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
        // image: 
      }, {
        name: 'Crispy tofu with tamarind sauce',
        price: '8',
        image: tofuTamarind
      }, {
        name: 'Dumpling (no mixing)',
        desc: 'Pork/ prawn/ veggies/ scallop+$2',
        price: '10',
        image: dumpling
      }, {
        name: 'Dumpling Scallop',
        price: '12',
        image: scallop
      }, {
        name: 'Tempura',
        desc: 'Prawn/ Veggies',
        price: '9',
        image: tempuraPrawn
      }, {
        name: 'Sugarcane prawn',
        price: '13',
        image: sugarcanePrawn
      }, {
        name: 'Eggplant tossed with ginger & shallot',
        price: '14',
        image: eggplantGS
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
        image: porkchopSP
      }, {
        name: 'Calamari',
        price: '21',
        image: calamariSP
      }, {
        name: 'Prawn',
        price: '21',
        image: prawnSP
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
        image: eggplantSP
      }
    ]
  }, {
    title: 'Rice noodle soup',
    food_items: [
      {
        name: 'Nam Dinh beef rice noodle soup',
        price: '17',
        image: namDinh
      }, {
        name: 'Wagu beef rice noodle soup',
        price: '21',
        // image: rareBeef
      }, {
        name: 'Rare beef rice noodle soup',
        price: '16',
        image: rareBeef
      }, {
        name: 'Rare beef rice noodle soup with',
        desc: 'Tripe/ meatball/ brisket',
        price: '17',
        image: rarebeefBrisker
      }, {
        name: 'Combination rice noodle soup',
        price: '18',
        image: combinationPho
      }, {
        name: '(Boneless/ Free range +$1) chicken rice noodle soup',
        price: '15',
        // image: rareBeef
      }, {
        name: 'Seafood rice noodle soup',
        price: '19',
        // image: rareBeef
      }, {
        name: 'Crispy chicken rice noodle soup',
        price: '17',
        // image: rareBeef
      }, {
        name: 'Stew beef rice noodle soup',
        price: '17',
        image: stewBeef
      }, {
        name: 'Stir fried rice noodle (crispy/ soft) with',
        desc: 'Beef/ chicken/ seafood +$4',
        price: '15',
        image: friedNoodle
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