const food = [
  {
    title: 'Entree',
    food_items: [
      {
        name: 'Rice paper rolls (3 rolls)(no mixing)',
        desc: 'Grilled pork/ beef/ prawn/ chicken/ tofu',
        price: 10,
        image: './images/entree/ricePaper.jpg',
      },
      {
        name: 'Vietnamese deep fried spring rolls (3 rolls)',
        desc: 'Pork & taro/ veggies & tofu',
        price: 10,
        image: './images/entree/springRolls.jpg',
      },
      {
        name: 'Crispy Vietnamese pancake',
        price: '15',
        image: './images/entree/pancakes.jpg',
      },
      {
        name: 'Fish cakes',
        price: '12',
        image: './images/entree/fishCakes.jpg',
      },
      {
        name: 'Ground beef in betal leaf (6 pieces)',
        price: '10',
        image: './images/entree/beefBetal.jpg',
      },
      {
        name: 'Crispy tofu with tamarind sauce',
        price: '8',
        image: './images/entree/tofuTamarind.jpg',
      },
      {
        name: 'Dumpling (no mixing)',
        desc: 'Pork/ prawn/ veggies/ scallop+$2',
        price: '10',
        image: './images/entree/scallop.jpg',
      },
      {
        name: 'Crab meat cake',
        price: 14,
        image: './images/entree/crabCake.jpg',
      },
      {
        name: 'Sugarcane prawn',
        price: '13',
        image: './images/entree/sugarcanePrawn.jpg',
      },
      {
        name: 'Eggplant tossed with ginger & shallot',
        price: '14',
        image: './images/entree/eggplantGS.jpg',
      },
      {
        name: 'Deep fried quail',
        price: '20',
        image: './images/entree/quail.jpg'
      },
      {
        name: 'Deep fried dough sticks',
        price: '3.5',
        image: './images/entree/dough.jpg'
      },
    ],
  },
  {
    title: 'Salt and pepper',
    food_items: [
      {
        name: 'Porkchop',
        price: '16',
        image: './images/saltAndPepper/porkchopSP.jpg',
      },
      {
        name: 'Calamari',
        price: '22',
        image: './images/saltAndPepper/calamariSP.jpg',
      },
      {
        name: 'Prawn',
        price: '22',
        image: './images/saltAndPepper/prawnSP.jpg',
      },
      {
        name: 'Chicken',
        price: '17',
        // image: eggplant
      },
      {
        name: 'Fish',
        price: '22',
        // image: eggplant
      },
      {
        name: 'Tofu',
        price: '14',
        image: './images/saltAndPepper/tofuSP.jpg',
      },
      {
        name: 'Eggplant',
        price: '14',
        image: './images/saltAndPepper/eggplantSP.jpg',
      },
    ],
  },
  {
    title: 'Rice noodle soup',
    food_items: [
      {
        name: 'Nam Dinh beef rice noodle soup',
        price: '17',
        image: './images/riceNoodle/namDinh.jpg',
      },
      {
        name: 'Wagu beef rice noodle soup',
        price: '24',
        image: './images/riceNoodle/wagu.jpg'
      },
      {
        name: 'Rare beef rice noodle soup',
        price: '16',
        image: './images/riceNoodle/rareBeef.jpg',
      },
      {
        name: 'Rare beef rice noodle soup with',
        desc: 'Tripe/ meatball/ brisket',
        price: '17',
        image: './images/riceNoodle/rareBeefBrisker.jpg',
      },
      {
        name: 'Combination rice noodle soup',
        price: '19',
        image: './images/riceNoodle/combinationPho.jpg',
      },
      {
        name: '(Boneless/ Free range +$1) chicken rice noodle soup',
        price: '16',
        // image: rareBeef
      },
      {
        name: 'Seafood rice noodle soup',
        price: '19',
        image: './images/riceNoodle/seafoodPho.jpg',
      },
      {
        name: 'Crispy chicken rice noodle soup',
        price: '17',
        image: './images/riceNoodle/CChNoodle.jpg'
      },
      {
        name: 'Stew beef rice noodle soup',
        price: '17',
        image: './images/riceNoodle/stewBeef.jpg',
      },
      {
        name: 'Stir fried rice noodle (crispy/ soft) with',
        desc: 'Beef/ chicken/ seafood +$4',
        price: '16',
        image: './images/riceNoodle/friedNoodle.jpg',
      },
    ],
  },
  {
    title: 'Vermicelli',
    food_items: [
      {
        name: 'Vietnamese grill pork',
        desc: 'extra spring rolls + $3.5',
        price: 16,
        image: './images/vermicelli/vnGrillP.jpg',
      }, {
        name: 'Fish cake vermicelli soup',
        price: 16,
        image: './images/vermicelli/fishCakeSoup.jpg',
      }, {
        name: 'Vermicelli salad bowl, lemongrass with',
        desc: 'beef/ BBQ grilled pork/ chicken/ beef in betel leaf/ porkchop/ crispy chicken/ sugarcane prawn/ tofu/ pork spring rolls/ veggie spring rolls/ seadfood+$4',
        price: 16,
        image: './images/vermicelli/saladBowl.jpg',
      }, {
        name: 'Farm chicken and mince pork ball (soup)',
        desc: '(Bun moc)',
        price: 16,
        image: './images/vermicelli/bunMoc.jpg',
      }, {
        name: 'Farm duck/ chicken with bamboo (soup)',
        price: 16,
        image: './images/vermicelli/bambooSoup.jpg',
      }, {
        name: 'Chicken laksa vermicelli (soup)',
        price: 15,
        image: './images/vermicelli/laksa.jpg',
      }
    ],
  },
  {
    title: 'Clear vermicelli noodle',
    food_items: [
      {
        name: 'Fresh chicken/ duck(+$1) clear vermicelli noodle with bamboo (soup)',
        price: 15,
        // image: './images/clearV/clearS.jpg'
      }, {
        name: 'Stir fried vermicelli noodle with',
        desc: 'beef/ chicken/ seafood +$4',
        price: 15,
        image: './images/clearV/stirV.jpg'
      }
    ]
  },
  {
    title: 'Egg noodle soup',
    food_items: [
      {
        name: 'Egg noodle with crispy chicken and vegetables',
        price: 17,
        image: './images/eggnoodle/eggNoodle.jpg'
      }, {
        name: 'Dried egg noodle with crispy chicken',
        price: 17,
        image: './images/eggnoodle/driedEggNoodle.jpg',
      }, {
        name: 'Stir fried egg noodle (soft/ crispy) with',
        desc: 'beef/ chicken/ porkchop/ seafood + $4',
        price: 16,
        image: './images/eggnoodle/stirFEggN.jpg'
      }
    ],
  },
  {
    title: 'Congee/ Porridge',
    food_items: [
      {
        name: 'Chicken/ beef congee',
        price: 14,
        image: './images/congee/chickenCongee.jpg'
      }, {
        name: 'Mix seafood congee',
        price: 16,
        image: './images/congee/seafoodCongee.jpg',
      }, {
        name: 'Mince pork congee',
        price: 14,
        image: './images/congee/porkCongee.jpg'
      }
    ],
  },
  {
    title: 'Salad',
    food_items: [
      {
        name: 'Papaya salad',
        desc: 'Prawn/ BBQ pork/ chicken/ beef/ duck',
        price: 16,
        image: './images/salad/papaya.jpg'
      }, {
        name: 'Papaya salad with tofu',
        price: 14,
        image: './images/salad/tofuPapaya.jpg',
      }, {
        name: 'Cabbages salad',
        desc: 'prawn/ BBQ pork/ chicken/ beef/ duck',
        price: 15,
        // image: './images/salad/cabbages.jpg'
      }, {
        name: 'Cabbages salad with tofu',
        price: 13,
        // image: './images/salad/tofuCabbages.jpg'
      }
    ],
  },
  {
    title: 'Steam / Tomato rice',
    food_items: [
      {
        name: 'Rice with porkchop and egg',
        price: 15,
        image: './images/rice/ricePorkchop.jpg',
      },
      {
        name: 'Rice with sweet and sour porkchop',
        price: 15,
        image: './images/rice/riceSweetPork1.jpg',
      },
      {
        name: 'Rice with crispy skinned chicken',
        price: 15,
        image: './images/rice/riceCrispyChicken.jpg',
      },
      {
        name: 'Rice with stir fried vegetable',
        desc: 'beef/ chicken/ seafood + $4',
        price: 15,
        image: './images/rice/riceStirVeg.jpg',
      },
      {
        name: 'Rice with lemongrass and chili sauce',
        desc: 'beef/ chicken/ seafood + $4',
        price: 15,
        image: './images/rice/riceLemongChili1.jpg',
      },
      {
        name: 'Rice with satay sauce',
        desc: 'beef/ chicken/ seafood + $4',
        price: 15,
        // image: './images/rice/riceSatay.jpg',
      },
      {
        name: 'Rice with ginger and shallot',
        desc: 'beef/ chicken/ seafood + $4',
        price: 15,
        image: './images/rice/riceGingerSh.jpg',
      },
      {
        name: 'Rice with curry sauce',
        desc: 'beef/ chicken/ seafood + $4',
        price: 15,
        // image: './images/rice/riceCurry.jpg',
      },
      {
        name: 'Rice with Shaking cube beef',
        price: 17,
        image: './images/rice/riceShaking.jpg',
      },
      {
        name: 'Rice with grilled chicken',
        price: 15,
        image: './images/rice/riceGrilledCh1.jpg',
      },
      {
        name: 'Rice with caramelised pork belly, eggs',
        price: 16,
        image: './images/rice/ricePorkBelly.jpg',
      },
      {
        name: 'Fried rice with',
        desc: 'beef/ chicken/ duck/ seafood + $4',
        price: 15,
        image: './images/rice/friedRice.jpg',
      },
      {
        name: 'Combination fried rice',
        desc: '(chinese sausage, bbq pork, prawn)',
        price: 17,
        image: './images/rice/combinationRice.jpg',
      },
      {
        name: 'Salty fish fried rice with chicken',
        price: 17,
        // image: './images/rice/riceSaltyF.jpg',
      },
      {
        name: 'Vegeterian fried rice',
        price: 14,
        image: './images/rice/vegRice.jpg',
      },
      {
        name: 'Beef fried rice with green mustard pickle',
        price: 17,
        image: './images/rice/ricePickle.jpg',
      },
    ],
  },
  {
    title: 'Main',
    food_items: [
      {
        name: 'Deep fried whole barramundi fish',
        desc: '(Singapore sauce/ lemongrass chili/ ginger shallot)',
        price: 35,
        image: './images/main/deepFBarram.jpg'
      }, {
        name: 'Chicken steam with lotus seeds in hotpot',
        price: 45,
        image: './images/main/steamChicken.jpg'
      }, {
        name: 'Free range duck stir fried with mushrooms',
        price: 17,
        image: './images/main/duckMushroomss.jpg'
      }, {
        name: 'Shaking beef with onion and capsicum',
        price: 20,
        image: './images/main/shakingBeef.jpg'
      }, {
        name: 'Sweet and sour pork',
        price: 17,
        image: './images/main/sweetPork.jpg'
      }, {
        name: 'Steam boneless barramundi with ginger shallot',
        price: 22,
        image: './images/main/steamBarram.jpg'
      }, {
        name: 'Stir fried beef/ chicken/ seafood + $4 with lemongrass chili',
        price: 18,
        image: './images/main/lemongrassChili.jpg'
      }, {
        name: 'Stir fried beef/ chicken/ seafood + $4 with satay sauce',
        price: 18,
        image: './images/main/satay.jpg'
      }, {
        name: 'Stir fried beef/ chicken/ seafood + $4 with ginger shallot sauce',
        price: 18,
        image: './images/main/GShallot.jpg'
      }, {
        name: 'Stir fried beef/ chicken/ seafood + $4 with curry sauce',
        price: 18,
        image: './images/main/curry.jpg'
      }, {
        name: 'Stir fried fish with mushroom and snow pea',
        price: 21,
        image: './images/main/duckMushrooms.jpg'
      }, {
        name: 'Seafood on the hotplate',
        price: 18,
        // image: './images/main/hotplate.jpg'
      }, {
        name: 'Tomyum soup',
        price: 18,
        image: './images/main/tomyum.jpg'
      }, {
        name: 'Sweet and sour fish soup',
        price: 18,
        image: './images/main/sourFishS.jpg'
      }, {
        name: 'Grilled Maryland chicken with lemongrass',
        price: 18,
        image: './images/main/marylandChicken.jpg'
      }, {
        name: 'Stir fried duck with tamarind sauce',
        price: 18,
        image: './images/main/duckTamarind.jpg'
      }
    ]
  },
  {
    title: 'Vegetables dish',
    food_items: [
      {
        name: 'Stir fried water spinach with garlic and chili',
        price: 14,
        image: './images/vegetables/waterSpinach.jpg'
      }, {
        name: 'Stir fried snow peas with ginger',
        price: 14,
        image: './images/vegetables/snowpea.jpg',
      }, {
        name: 'Stir fried choy sum with garlic',
        price: 14,
        image: './images/vegetables/choysum.jpg'
      }, {
        name: 'Stir fried mix vegetables',
        price: 13,
        image: './images/vegetables/mix.jpg'
      }
    ],
  },
  {
    title: 'Vegetarian',
    food_items: [
      {
        name: 'Rice paper rolls',
        desc: 'Tofu (3 rolls)',
        price: 10,
        // image: './images/vegetarian/ricePTofu.jpg'
      }, {
        name: 'Vietnamese deep fried spring rolls',
        desc: 'veggies and tofu (3 rolls)',
        price: 10,
        image: './images/vegetarian/veggieSR.jpg',
      }, {
        name: 'Crispy Vietnamese pancake',
        desc: 'Tofu',
        price: 15,
        image: './images/vegetarian/tofuPancake.jpg'
      }, {
        name: 'Dumpling veggies',
        price: 10,
        image: './images/vegetarian/veggieD.jpg'
      }, {
        name: 'Eggplant tossed with ginger and shallot sauce',
        price: 14,
        image: './images/vegetarian/eggplantGS.jpg'
      }, {
        name: 'Salt and pepper',
        desc: 'tofu/ eggplant',
        price: 14,
        // image: './images/vegetarian/tofuSP.jpg'
      }, {
        name: 'Vegan rice noodle soup',
        desc: '(tofu and veggies)',
        price: 15,
        image: './images/vegetarian/veganRN.jpg'
      }, {
        name: 'Vermicelli salad bowl, lemongrass with',
        desc: 'tofu/ veggies spring rolls',
        price: 16,
        image: './images/vegetarian/saladBowl.jpg'
      }, {
        name: 'Stir fried vegetable with tofu',
        desc: 'with rice extra +$3',
        price: 14,
        image: './images/vegetarian/vegetableTofu.jpg'
      }, {
        name: 'Vegetarian fried rice',
        price: 14,
        image: './images/vegetarian/vegetarianRice.jpg'
      }
    ],
  }
];
module.exports = food;
