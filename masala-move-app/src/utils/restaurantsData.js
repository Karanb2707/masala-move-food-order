import res1 from '../assets/images/restaurants/res1.webp';

const restaurantsData = [
  {
    id: 1,
    name: "Bombay Spice Hub",
    avgRating: 4.5,
    costForTwo: "₹400 for two",
    cuisines: ["Indian", "Chinese", "Tandoor"],
    sla: { slaString: "30 mins" },
    veg: true,
    image: res1,
    menu: [
      {
        title: "Starters",
        items: [
          { id: 111, name: "Paneer Tikka", price: 250, rating: 4.6, desc: "Grilled paneer marinated in spices", image: "https://source.unsplash.com/400x300/?paneer-tikka,starter" },
          { id: 112, name: "Veg Manchurian", price: 220, rating: 4.4, desc: "Crispy veg balls tossed in Indo-Chinese sauce", image: "https://source.unsplash.com/400x300/?veg-manchurian,indo-chinese" },
          { id: 113, name: "Hara Bhara Kebab", price: 200, rating: 4.3, desc: "Spinach and peas patties with chutney", image: "https://source.unsplash.com/400x300/?hara-bhara-kabab" },
          { id: 114, name: "Aloo Tikki", price: 180, rating: 4.2, desc: "Crispy potato patties with tamarind chutney", image: "https://source.unsplash.com/400x300/?aloo-tikki,street-food" },
          { id: 115, name: "Spring Rolls", price: 190, rating: 4.5, desc: "Crispy rolls stuffed with vegetables", image: "https://source.unsplash.com/400x300/?spring-rolls,appetizer" },
          { id: 116, name: "Chilli Paneer", price: 240, rating: 4.7, desc: "Paneer cubes in spicy tangy sauce", image: "https://source.unsplash.com/400x300/?chilli-paneer" }
        ]
      },
      {
        title: "Main Course",
        items: [
          { id: 121, name: "Paneer Butter Masala", price: 280, rating: 4.8, desc: "Creamy tomato-based paneer curry", image: "https://source.unsplash.com/400x300/?paneer-butter-masala" },
          { id: 122, name: "Dal Makhani", price: 250, rating: 4.7, desc: "Slow-cooked black lentils with butter", image: "https://source.unsplash.com/400x300/?dal-makhani" },
          { id: 123, name: "Veg Kadai", price: 260, rating: 4.5, desc: "Mixed vegetables tossed in kadai masala", image: "https://source.unsplash.com/400x300/?veg-kadai" },
          { id: 124, name: "Chole Masala", price: 240, rating: 4.6, desc: "Spicy chickpea curry cooked with Punjabi spices", image: "https://source.unsplash.com/400x300/?chole-masala" },
          { id: 125, name: "Palak Paneer", price: 270, rating: 4.5, desc: "Paneer cooked in spinach gravy", image: "https://source.unsplash.com/400x300/?palak-paneer" },
          { id: 126, name: "Bhindi Masala", price: 230, rating: 4.3, desc: "Okra sautéed with onions and spices", image: "https://source.unsplash.com/400x300/?bhindi-masala" }
        ]
      },
      {
        title: "Breads",
        items: [
          { id: 131, name: "Butter Naan", price: 40, rating: 4.8, image: "https://source.unsplash.com/400x300/?butter-naan,naan" },
          { id: 132, name: "Tandoori Roti", price: 30, rating: 4.5, image: "https://source.unsplash.com/400x300/?tandoori-roti,roti" },
          { id: 133, name: "Garlic Naan", price: 50, rating: 4.9, image: "https://source.unsplash.com/400x300/?garlic-naan" },
          { id: 134, name: "Lachha Paratha", price: 45, rating: 4.6, image: "https://source.unsplash.com/400x300/?paratha,lachha-paratha" },
          { id: 135, name: "Missi Roti", price: 35, rating: 4.3, image: "https://source.unsplash.com/400x300/?missi-roti" },
          { id: 136, name: "Plain Roti", price: 25, rating: 4.4, image: "https://source.unsplash.com/400x300/?roti,plain-roti" }
        ]
      },
      {
        title: "Desserts",
        items: [
          { id: 141, name: "Gulab Jamun", price: 90, rating: 4.9, image: "https://source.unsplash.com/400x300/?gulab-jamun,dessert" },
          { id: 142, name: "Rasmalai", price: 120, rating: 4.8, image: "https://source.unsplash.com/400x300/?rasmalai" },
          { id: 143, name: "Ice Cream Scoop", price: 80, rating: 4.7, image: "https://source.unsplash.com/400x300/?ice-cream,scoop" },
          { id: 144, name: "Kheer", price: 100, rating: 4.5, image: "https://source.unsplash.com/400x300/?kheer" },
          { id: 145, name: "Brownie", price: 140, rating: 4.6, image: "https://source.unsplash.com/400x300/?brownie,dessert" },
          { id: 146, name: "Cheesecake", price: 180, rating: 4.9, image: "https://source.unsplash.com/400x300/?cheesecake" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "La Piazza Pizzeria",
    avgRating: 4.4,
    costForTwo: "₹700 for two",
    cuisines: ["Italian", "Pizza"],
    sla: { slaString: "25 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?pizzeria,pizza,italian-restaurant",
    menu: [
      {
        title: "Pizzas",
        items: [
          { id: 211, name: "Margherita Classic", price: 420, rating: 4.6, desc: "Fresh mozzarella, tomato sauce, basil", image: "https://source.unsplash.com/400x300/?margherita-pizza" },
          { id: 212, name: "Pepperoni Feast", price: 520, rating: 4.5, desc: "Loaded with pepperoni and cheese", image: "https://source.unsplash.com/400x300/?pepperoni-pizza" },
          { id: 213, name: "Quattro Formaggi", price: 560, rating: 4.7, desc: "Blend of four premium cheeses", image: "https://source.unsplash.com/400x300/?four-cheese-pizza" },
          { id: 214, name: "Vegie Supreme", price: 480, rating: 4.4, desc: "Bell peppers, olives, onion, mushroom", image: "https://source.unsplash.com/400x300/?vegetarian-pizza" },
          { id: 215, name: "BBQ Chicken", price: 540, rating: 4.5, desc: "Grilled chicken, BBQ sauce, red onion", image: "https://source.unsplash.com/400x300/?bbq-chicken-pizza" },
          { id: 216, name: "Truffle Mushroom", price: 620, rating: 4.8, desc: "Mushrooms with truffle oil and herbs", image: "https://source.unsplash.com/400x300/?truffle-mushroom-pizza" }
        ]
      },
      {
        title: "Pastas",
        items: [
          { id: 221, name: "Spaghetti Aglio Olio", price: 320, rating: 4.3, desc: "Garlic, olive oil, chilli flakes", image: "https://source.unsplash.com/400x300/?aglio-e-olio,pasta" },
          { id: 222, name: "Penne Arrabiata", price: 340, rating: 4.4, desc: "Spicy tomato sauce with penne", image: "https://source.unsplash.com/400x300/?penne-arrabiata" },
          { id: 223, name: "Fettuccine Alfredo", price: 380, rating: 4.5, desc: "Creamy parmesan sauce", image: "https://source.unsplash.com/400x300/?fettuccine-alfredo" },
          { id: 224, name: "Pesto Genovese", price: 360, rating: 4.4, desc: "Basil pesto with pine nuts", image: "https://source.unsplash.com/400x300/?pesto-pasta" },
          { id: 225, name: "Lasagna Bolognese", price: 420, rating: 4.6, desc: "Layered pasta with meat ragu", image: "https://source.unsplash.com/400x300/?lasagna" },
          { id: 226, name: "Seafood Linguine", price: 520, rating: 4.7, desc: "Linguine with prawns and mussels", image: "https://source.unsplash.com/400x300/?seafood-pasta" }
        ]
      },
      {
        title: "Sides",
        items: [
          { id: 231, name: "Garlic Bread", price: 120, rating: 4.6, image: "https://source.unsplash.com/400x300/?garlic-bread" },
          { id: 232, name: "Bruschetta", price: 160, rating: 4.5, image: "https://source.unsplash.com/400x300/?bruschetta" },
          { id: 233, name: "Caprese Salad", price: 220, rating: 4.4, image: "https://source.unsplash.com/400x300/?caprese-salad" },
          { id: 234, name: "Cheesy Sticks", price: 190, rating: 4.3, image: "https://source.unsplash.com/400x300/?cheesy-sticks" },
          { id: 235, name: "Olive Platter", price: 150, rating: 4.1, image: "https://source.unsplash.com/400x300/?olives,platter" },
          { id: 236, name: "Stuffed Mushrooms", price: 210, rating: 4.5, image: "https://source.unsplash.com/400x300/?stuffed-mushrooms" }
        ]
      },
      {
        title: "Desserts & Coffee",
        items: [
          { id: 241, name: "Tiramisu", price: 200, rating: 4.8, image: "https://source.unsplash.com/400x300/?tiramisu" },
          { id: 242, name: "Panna Cotta", price: 180, rating: 4.6, image: "https://source.unsplash.com/400x300/?panna-cotta" },
          { id: 243, name: "Affogato", price: 160, rating: 4.5, image: "https://source.unsplash.com/400x300/?affogato" },
          { id: 244, name: "Gelato Scoop", price: 140, rating: 4.4, image: "https://source.unsplash.com/400x300/?gelato" },
          { id: 245, name: "Chocolate Lava Cake", price: 220, rating: 4.7, image: "https://source.unsplash.com/400x300/?lava-cake" },
          { id: 246, name: "Espresso", price: 90, rating: 4.2, image: "https://source.unsplash.com/400x300/?espresso" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Sushi Sakura",
    avgRating: 4.7,
    costForTwo: "₹1,200 for two",
    cuisines: ["Japanese", "Sushi"],
    sla: { slaString: "35 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?sushi,japanese-restaurant",
    menu: [
      {
        title: "Sushi Rolls",
        items: [
          { id: 311, name: "California Roll", price: 420, rating: 4.6, desc: "Crab, avocado, cucumber", image: "https://source.unsplash.com/400x300/?california-roll,sushi" },
          { id: 312, name: "Spicy Tuna Roll", price: 460, rating: 4.7, desc: "Tuna with spicy mayo", image: "https://source.unsplash.com/400x300/?spicy-tuna-roll" },
          { id: 313, name: "Dragon Roll", price: 520, rating: 4.8, desc: "Eel, avocado, cucumber", image: "https://source.unsplash.com/400x300/?dragon-roll-sushi" },
          { id: 314, name: "Veggie Roll", price: 350, rating: 4.3, desc: "Pickled veggies and avocado", image: "https://source.unsplash.com/400x300/?veggie-sushi-roll" },
          { id: 315, name: "Philadelphia Roll", price: 480, rating: 4.5, desc: "Smoked salmon and cream cheese", image: "https://source.unsplash.com/400x300/?philadelphia-roll" },
          { id: 316, name: "Tempura Roll", price: 500, rating: 4.6, desc: "Crunchy tempura shrimp inside", image: "https://source.unsplash.com/400x300/?tempura-roll" }
        ]
      },
      {
        title: "Sashimi & Nigiri",
        items: [
          { id: 321, name: "Salmon Sashimi (5 pcs)", price: 520, rating: 4.8, desc: "Freshly sliced salmon", image: "https://source.unsplash.com/400x300/?salmon-sashimi" },
          { id: 322, name: "Tuna Sashimi (5 pcs)", price: 560, rating: 4.7, desc: "Premium tuna slices", image: "https://source.unsplash.com/400x300/?tuna-sashimi" },
          { id: 323, name: "Ebi Nigiri (2 pcs)", price: 220, rating: 4.5, desc: "Cooked prawn over rice", image: "https://source.unsplash.com/400x300/?ebi-nigiri" },
          { id: 324, name: "Unagi Nigiri (2 pcs)", price: 280, rating: 4.6, desc: "Grilled eel with sauce", image: "https://source.unsplash.com/400x300/?unagi-nigiri" },
          { id: 325, name: "Tamago Nigiri (2 pcs)", price: 180, rating: 4.2, desc: "Sweet egg omelette on rice", image: "https://source.unsplash.com/400x300/?tamago-nigiri" },
          { id: 326, name: "Assorted Sashimi", price: 920, rating: 4.9, desc: "Chef's selection of sashimi", image: "https://source.unsplash.com/400x300/?assorted-sashimi" }
        ]
      },
      {
        title: "Hot Dishes",
        items: [
          { id: 331, name: "Chicken Teriyaki", price: 420, rating: 4.5, desc: "Grilled chicken with teriyaki glaze", image: "https://source.unsplash.com/400x300/?chicken-teriyaki" },
          { id: 332, name: "Vegetable Tempura", price: 320, rating: 4.3, desc: "Crispy battered seasonal veggies", image: "https://source.unsplash.com/400x300/?vegetable-tempura" },
          { id: 333, name: "Yaki Udon", price: 360, rating: 4.4, desc: "Stir-fried udon noodles with veggies", image: "https://source.unsplash.com/400x300/?yaki-udon" },
          { id: 334, name: "Miso Glazed Salmon", price: 560, rating: 4.8, desc: "Baked salmon with miso glaze", image: "https://source.unsplash.com/400x300/?miso-salmon" },
          { id: 335, name: "Katsu Curry", price: 480, rating: 4.6, desc: "Breaded cutlet with Japanese curry", image: "https://source.unsplash.com/400x300/?katsu-curry" },
          { id: 336, name: "Gyoza (6 pcs)", price: 220, rating: 4.5, desc: "Pan-fried dumplings with dipping sauce", image: "https://source.unsplash.com/400x300/?gyoza" }
        ]
      },
      {
        title: "Desserts & Drinks",
        items: [
          { id: 341, name: "Mochi Ice Cream (3 pcs)", price: 220, rating: 4.6, image: "https://source.unsplash.com/400x300/?mochi-ice-cream" },
          { id: 342, name: "Green Tea Cheesecake", price: 240, rating: 4.5, image: "https://source.unsplash.com/400x300/?green-tea-cheesecake" },
          { id: 343, name: "Matcha Latte", price: 160, rating: 4.4, image: "https://source.unsplash.com/400x300/?matcha-latte" },
          { id: 344, name: "Yuzu Sorbet", price: 180, rating: 4.3, image: "https://source.unsplash.com/400x300/?yuzu-sorbet" },
          { id: 345, name: "Sake Flight (3)", price: 620, rating: 4.7, image: "https://source.unsplash.com/400x300/?sake" },
          { id: 346, name: "Chef's Dessert Plate", price: 360, rating: 4.8, image: "https://source.unsplash.com/400x300/?japanese-dessert" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "The Taco Terrace",
    avgRating: 4.3,
    costForTwo: "₹500 for two",
    cuisines: ["Mexican", "Tacos"],
    sla: { slaString: "28 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?tacos,mexican-restaurant",
    menu: [
      {
        title: "Tacos",
        items: [
          { id: 411, name: "Classic Chicken Taco", price: 160, rating: 4.4, desc: "Grilled chicken, salsa, lime", image: "https://source.unsplash.com/400x300/?chicken-taco" },
          { id: 412, name: "Beef Barbacoa Taco", price: 180, rating: 4.5, desc: "Slow-cooked beef with spices", image: "https://source.unsplash.com/400x300/?beef-taco" },
          { id: 413, name: "Fish Baja Taco", price: 190, rating: 4.6, desc: "Crispy fish, slaw, chipotle mayo", image: "https://source.unsplash.com/400x300/?fish-taco" },
          { id: 414, name: "Veggie Avocado Taco", price: 150, rating: 4.3, desc: "Avocado, beans, corn salsa", image: "https://source.unsplash.com/400x300/?avocado-taco" },
          { id: 415, name: "Carnitas Taco", price: 200, rating: 4.6, desc: "Slow-roasted pork with cilantro", image: "https://source.unsplash.com/400x300/?carnitas-taco" },
          { id: 416, name: "Chipotle Shrimp Taco", price: 220, rating: 4.7, desc: "Grilled shrimp with chipotle glaze", image: "https://source.unsplash.com/400x300/?shrimp-taco" }
        ]
      },
      {
        title: "Burritos & Bowls",
        items: [
          { id: 421, name: "Chicken Burrito", price: 320, rating: 4.5, desc: "Rice, beans, chicken, salsa", image: "https://source.unsplash.com/400x300/?chicken-burrito" },
          { id: 422, name: "Beef Burrito", price: 340, rating: 4.4, desc: "Seasoned beef with melted cheese", image: "https://source.unsplash.com/400x300/?beef-burrito" },
          { id: 423, name: "Veggie Bowl", price: 300, rating: 4.3, desc: "Quinoa, black beans, roasted veggies", image: "https://source.unsplash.com/400x300/?veggie-bowl" },
          { id: 424, name: "Carnitas Bowl", price: 360, rating: 4.6, desc: "Pulled pork over cilantro rice", image: "https://source.unsplash.com/400x300/?carnitas-bowl" },
          { id: 425, name: "Chipotle Chicken Bowl", price: 340, rating: 4.5, desc: "Chipotle-marinated chicken bowl", image: "https://source.unsplash.com/400x300/?chipotle-bowl" },
          { id: 426, name: "Seafood Burrito", price: 420, rating: 4.6, desc: "Mixed seafood with tangy slaw", image: "https://source.unsplash.com/400x300/?seafood-burrito" }
        ]
      },
      {
        title: "Sides & Snacks",
        items: [
          { id: 431, name: "Nachos Supreme", price: 260, rating: 4.5, image: "https://source.unsplash.com/400x300/?nachos" },
          { id: 432, name: "Mexican Street Corn", price: 140, rating: 4.4, image: "https://source.unsplash.com/400x300/?elote,mexican-street-corn" },
          { id: 433, name: "Quesadilla", price: 220, rating: 4.3, image: "https://source.unsplash.com/400x300/?quesadilla" },
          { id: 434, name: "Guacamole & Chips", price: 180, rating: 4.6, image: "https://source.unsplash.com/400x300/?guacamole" },
          { id: 435, name: "Churros (3 pcs)", price: 160, rating: 4.5, image: "https://source.unsplash.com/400x300/?churros" },
          { id: 436, name: "Salsa Trio", price: 120, rating: 4.2, image: "https://source.unsplash.com/400x300/?salsa" }
        ]
      },
      {
        title: "Desserts & Drinks",
        items: [
          { id: 441, name: "Tres Leches Cake", price: 220, rating: 4.6, image: "https://source.unsplash.com/400x300/?tres-leches-cake" },
          { id: 442, name: "Horchata", price: 130, rating: 4.3, image: "https://source.unsplash.com/400x300/?horchata" },
          { id: 443, name: "Margarita (Mocktail)", price: 180, rating: 4.2, image: "https://source.unsplash.com/400x300/?margarita-mocktail" },
          { id: 444, name: "Flan", price: 160, rating: 4.4, image: "https://source.unsplash.com/400x300/?flan" },
          { id: 445, name: "Cinnamon Ice Cream", price: 140, rating: 4.5, image: "https://source.unsplash.com/400x300/?cinnamon-ice-cream" },
          { id: 446, name: "Mexican Chocolate Brownie", price: 180, rating: 4.6, image: "https://source.unsplash.com/400x300/?mexican-chocolate-brownie" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Green Garden Salads",
    avgRating: 4.2,
    costForTwo: "₹450 for two",
    cuisines: ["Healthy", "Salads", "Vegan"],
    sla: { slaString: "22 mins" },
    veg: true,
    image: "https://source.unsplash.com/800x600/?salad,healthy-restaurant",
    menu: [
      {
        title: "Salads",
        items: [
          { id: 511, name: "Quinoa & Kale Bowl", price: 320, rating: 4.5, desc: "Quinoa, kale, roasted seeds, lemon tahini", image: "https://source.unsplash.com/400x300/?quinoa-kale-salad" },
          { id: 512, name: "Greek Salad", price: 280, rating: 4.4, desc: "Cucumber, tomato, olives, feta", image: "https://source.unsplash.com/400x300/?greek-salad" },
          { id: 513, name: "Roasted Beet Salad", price: 300, rating: 4.3, desc: "Beets, goat cheese, walnuts", image: "https://source.unsplash.com/400x300/?beet-salad" },
          { id: 514, name: "Caesar Salad (Veg)", price: 260, rating: 4.2, desc: "Romaine, parmesan, croutons", image: "https://source.unsplash.com/400x300/?caesar-salad" },
          { id: 515, name: "Chickpea Power Bowl", price: 310, rating: 4.4, desc: "Roasted chickpeas, greens, avocado", image: "https://source.unsplash.com/400x300/?chickpea-bowl" },
          { id: 516, name: "Fruit & Nut Salad", price: 240, rating: 4.1, desc: "Seasonal fruits with honey dressing", image: "https://source.unsplash.com/400x300/?fruit-salad" }
        ]
      },
      {
        title: "Wraps",
        items: [
          { id: 521, name: "Falafel Wrap", price: 260, rating: 4.3, desc: "Crispy falafel, tahini, pickles", image: "https://source.unsplash.com/400x300/?falafel-wrap" },
          { id: 522, name: "Grilled Veg Wrap", price: 240, rating: 4.2, desc: "Seasonal grilled veggies, hummus", image: "https://source.unsplash.com/400x300/?grilled-veg-wrap" },
          { id: 523, name: "Chicken Caesar Wrap", price: 320, rating: 4.4, desc: "Grilled chicken, caesar dressing", image: "https://source.unsplash.com/400x300/?chicken-wrap" },
          { id: 524, name: "Avocado & Tofu Wrap", price: 300, rating: 4.3, desc: "Smoky tofu, avocado, greens", image: "https://source.unsplash.com/400x300/?avocado-tofu-wrap" },
          { id: 525, name: "Hummus & Veg Wrap", price: 220, rating: 4.1, desc: "Creamy hummus with crunchy veg", image: "https://source.unsplash.com/400x300/?hummus-wrap" },
          { id: 526, name: "Pesto Paneer Wrap", price: 280, rating: 4.2, desc: "Paneer, pesto, arugula", image: "https://source.unsplash.com/400x300/?pesto-wrap" }
        ]
      },
      {
        title: "Bowls",
        items: [
          { id: 531, name: "Acai Berry Bowl", price: 320, rating: 4.5, desc: "Acai puree with granola & fruit", image: "https://source.unsplash.com/400x300/?acai-bowl" },
          { id: 532, name: "Poké Bowl", price: 420, rating: 4.6, desc: "Marinated fish, rice, seaweed", image: "https://source.unsplash.com/400x300/?poke-bowl" },
          { id: 533, name: "Warm Grain Bowl", price: 340, rating: 4.3, desc: "Millet, roasted veg, tahini", image: "https://source.unsplash.com/400x300/?grain-bowl" },
          { id: 534, name: "Tofu Teriyaki Bowl", price: 360, rating: 4.4, desc: "Tofu, teriyaki glaze, greens", image: "https://source.unsplash.com/400x300/?tofu-bowl" },
          { id: 535, name: "Brown Rice Sushi Bowl", price: 380, rating: 4.2, desc: "Veg sushi components on brown rice", image: "https://source.unsplash.com/400x300/?sushi-bowl" },
          { id: 536, name: "Lentil & Beet Bowl", price: 300, rating: 4.1, desc: "Warm lentils with roasted beetroot", image: "https://source.unsplash.com/400x300/?lentil-bowl" }
        ]
      },
      {
        title: "Beverages & Desserts",
        items: [
          { id: 541, name: "Cold-Pressed Green Juice", price: 180, rating: 4.3, image: "https://source.unsplash.com/400x300/?green-juice" },
          { id: 542, name: "Kombucha", price: 160, rating: 4.2, image: "https://source.unsplash.com/400x300/?kombucha" },
          { id: 543, name: "Chia Pudding", price: 200, rating: 4.4, image: "https://source.unsplash.com/400x300/?chia-pudding" },
          { id: 544, name: "Energy Bars", price: 140, rating: 4.1, image: "https://source.unsplash.com/400x300/?energy-bar" },
          { id: 545, name: "Baked Oatmeal", price: 160, rating: 4.0, image: "https://source.unsplash.com/400x300/?baked-oatmeal" },
          { id: 546, name: "Fruit Parfait", price: 190, rating: 4.2, image: "https://source.unsplash.com/400x300/?fruit-parfait" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Curry & Kebab Corner",
    avgRating: 4.4,
    costForTwo: "₹500 for two",
    cuisines: ["Indian", "Middle Eastern"],
    sla: { slaString: "32 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?kebab,curry,restaurant",
    menu: [
      {
        title: "Kebabs",
        items: [
          { id: 611, name: "Seekh Kebab", price: 260, rating: 4.6, desc: "Spiced minced meat skewers", image: "https://source.unsplash.com/400x300/?seekh-kebab" },
          { id: 612, name: "Paneer Tikka Kebab", price: 240, rating: 4.5, desc: "Smoky paneer skewers", image: "https://source.unsplash.com/400x300/?paneer-kebab" },
          { id: 613, name: "Chicken Malai Tikka", price: 280, rating: 4.7, desc: "Creamy marinated chicken pieces", image: "https://source.unsplash.com/400x300/?malai-tikka" },
          { id: 614, name: "Lamb Chops", price: 420, rating: 4.8, desc: "Grilled lamb chops with herbs", image: "https://source.unsplash.com/400x300/?lamb-chops" },
          { id: 615, name: "Hara Bhara Kebab", price: 210, rating: 4.3, desc: "Vegetarian kebab with spinach", image: "https://source.unsplash.com/400x300/?hara-bhara-kebab" },
          { id: 616, name: "Shami Kebab (2 pcs)", price: 200, rating: 4.4, desc: "Minced meat patties with spices", image: "https://source.unsplash.com/400x300/?shami-kebab" }
        ]
      },
      {
        title: "Curries",
        items: [
          { id: 621, name: "Butter Chicken", price: 360, rating: 4.8, desc: "Creamy tomato-based chicken curry", image: "https://source.unsplash.com/400x300/?butter-chicken" },
          { id: 622, name: "Rogan Josh", price: 420, rating: 4.6, desc: "Slow-cooked lamb curry with spices", image: "https://source.unsplash.com/400x300/?rogan-josh" },
          { id: 623, name: "Mutton Keema", price: 380, rating: 4.5, desc: "Minced mutton cooked with peas", image: "https://source.unsplash.com/400x300/?mutton-keema" },
          { id: 624, name: "Malai Kofta", price: 300, rating: 4.4, desc: "Veg dumplings in creamy gravy", image: "https://source.unsplash.com/400x300/?malai-kofta" },
          { id: 625, name: "Chicken Hyderabadi", price: 360, rating: 4.5, desc: "Spicy tangy chicken curry", image: "https://source.unsplash.com/400x300/?hyderabadi-chicken" },
          { id: 626, name: "Dal Fry", price: 220, rating: 4.3, desc: "Homestyle tempered lentils", image: "https://source.unsplash.com/400x300/?dal-fry" }
        ]
      },
      {
        title: "Accompaniments",
        items: [
          { id: 631, name: "Naan Basket", price: 120, rating: 4.6, image: "https://source.unsplash.com/400x300/?naan-basket" },
          { id: 632, name: "Jeera Rice", price: 120, rating: 4.4, image: "https://source.unsplash.com/400x300/?jeera-rice" },
          { id: 633, name: "Raita", price: 80, rating: 4.2, image: "https://source.unsplash.com/400x300/?raita" },
          { id: 634, name: "Pickle Platter", price: 90, rating: 4.0, image: "https://source.unsplash.com/400x300/?achar-pickle" },
          { id: 635, name: "Kachumber Salad", price: 70, rating: 4.1, image: "https://source.unsplash.com/400x300/?kachumber-salad" },
          { id: 636, name: "Paratha", price: 60, rating: 4.3, image: "https://source.unsplash.com/400x300/?paratha" }
        ]
      },
      {
        title: "Desserts",
        items: [
          { id: 641, name: "Phirni", price: 140, rating: 4.4, image: "https://source.unsplash.com/400x300/?phirni" },
          { id: 642, name: "Gajar Halwa", price: 160, rating: 4.5, image: "https://source.unsplash.com/400x300/?gajar-halwa" },
          { id: 643, name: "Kulfi", price: 120, rating: 4.3, image: "https://source.unsplash.com/400x300/?kulfi" },
          { id: 644, name: "Shahi Tukda", price: 180, rating: 4.6, image: "https://source.unsplash.com/400x300/?shahi-tukda" },
          { id: 645, name: "Rasmalai", price: 140, rating: 4.5, image: "https://source.unsplash.com/400x300/?rasmalai" },
          { id: 646, name: "Saffron Rabri", price: 200, rating: 4.7, image: "https://source.unsplash.com/400x300/?rabri" }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Burger Boulevard",
    avgRating: 4.1,
    costForTwo: "₹600 for two",
    cuisines: ["Fast Food", "Burgers"],
    sla: { slaString: "20 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?burger,fast-food,restaurant",
    menu: [
      {
        title: "Burgers",
        items: [
          { id: 711, name: "Classic Beef Burger", price: 320, rating: 4.3, desc: "Juicy beef patty, lettuce, tomato", image: "https://source.unsplash.com/400x300/?beef-burger" },
          { id: 712, name: "Cheesy Double", price: 380, rating: 4.4, desc: "Double patties with melted cheese", image: "https://source.unsplash.com/400x300/?double-cheese-burger" },
          { id: 713, name: "Veggie Delight", price: 260, rating: 4.1, desc: "Grilled veg patty with special sauce", image: "https://source.unsplash.com/400x300/?veggie-burger" },
          { id: 714, name: "Spicy Chicken Burger", price: 300, rating: 4.2, desc: "Crispy chicken with spicy mayo", image: "https://source.unsplash.com/400x300/?chicken-burger-spicy" },
          { id: 715, name: "Mushroom Swiss", price: 350, rating: 4.3, desc: "Sautéed mushrooms with swiss cheese", image: "https://source.unsplash.com/400x300/?mushroom-swiss-burger" },
          { id: 716, name: "BBQ Pulled Pork", price: 390, rating: 4.5, desc: "Slow-cooked pulled pork with BBQ", image: "https://source.unsplash.com/400x300/?pulled-pork-burger" }
        ]
      },
      {
        title: "Fries & Sides",
        items: [
          { id: 721, name: "Classic Fries", price: 120, rating: 4.2, image: "https://source.unsplash.com/400x300/?fries" },
          { id: 722, name: "Cheese Fries", price: 160, rating: 4.3, image: "https://source.unsplash.com/400x300/?cheese-fries" },
          { id: 723, name: "Onion Rings", price: 150, rating: 4.1, image: "https://source.unsplash.com/400x300/?onion-rings" },
          { id: 724, name: "Loaded Nachos", price: 240, rating: 4.4, image: "https://source.unsplash.com/400x300/?loaded-nachos" },
          { id: 725, name: "Coleslaw", price: 100, rating: 4.0, image: "https://source.unsplash.com/400x300/?coleslaw" },
          { id: 726, name: "Chicken Popcorn", price: 220, rating: 4.3, image: "https://source.unsplash.com/400x300/?chicken-popcorn" }
        ]
      },
      {
        title: "Wraps & Sandwiches",
        items: [
          { id: 731, name: "Grilled Chicken Sandwich", price: 280, rating: 4.2, image: "https://source.unsplash.com/400x300/?grilled-chicken-sandwich" },
          { id: 732, name: "Veg Club Sandwich", price: 240, rating: 4.1, image: "https://source.unsplash.com/400x300/?club-sandwich" },
          { id: 733, name: "Tandoori Paneer Wrap", price: 260, rating: 4.3, image: "https://source.unsplash.com/400x300/?paneer-wrap" },
          { id: 734, name: "BBQ Chicken Wrap", price: 300, rating: 4.4, image: "https://source.unsplash.com/400x300/?bbq-chicken-wrap" },
          { id: 735, name: "Falafel Sandwich", price: 220, rating: 4.0, image: "https://source.unsplash.com/400x300/?falafel-sandwich" },
          { id: 736, name: "Fish Finger Sandwich", price: 320, rating: 4.2, image: "https://source.unsplash.com/400x300/?fish-sandwich" }
        ]
      },
      {
        title: "Shakes & Desserts",
        items: [
          { id: 741, name: "Chocolate Shake", price: 160, rating: 4.3, image: "https://source.unsplash.com/400x300/?chocolate-shake" },
          { id: 742, name: "Vanilla Shake", price: 150, rating: 4.1, image: "https://source.unsplash.com/400x300/?vanilla-shake" },
          { id: 743, name: "Strawberry Shake", price: 160, rating: 4.2, image: "https://source.unsplash.com/400x300/?strawberry-shake" },
          { id: 744, name: "Brownie Sundae", price: 220, rating: 4.5, image: "https://source.unsplash.com/400x300/?brownie-sundae" },
          { id: 745, name: "Nutella Pancake", price: 200, rating: 4.4, image: "https://source.unsplash.com/400x300/?nutella-pancake" },
          { id: 746, name: "Apple Pie Slice", price: 180, rating: 4.2, image: "https://source.unsplash.com/400x300/?apple-pie" }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Mediterraneo Grill",
    avgRating: 4.5,
    costForTwo: "₹850 for two",
    cuisines: ["Mediterranean", "Grill"],
    sla: { slaString: "30 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?mediterranean,grill,restaurant",
    menu: [
      {
        title: "Grilled Mains",
        items: [
          { id: 811, name: "Lamb Skewers", price: 520, rating: 4.7, desc: "Marinated lamb skewers with herbs", image: "https://source.unsplash.com/400x300/?lamb-skewers" },
          { id: 812, name: "Grilled Sea Bass", price: 580, rating: 4.6, desc: "Whole sea bass with lemon", image: "https://source.unsplash.com/400x300/?grilled-sea-bass" },
          { id: 813, name: "Chicken Souvlaki", price: 420, rating: 4.5, desc: "Greek-style grilled chicken", image: "https://source.unsplash.com/400x300/?chicken-souvlaki" },
          { id: 814, name: "Vegetable Skewer", price: 320, rating: 4.3, desc: "Seasonal veggies with halloumi", image: "https://source.unsplash.com/400x300/?vegetable-skewer" },
          { id: 815, name: "Mix Grill Platter", price: 840, rating: 4.8, desc: "Assortment of grilled meats", image: "https://source.unsplash.com/400x300/?mixed-grill-platter" },
          { id: 816, name: "Halloumi Steak", price: 420, rating: 4.4, desc: "Pan-fried halloumi with lemon", image: "https://source.unsplash.com/400x300/?halloumi" }
        ]
      },
      {
        title: "Salads & Mezze",
        items: [
          { id: 821, name: "Hummus & Pita", price: 220, rating: 4.6, image: "https://source.unsplash.com/400x300/?hummus-pita" },
          { id: 822, name: "Tabbouleh", price: 240, rating: 4.4, image: "https://source.unsplash.com/400x300/?tabbouleh" },
          { id: 823, name: "Falafel Plate", price: 260, rating: 4.5, image: "https://source.unsplash.com/400x300/?falafel-plate" },
          { id: 824, name: "Greek Mezze", price: 360, rating: 4.6, image: "https://source.unsplash.com/400x300/?greek-mezze" },
          { id: 825, name: "Baba Ganoush", price: 200, rating: 4.3, image: "https://source.unsplash.com/400x300/?baba-ganoush" },
          { id: 826, name: "Olive & Cheese Platter", price: 320, rating: 4.2, image: "https://source.unsplash.com/400x300/?olives-cheese-platter" }
        ]
      },
      {
        title: "Flatbreads & Mains",
        items: [
          { id: 831, name: "Lamb Shawarma Wrap", price: 340, rating: 4.5, image: "https://source.unsplash.com/400x300/?lamb-shawarma" },
          { id: 832, name: "Chicken Gyro", price: 320, rating: 4.4, image: "https://source.unsplash.com/400x300/?chicken-gyro" },
          { id: 833, name: "Moussaka", price: 420, rating: 4.6, image: "https://source.unsplash.com/400x300/?moussaka" },
          { id: 834, name: "Kofta Tagine", price: 480, rating: 4.5, image: "https://source.unsplash.com/400x300/?kofta-tagine" },
          { id: 835, name: "Couscous Veg", price: 320, rating: 4.2, image: "https://source.unsplash.com/400x300/?couscous" },
          { id: 836, name: "Seafood Paella-style", price: 620, rating: 4.7, image: "https://source.unsplash.com/400x300/?seafood-paella" }
        ]
      },
      {
        title: "Desserts & Tea",
        items: [
          { id: 841, name: "Baklava", price: 180, rating: 4.6, image: "https://source.unsplash.com/400x300/?baklava" },
          { id: 842, name: "Turkish Delight Plate", price: 160, rating: 4.4, image: "https://source.unsplash.com/400x300/?turkish-delight" },
          { id: 843, name: "Orange Blossom Cake", price: 200, rating: 4.3, image: "https://source.unsplash.com/400x300/?orange-blossom-cake" },
          { id: 844, name: "Mint Tea", price: 90, rating: 4.2, image: "https://source.unsplash.com/400x300/?mint-tea" },
          { id: 845, name: "Rose Panna Cotta", price: 220, rating: 4.5, image: "https://source.unsplash.com/400x300/?rose-panna-cotta" },
          { id: 846, name: "Lemon Sorbet", price: 140, rating: 4.1, image: "https://source.unsplash.com/400x300/?lemon-sorbet" }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "The Rolling Dosa",
    avgRating: 4.3,
    costForTwo: "₹350 for two",
    cuisines: ["South Indian", "Dosa"],
    sla: { slaString: "18 mins" },
    veg: true,
    image: "https://source.unsplash.com/800x600/?dosa,south-indian-restaurant",
    menu: [
      {
        title: "Dosas",
        items: [
          { id: 911, name: "Masala Dosa", price: 140, rating: 4.6, desc: "Crispy dosa with spiced potato filling", image: "https://source.unsplash.com/400x300/?masala-dosa" },
          { id: 912, name: "Onion Rava Dosa", price: 130, rating: 4.4, desc: "Rava dosa with fried onion", image: "https://source.unsplash.com/400x300/?rava-dosa" },
          { id: 913, name: "Paneer Dosa", price: 160, rating: 4.5, desc: "Dosa stuffed with spicy paneer", image: "https://source.unsplash.com/400x300/?paneer-dosa" },
          { id: 914, name: "Cheese Dosa", price: 170, rating: 4.3, desc: "Dosa with melted cheese", image: "https://source.unsplash.com/400x300/?cheese-dosa" },
          { id: 915, name: "Set Dosa (2 pcs)", price: 150, rating: 4.2, desc: "Soft set dosas with chutney", image: "https://source.unsplash.com/400x300/?set-dosa" },
          { id: 916, name: "Ghee Roast", price: 160, rating: 4.7, desc: "Buttery ghee roasted dosa", image: "https://source.unsplash.com/400x300/?ghee-roast-dosa" }
        ]
      },
      {
        title: "Uttapams & Idlis",
        items: [
          { id: 921, name: "Tomato Uttapam", price: 140, rating: 4.3, image: "https://source.unsplash.com/400x300/?uttapam" },
          { id: 922, name: "Onion Uttapam", price: 140, rating: 4.2, image: "https://source.unsplash.com/400x300/?onion-uttapam" },
          { id: 923, name: "Plain Idli (3 pcs)", price: 90, rating: 4.1, image: "https://source.unsplash.com/400x300/?idli" },
          { id: 924, name: "Rava Idli", price: 100, rating: 4.2, image: "https://source.unsplash.com/400x300/?rava-idli" },
          { id: 925, name: "Sambar Idli", price: 110, rating: 4.2, image: "https://source.unsplash.com/400x300/?sambar-idli" },
          { id: 926, name: "Mysore Masala Dosa", price: 160, rating: 4.5, image: "https://source.unsplash.com/400x300/?mysore-masala-dosa" }
        ]
      },
      {
        title: "Sides & Chutneys",
        items: [
          { id: 931, name: "Coconut Chutney", price: 40, rating: 4.4, image: "https://source.unsplash.com/400x300/?coconut-chutney" },
          { id: 932, name: "Tomato Chutney", price: 40, rating: 4.2, image: "https://source.unsplash.com/400x300/?tomato-chutney" },
          { id: 933, name: "Sambar", price: 60, rating: 4.3, image: "https://source.unsplash.com/400x300/?sambar" },
          { id: 934, name: "Medu Vada (2 pcs)", price: 90, rating: 4.1, image: "https://source.unsplash.com/400x300/?medu-vada" },
          { id: 935, name: "Podi & Ghee", price: 50, rating: 4.0, image: "https://source.unsplash.com/400x300/?podi-ghee" },
          { id: 936, name: "Banana Fry", price: 80, rating: 4.0, image: "https://source.unsplash.com/400x300/?banana-fry" }
        ]
      },
      {
        title: "Desserts & Drinks",
        items: [
          { id: 941, name: "Filter Coffee", price: 80, rating: 4.5, image: "https://source.unsplash.com/400x300/?filter-coffee" },
          { id: 942, name: "Kesari", price: 120, rating: 4.4, image: "https://source.unsplash.com/400x300/?kesari-south-indian" },
          { id: 943, name: "Payasam", price: 130, rating: 4.3, image: "https://source.unsplash.com/400x300/?payasam" },
          { id: 944, name: "Tender Coconut", price: 100, rating: 4.2, image: "https://source.unsplash.com/400x300/?tender-coconut" },
          { id: 945, name: "Badam Milk", price: 140, rating: 4.1, image: "https://source.unsplash.com/400x300/?badam-milk" },
          { id: 946, name: "Ice Halwa", price: 150, rating: 4.0, image: "https://source.unsplash.com/400x300/?halwa" }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Noodle Nest",
    avgRating: 4.2,
    costForTwo: "₹420 for two",
    cuisines: ["Pan-Asian", "Noodles"],
    sla: { slaString: "24 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?noodles,asian-restaurant",
    menu: [
      {
        title: "Ramen & Soups",
        items: [
          { id: 1011, name: "Tonkotsu Ramen", price: 420, rating: 4.6, desc: "Creamy pork broth with noodles", image: "https://source.unsplash.com/400x300/?tonkotsu-ramen" },
          { id: 1012, name: "Miso Ramen", price: 380, rating: 4.4, desc: "Miso flavored broth with toppings", image: "https://source.unsplash.com/400x300/?miso-ramen" },
          { id: 1013, name: "Tom Yum Soup", price: 340, rating: 4.5, desc: "Spicy & sour Thai soup with prawns", image: "https://source.unsplash.com/400x300/?tom-yum-soup" },
          { id: 1014, name: "Wonton Soup", price: 300, rating: 4.3, desc: "Clear broth with dumplings", image: "https://source.unsplash.com/400x300/?wonton-soup" },
          { id: 1015, name: "Veg Clear Soup", price: 220, rating: 4.1, image: "https://source.unsplash.com/400x300/?veg-soup" },
          { id: 1016, name: "Seafood Laksa", price: 460, rating: 4.7, desc: "Coconut curry noodle soup", image: "https://source.unsplash.com/400x300/?laksa" }
        ]
      },
      {
        title: "Stir Fry Noodles",
        items: [
          { id: 1021, name: "Hakka Noodles", price: 240, rating: 4.2, image: "https://source.unsplash.com/400x300/?hakka-noodles" },
          { id: 1022, name: "Singapore Noodles", price: 260, rating: 4.3, image: "https://source.unsplash.com/400x300/?singapore-noodles" },
          { id: 1023, name: "Chow Mein", price: 230, rating: 4.1, image: "https://source.unsplash.com/400x300/?chow-mein" },
          { id: 1024, name: "Yaki Soba", price: 280, rating: 4.2, image: "https://source.unsplash.com/400x300/?yaki-soba" },
          { id: 1025, name: "Pad Thai", price: 320, rating: 4.5, image: "https://source.unsplash.com/400x300/?pad-thai" },
          { id: 1026, name: "Beef Chow Fun", price: 360, rating: 4.4, image: "https://source.unsplash.com/400x300/?beef-chow-fun" }
        ]
      },
      {
        title: "Dim Sum",
        items: [
          { id: 1031, name: "Steamed Dumplings (6)", price: 220, rating: 4.3, image: "https://source.unsplash.com/400x300/?steamed-dumplings" },
          { id: 1032, name: "Xiao Long Bao (4)", price: 320, rating: 4.6, image: "https://source.unsplash.com/400x300/?xiao-long-bao" },
          { id: 1033, name: "Char Siu Bao (3)", price: 260, rating: 4.4, image: "https://source.unsplash.com/400x300/?char-siu-bao" },
          { id: 1034, name: "Veg Spring Rolls", price: 180, rating: 4.1, image: "https://source.unsplash.com/400x300/?spring-rolls-veg" },
          { id: 1035, name: "Prawn Dumplings (6)", price: 360, rating: 4.6, image: "https://source.unsplash.com/400x300/?prawn-dumplings" },
          { id: 1036, name: "Sticky Rice Wrap", price: 200, rating: 4.2, image: "https://source.unsplash.com/400x300/?sticky-rice" }
        ]
      },
      {
        title: "Desserts & Drinks",
        items: [
          { id: 1041, name: "Mango Sticky Rice", price: 220, rating: 4.5, image: "https://source.unsplash.com/400x300/?mango-sticky-rice" },
          { id: 1042, name: "Bubble Tea", price: 160, rating: 4.3, image: "https://source.unsplash.com/400x300/?bubble-tea" },
          { id: 1043, name: "Green Tea Ice Cream", price: 140, rating: 4.2, image: "https://source.unsplash.com/400x300/?green-tea-ice-cream" },
          { id: 1044, name: "Lychee Cooler", price: 150, rating: 4.1, image: "https://source.unsplash.com/400x300/?lychee-cooler" },
          { id: 1045, name: "Fortune Cookies (6)", price: 90, rating: 4.0, image: "https://source.unsplash.com/400x300/?fortune-cookie" },
          { id: 1046, name: "Sesame Balls (3)", price: 120, rating: 4.2, image: "https://source.unsplash.com/400x300/?sesame-balls" }
        ]
      }
    ]
  },
  {
    id: 11,
    name: "The Spice Bazaar",
    avgRating: 4.4,
    costForTwo: "₹480 for two",
    cuisines: ["Indian", "Biryani", "Grill"],
    sla: { slaString: "29 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?biryani,grill,restaurant",
    menu: [
      {
        title: "Biryani",
        items: [
          { id: 1111, name: "Hyderabadi Chicken Biryani", price: 420, rating: 4.7, desc: "Aromatic basmati rice with marinated chicken", image: "https://source.unsplash.com/400x300/?chicken-biryani" },
          { id: 1112, name: "Veg Biryani", price: 320, rating: 4.4, desc: "Vegetable layered biryani with raita", image: "https://source.unsplash.com/400x300/?veg-biryani" },
          { id: 1113, name: "Mutton Biryani", price: 560, rating: 4.8, desc: "Slow-cooked mutton with saffron rice", image: "https://source.unsplash.com/400x300/?mutton-biryani" },
          { id: 1114, name: "Paneer Biryani", price: 380, rating: 4.5, desc: "Paneer with fragrant rice", image: "https://source.unsplash.com/400x300/?paneer-biryani" },
          { id: 1115, name: "Kolkata Biryani", price: 480, rating: 4.6, desc: "Potato & egg infused biryani", image: "https://source.unsplash.com/400x300/?kolkata-biryani" },
          { id: 1116, name: "Fisherman's Prawn Biryani", price: 620, rating: 4.7, desc: "Prawns and coastal spices", image: "https://source.unsplash.com/400x300/?prawn-biryani" }
        ]
      },
      {
        title: "Grill",
        items: [
          { id: 1121, name: "Tandoori Chicken Half", price: 320, rating: 4.6, image: "https://source.unsplash.com/400x300/?tandoori-chicken" },
          { id: 1122, name: "Grilled Fish Tikka", price: 360, rating: 4.5, image: "https://source.unsplash.com/400x300/?fish-tikka" },
          { id: 1123, name: "Paneer Tikka Platter", price: 300, rating: 4.4, image: "https://source.unsplash.com/400x300/?paneer-tikka-platter" },
          { id: 1124, name: "Seekh Kebab Platter", price: 420, rating: 4.6, image: "https://source.unsplash.com/400x300/?seekh-kebab-platter" },
          { id: 1125, name: "Grilled Prawns", price: 520, rating: 4.7, image: "https://source.unsplash.com/400x300/?grilled-prawns" },
          { id: 1126, name: "Chicken Reshmi Kebab", price: 340, rating: 4.5, image: "https://source.unsplash.com/400x300/?reshmi-kebab" }
        ]
      },
      {
        title: "Curries",
        items: [
          { id: 1131, name: "Kadai Paneer", price: 300, rating: 4.5, image: "https://source.unsplash.com/400x300/?kadai-paneer" },
          { id: 1132, name: "Butter Chicken", price: 360, rating: 4.7, image: "https://source.unsplash.com/400x300/?butter-chicken-plate" },
          { id: 1133, name: "Bhuna Gosht", price: 420, rating: 4.6, image: "https://source.unsplash.com/400x300/?bhuna-gosht" },
          { id: 1134, name: "Navratan Korma", price: 320, rating: 4.3, image: "https://source.unsplash.com/400x300/?navratan-korma" },
          { id: 1135, name: "Palak Paneer", price: 300, rating: 4.4, image: "https://source.unsplash.com/400x300/?palak-paneer-dish" },
          { id: 1136, name: "Dhansak", price: 340, rating: 4.2, image: "https://source.unsplash.com/400x300/?dhansak" }
        ]
      },
      {
        title: "Desserts",
        items: [
          { id: 1141, name: "Malai Kulfi", price: 140, rating: 4.6, image: "https://source.unsplash.com/400x300/?kulfi" },
          { id: 1142, name: "Gulab Jamun", price: 90, rating: 4.5, image: "https://source.unsplash.com/400x300/?gulab-jamun-plate" },
          { id: 1143, name: "Carrot Halwa", price: 160, rating: 4.4, image: "https://source.unsplash.com/400x300/?carrot-halwa" },
          { id: 1144, name: "Rasmalai", price: 120, rating: 4.5, image: "https://source.unsplash.com/400x300/?rasmalai-plate" },
          { id: 1145, name: "Shahi Tukda", price: 180, rating: 4.6, image: "https://source.unsplash.com/400x300/?shahi-tukda-plate" },
          { id: 1146, name: "Saffron Phirni", price: 150, rating: 4.4, image: "https://source.unsplash.com/400x300/?phirni-saffron" }
        ]
      }
    ]
  },
  {
    id: 12,
    name: "Kebab & Shawarma Station",
    avgRating: 4.2,
    costForTwo: "₹420 for two",
    cuisines: ["Middle Eastern", "Fast Food"],
    sla: { slaString: "26 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?shawarma,kebab,street-food",
    menu: [
      {
        title: "Shawarmas",
        items: [
          { id: 1211, name: "Chicken Shawarma", price: 260, rating: 4.4, desc: "Marinated chicken, garlic sauce", image: "https://source.unsplash.com/400x300/?chicken-shawarma" },
          { id: 1212, name: "Beef Shawarma", price: 280, rating: 4.5, desc: "Sliced beef with pickled veggies", image: "https://source.unsplash.com/400x300/?beef-shawarma" },
          { id: 1213, name: "Falafel Shawarma", price: 220, rating: 4.2, desc: "Crispy falafel with tahini", image: "https://source.unsplash.com/400x300/?falafel-shawarma" },
          { id: 1214, name: "Mixed Shawarma Platter", price: 420, rating: 4.6, image: "https://source.unsplash.com/400x300/?shawarma-platter" },
          { id: 1215, name: "Paneer Shawarma", price: 240, rating: 4.1, image: "https://source.unsplash.com/400x300/?paneer-shawarma" },
          { id: 1216, name: "Spicy Lamb Shawarma", price: 300, rating: 4.6, image: "https://source.unsplash.com/400x300/?lamb-shawarma" }
        ]
      },
      {
        title: "Kebab Platters",
        items: [
          { id: 1221, name: "Seekh Kebab Platter", price: 380, rating: 4.5, image: "https://source.unsplash.com/400x300/?seekh-kebab-platter-plate" },
          { id: 1222, name: "Shish Tawook", price: 360, rating: 4.4, image: "https://source.unsplash.com/400x300/?shish-tawook" },
          { id: 1223, name: "Adana Kebab", price: 400, rating: 4.6, image: "https://source.unsplash.com/400x300/?adana-kebab" },
          { id: 1224, name: "Lamb Kofta", price: 420, rating: 4.7, image: "https://source.unsplash.com/400x300/?lamb-kofta" },
          { id: 1225, name: "Veg Kebab Platter", price: 320, rating: 4.2, image: "https://source.unsplash.com/400x300/?veg-kebab-platter" },
          { id: 1226, name: "Chicken Tikka Skewers", price: 340, rating: 4.5, image: "https://source.unsplash.com/400x300/?chicken-tikka-skewers" }
        ]
      },
      {
        title: "Wraps & Rolls",
        items: [
          { id: 1231, name: "Grilled Veg Roll", price: 220, rating: 4.1, image: "https://source.unsplash.com/400x300/?veg-roll" },
          { id: 1232, name: "Chicken Tikka Roll", price: 260, rating: 4.4, image: "https://source.unsplash.com/400x300/?tikka-roll" },
          { id: 1233, name: "Lamb Roll", price: 280, rating: 4.3, image: "https://source.unsplash.com/400x300/?lamb-roll" },
          { id: 1234, name: "Halloumi Wrap", price: 300, rating: 4.2, image: "https://source.unsplash.com/400x300/?halloumi-wrap" },
          { id: 1235, name: "Spicy Paneer Roll", price: 240, rating: 4.0, image: "https://source.unsplash.com/400x300/?paneer-roll" },
          { id: 1236, name: "Falafel Roll", price: 220, rating: 4.1, image: "https://source.unsplash.com/400x300/?falafel-roll" }
        ]
      },
      {
        title: "Desserts & Drinks",
        items: [
          { id: 1241, name: "Kunafa Slice", price: 200, rating: 4.5, image: "https://source.unsplash.com/400x300/?kunafa" },
          { id: 1242, name: "Baklava Bites", price: 160, rating: 4.4, image: "https://source.unsplash.com/400x300/?baklava-bites" },
          { id: 1243, name: "Mint Lemonade", price: 120, rating: 4.2, image: "https://source.unsplash.com/400x300/?mint-lemonade" },
          { id: 1244, name: "Turkish Coffee", price: 140, rating: 4.1, image: "https://source.unsplash.com/400x300/?turkish-coffee" },
          { id: 1245, name: "Rose Milkshake", price: 150, rating: 4.0, image: "https://source.unsplash.com/400x300/?rose-milkshake" },
          { id: 1246, name: "Date Rolls", price: 130, rating: 4.1, image: "https://source.unsplash.com/400x300/?date-rolls" }
        ]
      }
    ]
  },
  {
    id: 13,
    name: "The Crepe Cabin",
    avgRating: 4.3,
    costForTwo: "₹480 for two",
    cuisines: ["Cafe", "Crepes"],
    sla: { slaString: "20 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?crepe,cafe,restaurant",
    menu: [
      {
        title: "Savory Crepes",
        items: [
          { id: 1311, name: "Ham & Cheese Crepe", price: 260, rating: 4.4, desc: "Sliced ham, melted cheese", image: "https://source.unsplash.com/400x300/?ham-cheese-crepe" },
          { id: 1312, name: "Mushroom Spinach Crepe", price: 240, rating: 4.3, desc: "Sautéed mushrooms & spinach", image: "https://source.unsplash.com/400x300/?mushroom-crepe" },
          { id: 1313, name: "Smoked Salmon Crepe", price: 320, rating: 4.6, desc: "Smoked salmon, cream cheese", image: "https://source.unsplash.com/400x300/?smoked-salmon-crepe" },
          { id: 1314, name: "Mediterranean Veg Crepe", price: 230, rating: 4.2, image: "https://source.unsplash.com/400x300/?mediterranean-crepe" },
          { id: 1315, name: "Chicken Pesto Crepe", price: 300, rating: 4.5, image: "https://source.unsplash.com/400x300/?pesto-crepe" },
          { id: 1316, name: "Egg & Bacon Crepe", price: 280, rating: 4.3, image: "https://source.unsplash.com/400x300/?egg-bacon-crepe" }
        ]
      },
      {
        title: "Sweet Crepes",
        items: [
          { id: 1321, name: "Nutella Banana", price: 220, rating: 4.6, image: "https://source.unsplash.com/400x300/?nutella-crepe" },
          { id: 1322, name: "Strawberry Cream", price: 240, rating: 4.5, image: "https://source.unsplash.com/400x300/?strawberry-crepe" },
          { id: 1323, name: "Lemon & Sugar", price: 160, rating: 4.2, image: "https://source.unsplash.com/400x300/?lemon-crepe" },
          { id: 1324, name: "Apple Cinnamon", price: 200, rating: 4.3, image: "https://source.unsplash.com/400x300/?apple-crepe" },
          { id: 1325, name: "Chocolate Drizzle", price: 220, rating: 4.4, image: "https://source.unsplash.com/400x300/?chocolate-crepe" },
          { id: 1326, name: "Honey & Almond", price: 210, rating: 4.1, image: "https://source.unsplash.com/400x300/?honey-almond-crepe" }
        ]
      },
      {
        title: "Breakfast Bowls",
        items: [
          { id: 1331, name: "Berry Granola Bowl", price: 240, rating: 4.2, image: "https://source.unsplash.com/400x300/?granola-bowl" },
          { id: 1332, name: "Oats & Fruits", price: 200, rating: 4.1, image: "https://source.unsplash.com/400x300/?oats-fruit-bowl" },
          { id: 1333, name: "Yogurt Parfait", price: 220, rating: 4.3, image: "https://source.unsplash.com/400x300/?yogurt-parfait" },
          { id: 1334, name: "Avocado Toast", price: 260, rating: 4.4, image: "https://source.unsplash.com/400x300/?avocado-toast" },
          { id: 1335, name: "Shakshuka", price: 300, rating: 4.5, image: "https://source.unsplash.com/400x300/?shakshuka" },
          { id: 1336, name: "French Toast", price: 250, rating: 4.3, image: "https://source.unsplash.com/400x300/?french-toast" }
        ]
      },
      {
        title: "Beverages & Pastries",
        items: [
          { id: 1341, name: "Flat White", price: 150, rating: 4.3, image: "https://source.unsplash.com/400x300/?flat-white-coffee" },
          { id: 1342, name: "Croissant", price: 140, rating: 4.2, image: "https://source.unsplash.com/400x300/?croissant" },
          { id: 1343, name: "Blueberry Muffin", price: 120, rating: 4.1, image: "https://source.unsplash.com/400x300/?blueberry-muffin" },
          { id: 1344, name: "Iced Latte", price: 160, rating: 4.0, image: "https://source.unsplash.com/400x300/?iced-latte" },
          { id: 1345, name: "Almond Biscotti", price: 90, rating: 4.0, image: "https://source.unsplash.com/400x300/?biscotti" },
          { id: 1346, name: "Matcha Cookie", price: 110, rating: 4.1, image: "https://source.unsplash.com/400x300/?matcha-cookie" }
        ]
      }
    ]
  },
  {
    id: 14,
    name: "The BBQ Barn",
    avgRating: 4.5,
    costForTwo: "₹900 for two",
    cuisines: ["BBQ", "American"],
    sla: { slaString: "34 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?bbq,barbecue,restaurant",
    menu: [
      {
        title: "BBQ Platters",
        items: [
          { id: 1411, name: "Smoked Brisket", price: 760, rating: 4.8, desc: "Slow-smoked brisket with BBQ rub", image: "https://source.unsplash.com/400x300/?smoked-brisket" },
          { id: 1412, name: "BBQ Ribs Half Rack", price: 560, rating: 4.7, desc: "Sticky glazed pork ribs", image: "https://source.unsplash.com/400x300/?bbq-ribs" },
          { id: 1413, name: "Pulled Pork Sandwich", price: 420, rating: 4.6, image: "https://source.unsplash.com/400x300/?pulled-pork-sandwich" },
          { id: 1414, name: "Smoked Chicken", price: 480, rating: 4.5, image: "https://source.unsplash.com/400x300/?smoked-chicken" },
          { id: 1415, name: "Beef Brisket Slider (3)", price: 380, rating: 4.4, image: "https://source.unsplash.com/400x300/?brisket-slider" },
          { id: 1416, name: "Grilled Corn on Cob", price: 140, rating: 4.2, image: "https://source.unsplash.com/400x300/?grilled-corn" }
        ]
      },
      {
        title: "Burgers & Sandwiches",
        items: [
          { id: 1421, name: "Smoky BBQ Burger", price: 420, rating: 4.5, image: "https://source.unsplash.com/400x300/?bbq-burger" },
          { id: 1422, name: "Texas Melt", price: 440, rating: 4.4, image: "https://source.unsplash.com/400x300/?texas-melt" },
          { id: 1423, name: "Veg BBQ Burger", price: 320, rating: 4.2, image: "https://source.unsplash.com/400x300/?veggie-bbq-burger" },
          { id: 1424, name: "Grilled Cheese", price: 260, rating: 4.1, image: "https://source.unsplash.com/400x300/?grilled-cheese" },
          { id: 1425, name: "Brisket Wrap", price: 380, rating: 4.3, image: "https://source.unsplash.com/400x300/?brisket-wrap" },
          { id: 1426, name: "Chicken & Waffles", price: 420, rating: 4.6, image: "https://source.unsplash.com/400x300/?chicken-waffles" }
        ]
      },
      {
        title: "Sides",
        items: [
          { id: 1431, name: "Mac & Cheese", price: 220, rating: 4.4, image: "https://source.unsplash.com/400x300/?mac-and-cheese" },
          { id: 1432, name: "Coleslaw", price: 120, rating: 4.1, image: "https://source.unsplash.com/400x300/?coleslaw-side" },
          { id: 1433, name: "Baked Beans", price: 140, rating: 4.2, image: "https://source.unsplash.com/400x300/?baked-beans" },
          { id: 1434, name: "Potato Wedges", price: 160, rating: 4.3, image: "https://source.unsplash.com/400x300/?potato-wedges" },
          { id: 1435, name: "Cornbread", price: 90, rating: 4.0, image: "https://source.unsplash.com/400x300/?cornbread" },
          { id: 1436, name: "Fried Pickles", price: 150, rating: 4.1, image: "https://source.unsplash.com/400x300/?fried-pickles" }
        ]
      },
      {
        title: "Desserts",
        items: [
          { id: 1441, name: "Pecan Pie", price: 220, rating: 4.6, image: "https://source.unsplash.com/400x300/?pecan-pie" },
          { id: 1442, name: "Apple Crisp", price: 200, rating: 4.4, image: "https://source.unsplash.com/400x300/?apple-crisp" },
          { id: 1443, name: "Brownie Sundae", price: 240, rating: 4.5, image: "https://source.unsplash.com/400x300/?brownie-sundae-bbq" },
          { id: 1444, name: "Butterscotch Pudding", price: 160, rating: 4.2, image: "https://source.unsplash.com/400x300/?butterscotch-pudding" },
          { id: 1445, name: "Banana Foster", price: 220, rating: 4.3, image: "https://source.unsplash.com/400x300/?banana-foster" },
          { id: 1446, name: "Salted Caramel Cheesecake", price: 260, rating: 4.7, image: "https://source.unsplash.com/400x300/?salted-caramel-cheesecake" }
        ]
      }
    ]
  },
  {
    id: 15,
    name: "Pan Asian Palette",
    avgRating: 4.3,
    costForTwo: "₹560 for two",
    cuisines: ["Asian", "Pan-Asian"],
    sla: { slaString: "27 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?pan-asian,restaurant",
    menu: [
      {
        title: "Korean",
        items: [
          { id: 1511, name: "Bibimbap", price: 360, rating: 4.5, desc: "Mixed rice bowl with veggies & gochujang", image: "https://source.unsplash.com/400x300/?bibimbap" },
          { id: 1512, name: "Kimchi Pancake", price: 220, rating: 4.2, image: "https://source.unsplash.com/400x300/?kimchi-pancake" },
          { id: 1513, name: "Bulgogi", price: 420, rating: 4.6, image: "https://source.unsplash.com/400x300/?bulgogi" },
          { id: 1514, name: "Korean Fried Chicken", price: 380, rating: 4.7, image: "https://source.unsplash.com/400x300/?korean-fried-chicken" },
          { id: 1515, name: "Tofu Stew", price: 300, rating: 4.1, image: "https://source.unsplash.com/400x300/?tofu-stew" },
          { id: 1516, name: "Seafood Pancake", price: 340, rating: 4.3, image: "https://source.unsplash.com/400x300/?seafood-pancake" }
        ]
      },
      {
        title: "Chinese",
        items: [
          { id: 1521, name: "Szechuan Veg", price: 320, rating: 4.2, image: "https://source.unsplash.com/400x300/?szechuan-dish" },
          { id: 1522, name: "Kung Pao Chicken", price: 360, rating: 4.4, image: "https://source.unsplash.com/400x300/?kung-pao-chicken" },
          { id: 1523, name: "Honey Chilli Potato", price: 240, rating: 4.3, image: "https://source.unsplash.com/400x300/?honey-chilli-potato" },
          { id: 1524, name: "Hakka Noodles", price: 240, rating: 4.2, image: "https://source.unsplash.com/400x300/?hakka-noodles-dish" },
          { id: 1525, name: "Manchurian Gravy", price: 260, rating: 4.1, image: "https://source.unsplash.com/400x300/?manchurian-gravy" },
          { id: 1526, name: "Sweet & Sour Fish", price: 420, rating: 4.5, image: "https://source.unsplash.com/400x300/?sweet-sour-fish" }
        ]
      },
      {
        title: "Thai",
        items: [
          { id: 1531, name: "Green Curry", price: 360, rating: 4.4, image: "https://source.unsplash.com/400x300/?green-curry-thai" },
          { id: 1532, name: "Pad See Ew", price: 320, rating: 4.3, image: "https://source.unsplash.com/400x300/?pad-see-ew" },
          { id: 1533, name: "Som Tam Salad", price: 260, rating: 4.1, image: "https://source.unsplash.com/400x300/?som-tam" },
          { id: 1534, name: "Massaman Curry", price: 380, rating: 4.5, image: "https://source.unsplash.com/400x300/?massaman-curry" },
          { id: 1535, name: "Thai Basil Chicken", price: 340, rating: 4.2, image: "https://source.unsplash.com/400x300/?thai-basil-chicken" },
          { id: 1536, name: "Tom Kha Soup", price: 300, rating: 4.3, image: "https://source.unsplash.com/400x300/?tom-kha" }
        ]
      },
      {
        title: "Desserts & Sides",
        items: [
          { id: 1541, name: "Coconut Ice Cream", price: 140, rating: 4.2, image: "https://source.unsplash.com/400x300/?coconut-ice-cream" },
          { id: 1542, name: "Mango Sticky Rice", price: 220, rating: 4.4, image: "https://source.unsplash.com/400x300/?mango-sticky-rice-asian" },
          { id: 1543, name: "Sesame Balls", price: 120, rating: 4.1, image: "https://source.unsplash.com/400x300/?sesame-balls-asian" },
          { id: 1544, name: "Spring Rolls", price: 180, rating: 4.2, image: "https://source.unsplash.com/400x300/?spring-rolls-asian" },
          { id: 1545, name: "Edamame", price: 140, rating: 4.0, image: "https://source.unsplash.com/400x300/?edamame" },
          { id: 1546, name: "Lychee Sorbet", price: 160, rating: 4.1, image: "https://source.unsplash.com/400x300/?lychee-sorbet-asian" }
        ]
      }
    ]
  },
  {
    id: 16,
    name: "The Fancy Falafel",
    avgRating: 4.1,
    costForTwo: "₹380 for two",
    cuisines: ["Middle Eastern", "Vegan"],
    sla: { slaString: "21 mins" },
    veg: true,
    image: "https://source.unsplash.com/800x600/?falafel,vegan-restaurant",
    menu: [
      {
        title: "Falafel Creations",
        items: [
          { id: 1611, name: "Classic Falafel Wrap", price: 220, rating: 4.3, desc: "Crispy falafel with tahini and pickles", image: "https://source.unsplash.com/400x300/?classic-falafel-wrap" },
          { id: 1612, name: "Beetroot Falafel Bowl", price: 280, rating: 4.2, desc: "Beetroot falafel over greens", image: "https://source.unsplash.com/400x300/?beetroot-falafel-bowl" },
          { id: 1613, name: "Spicy Chickpea Falafel", price: 240, rating: 4.1, image: "https://source.unsplash.com/400x300/?spicy-falafel" },
          { id: 1614, name: "Falafel Platter", price: 320, rating: 4.4, image: "https://source.unsplash.com/400x300/?falafel-platter" },
          { id: 1615, name: "Herbed Falafel Bites", price: 200, rating: 4.0, image: "https://source.unsplash.com/400x300/?falafel-bites" },
          { id: 1616, name: "Tofu Falafel Fusion", price: 260, rating: 4.1, image: "https://source.unsplash.com/400x300/?tofu-falafel" }
        ]
      },
      {
        title: "Wraps & Sandwiches",
        items: [
          { id: 1621, name: "Halloumi & Veg Wrap", price: 300, rating: 4.2, image: "https://source.unsplash.com/400x300/?halloumi-wrap-veg" },
          { id: 1622, name: "Smoked Tofu Sandwich", price: 260, rating: 4.0, image: "https://source.unsplash.com/400x300/?smoked-tofu-sandwich" },
          { id: 1623, name: "Roasted Veg Sandwich", price: 240, rating: 4.1, image: "https://source.unsplash.com/400x300/?roasted-veg-sandwich" },
          { id: 1624, name: "Mediterranean Panini", price: 280, rating: 4.3, image: "https://source.unsplash.com/400x300/?mediterranean-panini" },
          { id: 1625, name: "Avocado Chickpea Smash", price: 260, rating: 4.2, image: "https://source.unsplash.com/400x300/?avocado-chickpea-sandwich" },
          { id: 1626, name: "Grilled Veg Paneer Wrap", price: 280, rating: 4.1, image: "https://source.unsplash.com/400x300/?grilled-veg-wrap" }
        ]
      },
      {
        title: "Salads & Bowls",
        items: [
          { id: 1631, name: "Tabbouleh Bowl", price: 260, rating: 4.2, image: "https://source.unsplash.com/400x300/?tabbouleh-bowl" },
          { id: 1632, name: "Buddha Bowl", price: 320, rating: 4.3, image: "https://source.unsplash.com/400x300/?buddha-bowl" },
          { id: 1633, name: "Lentil & Avocado Bowl", price: 300, rating: 4.1, image: "https://source.unsplash.com/400x300/?lentil-avocado-bowl" },
          { id: 1634, name: "Greek Vegan Salad", price: 280, rating: 4.0, image: "https://source.unsplash.com/400x300/?greek-vegan-salad" },
          { id: 1635, name: "Roasted Pumpkin Salad", price: 300, rating: 4.2, image: "https://source.unsplash.com/400x300/?pumpkin-salad" },
          { id: 1636, name: "Chickpea Caesar", price: 260, rating: 4.1, image: "https://source.unsplash.com/400x300/?chickpea-caesar" }
        ]
      },
      {
        title: "Desserts & Drinks",
        items: [
          { id: 1641, name: "Vegan Brownie", price: 160, rating: 4.1, image: "https://source.unsplash.com/400x300/?vegan-brownie" },
          { id: 1642, name: "Coconut Yogurt Parfait", price: 180, rating: 4.0, image: "https://source.unsplash.com/400x300/?coconut-yogurt-parfait" },
          { id: 1643, name: "Almond Milkshake", price: 160, rating: 4.0, image: "https://source.unsplash.com/400x300/?almond-milkshake" },
          { id: 1644, name: "Raw Energy Bars", price: 140, rating: 3.9, image: "https://source.unsplash.com/400x300/?energy-bars-vegan" },
          { id: 1645, name: "Date & Nut Roll", price: 130, rating: 4.0, image: "https://source.unsplash.com/400x300/?date-nut-roll" },
          { id: 1646, name: "Herbal Tea", price: 90, rating: 4.1, image: "https://source.unsplash.com/400x300/?herbal-tea" }
        ]
      }
    ]
  },
  {
    id: 17,
    name: "Momo Mania",
    avgRating: 4.4,
    costForTwo: "₹360 for two",
    cuisines: ["Nepalese", "Tibetan", "Momos"],
    sla: { slaString: "19 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?momos,street-food",
    menu: [
      {
        title: "Momos",
        items: [
          { id: 1711, name: "Steamed Chicken Momos (8)", price: 220, rating: 4.6, desc: "Soft steamed momos with chilli sauce", image: "https://source.unsplash.com/400x300/?steamed-momos" },
          { id: 1712, name: "Veg Momos (8)", price: 180, rating: 4.4, image: "https://source.unsplash.com/400x300/?veg-momos" },
          { id: 1713, name: "Fried Momos (8)", price: 200, rating: 4.3, image: "https://source.unsplash.com/400x300/?fried-momos" },
          { id: 1714, name: "Paneer Momos (8)", price: 200, rating: 4.2, image: "https://source.unsplash.com/400x300/?paneer-momos" },
          { id: 1715, name: "Tandoori Momos", price: 240, rating: 4.5, image: "https://source.unsplash.com/400x300/?tandoori-momos" },
          { id: 1716, name: "Cheese Momos", price: 220, rating: 4.4, image: "https://source.unsplash.com/400x300/?cheese-momos" }
        ]
      },
      {
        title: "Soups & Sides",
        items: [
          { id: 1721, name: "Hot & Sour Soup", price: 160, rating: 4.2, image: "https://source.unsplash.com/400x300/?hot-and-sour-soup" },
          { id: 1722, name: "Tomato Soup", price: 140, rating: 4.0, image: "https://source.unsplash.com/400x300/?tomato-soup" },
          { id: 1723, name: "Fried Wontons", price: 180, rating: 4.1, image: "https://source.unsplash.com/400x300/?fried-wontons" },
          { id: 1724, name: "Chilli Garlic Noodles", price: 220, rating: 4.3, image: "https://source.unsplash.com/400x300/?chilli-garlic-noodles" },
          { id: 1725, name: "Steamed Vegetables", price: 160, rating: 4.0, image: "https://source.unsplash.com/400x300/?steamed-vegetables" },
          { id: 1726, name: "Pickled Salad", price: 120, rating: 3.9, image: "https://source.unsplash.com/400x300/?pickled-salad" }
        ]
      },
      {
        title: "Fusions",
        items: [
          { id: 1731, name: "Momo Burger", price: 260, rating: 4.2, desc: "Momo patty in a bun with sauces", image: "https://source.unsplash.com/400x300/?momo-burger" },
          { id: 1732, name: "Momo Wrap", price: 240, rating: 4.1, image: "https://source.unsplash.com/400x300/?momo-wrap" },
          { id: 1733, name: "Momo Salad Bowl", price: 280, rating: 4.0, image: "https://source.unsplash.com/400x300/?momo-salad" },
          { id: 1734, name: "Cheese & Chutney Momos", price: 230, rating: 4.1, image: "https://source.unsplash.com/400x300/?cheese-momos" },
          { id: 1735, name: "Tandoori Paneer Momos", price: 250, rating: 4.2, image: "https://source.unsplash.com/400x300/?tandoori-momos" },
          { id: 1736, name: "Spicy Lamb Momos", price: 270, rating: 4.3, image: "https://source.unsplash.com/400x300/?lamb-momos" }
        ]
      },
      {
        title: "Desserts & Drinks",
        items: [
          { id: 1741, name: "Ginger Lemon Tea", price: 90, rating: 4.0, image: "https://source.unsplash.com/400x300/?ginger-tea" },
          { id: 1742, name: "Gulab Jamun", price: 90, rating: 4.1, image: "https://source.unsplash.com/400x300/?gulab-jamun-momos" },
          { id: 1743, name: "Cold Coffee", price: 140, rating: 4.0, image: "https://source.unsplash.com/400x300/?cold-coffee" },
          { id: 1744, name: "Brown Sugar Milkshake", price: 160, rating: 4.1, image: "https://source.unsplash.com/400x300/?milkshake-brown-sugar" },
          { id: 1745, name: "Honey Cake", price: 150, rating: 4.0, image: "https://source.unsplash.com/400x300/?honey-cake" },
          { id: 1746, name: "Lemon Tart", price: 160, rating: 4.2, image: "https://source.unsplash.com/400x300/?lemon-tart" }
        ]
      }
    ]
  },
  {
    id: 18,
    name: "The Indian Wrap Co.",
    avgRating: 4.2,
    costForTwo: "₹360 for two",
    cuisines: ["Indian", "Wraps", "Fast Food"],
    sla: { slaString: "20 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?wraps,street-food,india",
    menu: [
      {
        title: "Kathi Rolls",
        items: [
          { id: 1811, name: "Egg Kathi Roll", price: 150, rating: 4.2, desc: "Egg, onions, and green chutney", image: "https://source.unsplash.com/400x300/?egg-roll-indian" },
          { id: 1812, name: "Chicken Kathi Roll", price: 180, rating: 4.4, desc: "Spiced chicken with onions", image: "https://source.unsplash.com/400x300/?chicken-kathi-roll" },
          { id: 1813, name: "Paneer Tikka Roll", price: 160, rating: 4.3, image: "https://source.unsplash.com/400x300/?paneer-tikka-roll" },
          { id: 1814, name: "Mutton Kathi Roll", price: 220, rating: 4.5, image: "https://source.unsplash.com/400x300/?mutton-kathi-roll" },
          { id: 1815, name: "Veg Frankie", price: 140, rating: 4.0, image: "https://source.unsplash.com/400x300/?veg-frankie" },
          { id: 1816, name: "Cheese Corn Roll", price: 150, rating: 4.1, image: "https://source.unsplash.com/400x300/?cheese-corn-roll" }
        ]
      },
      {
        title: "Wraps",
        items: [
          { id: 1821, name: "Grilled Chicken Wrap", price: 220, rating: 4.3, image: "https://source.unsplash.com/400x300/?grilled-chicken-wrap-india" },
          { id: 1822, name: "Peri Peri Paneer Wrap", price: 210, rating: 4.2, image: "https://source.unsplash.com/400x300/?peri-peri-paneer-wrap" },
          { id: 1823, name: "Falafel Wrap", price: 200, rating: 4.1, image: "https://source.unsplash.com/400x300/?falafel-wrap-indian" },
          { id: 1824, name: "Tandoori Chicken Wrap", price: 240, rating: 4.4, image: "https://source.unsplash.com/400x300/?tandoori-wrap" },
          { id: 1825, name: "Veg Caesar Wrap", price: 190, rating: 4.0, image: "https://source.unsplash.com/400x300/?caesar-wrap" },
          { id: 1826, name: "Masala Egg Wrap", price: 160, rating: 4.1, image: "https://source.unsplash.com/400x300/?masala-egg-wrap" }
        ]
      },
      {
        title: "Sides",
        items: [
          { id: 1831, name: "Masala Fries", price: 120, rating: 4.2, image: "https://source.unsplash.com/400x300/?masala-fries" },
          { id: 1832, name: "Peri Peri Fries", price: 130, rating: 4.1, image: "https://source.unsplash.com/400x300/?peri-peri-fries" },
          { id: 1833, name: "Onion Rings", price: 140, rating: 4.0, image: "https://source.unsplash.com/400x300/?onion-rings-india" },
          { id: 1834, name: "Paneer Popcorn", price: 180, rating: 4.2, image: "https://source.unsplash.com/400x300/?paneer-popcorn" },
          { id: 1835, name: "Coleslaw", price: 100, rating: 4.0, image: "https://source.unsplash.com/400x300/?coleslaw-indian" },
          { id: 1836, name: "Tandoori Fries", price: 150, rating: 4.1, image: "https://source.unsplash.com/400x300/?tandoori-fries" }
        ]
      },
      {
        title: "Desserts & Drinks",
        items: [
          { id: 1841, name: "Chocolate Brownie", price: 140, rating: 4.1, image: "https://source.unsplash.com/400x300/?chocolate-brownie-india" },
          { id: 1842, name: "Cold Coffee", price: 130, rating: 4.0, image: "https://source.unsplash.com/400x300/?cold-coffee-india" },
          { id: 1843, name: "Gulab Jamun Jar", price: 150, rating: 4.2, image: "https://source.unsplash.com/400x300/?gulab-jamun-jar" },
          { id: 1844, name: "Kulfi Stick", price: 110, rating: 4.1, image: "https://source.unsplash.com/400x300/?kulfi-stick" },
          { id: 1845, name: "Chocolate Shake", price: 160, rating: 4.0, image: "https://source.unsplash.com/400x300/?chocolate-shake-india" },
          { id: 1846, name: "Lassi", price: 120, rating: 4.2, image: "https://source.unsplash.com/400x300/?lassi" }
        ]
      }
    ]
  },
  {
    id: 19,
    name: "Tandoori Trails",
    avgRating: 4.4,
    costForTwo: "₹520 for two",
    cuisines: ["Indian", "Tandoor"],
    sla: { slaString: "31 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?tandoori,restaurant",
    menu: [
      {
        title: "Tandoor Specials",
        items: [
          { id: 1911, name: "Tandoori Chicken Full", price: 620, rating: 4.8, desc: "Whole chicken marinated and roasted", image: "https://source.unsplash.com/400x300/?tandoori-chicken-full" },
          { id: 1912, name: "Paneer Tikka Platter", price: 320, rating: 4.5, image: "https://source.unsplash.com/400x300/?paneer-tikka-platter-2" },
          { id: 1913, name: "Tandoori Prawns", price: 520, rating: 4.7, image: "https://source.unsplash.com/400x300/?tandoori-prawns" },
          { id: 1914, name: "Tandoori Roti Basket", price: 140, rating: 4.3, image: "https://source.unsplash.com/400x300/?tandoori-roti-basket" },
          { id: 1915, name: "Malai Tikka", price: 360, rating: 4.6, image: "https://source.unsplash.com/400x300/?malai-tikka" },
          { id: 1916, name: "Chicken Tangri Kebab", price: 300, rating: 4.4, image: "https://source.unsplash.com/400x300/?chicken-tangri-kebab" }
        ]
      },
      {
        title: "Gravies & Curries",
        items: [
          { id: 1921, name: "Makhani Paneer", price: 300, rating: 4.5, image: "https://source.unsplash.com/400x300/?makhani-paneer" },
          { id: 1922, name: "Keema Matar", price: 340, rating: 4.3, image: "https://source.unsplash.com/400x300/?keema-matar" },
          { id: 1923, name: "Chicken Korma", price: 360, rating: 4.4, image: "https://source.unsplash.com/400x300/?chicken-korma" },
          { id: 1924, name: "Lamb Rogan Josh", price: 420, rating: 4.6, image: "https://source.unsplash.com/400x300/?lamb-rogan-josh" },
          { id: 1925, name: "Dal Tadka", price: 200, rating: 4.2, image: "https://source.unsplash.com/400x300/?dal-tadka" },
          { id: 1926, name: "Egg Curry", price: 220, rating: 4.1, image: "https://source.unsplash.com/400x300/?egg-curry" }
        ]
      },
      {
        title: "Breads & Rice",
        items: [
          { id: 1931, name: "Butter Naan", price: 40, rating: 4.7, image: "https://source.unsplash.com/400x300/?butter-naan-2" },
          { id: 1932, name: "Garlic Naan", price: 50, rating: 4.6, image: "https://source.unsplash.com/400x300/?garlic-naan-2" },
          { id: 1933, name: "Steamed Rice", price: 90, rating: 4.0, image: "https://source.unsplash.com/400x300/?steamed-rice" },
          { id: 1934, name: "Veg Pulao", price: 160, rating: 4.1, image: "https://source.unsplash.com/400x300/?veg-pulao" },
          { id: 1935, name: "Jeera Rice", price: 120, rating: 4.2, image: "https://source.unsplash.com/400x300/?jeera-rice-2" },
          { id: 1936, name: "Lachha Paratha", price: 45, rating: 4.3, image: "https://source.unsplash.com/400x300/?lachha-paratha-2" }
        ]
      },
      {
        title: "Desserts",
        items: [
          { id: 1941, name: "Gajar Halwa", price: 160, rating: 4.5, image: "https://source.unsplash.com/400x300/?gajar-halwa-2" },
          { id: 1942, name: "Rabri", price: 140, rating: 4.4, image: "https://source.unsplash.com/400x300/?rabri-2" },
          { id: 1943, name: "Fruit Custard", price: 130, rating: 4.1, image: "https://source.unsplash.com/400x300/?fruit-custard" },
          { id: 1944, name: "Kesar Phirni", price: 150, rating: 4.3, image: "https://source.unsplash.com/400x300/?kesar-phirni-2" },
          { id: 1945, name: "Mithai Platter", price: 220, rating: 4.2, image: "https://source.unsplash.com/400x300/?mithai-platter" },
          { id: 1946, name: "Gulab Jamun", price: 90, rating: 4.4, image: "https://source.unsplash.com/400x300/?gulab-jamun-2" }
        ]
      }
    ]
  },
  {
    id: 20,
    name: "Oceanic Bites",
    avgRating: 4.6,
    costForTwo: "₹1,100 for two",
    cuisines: ["Seafood", "Fine Dining"],
    sla: { slaString: "36 mins" },
    veg: false,
    image: "https://source.unsplash.com/800x600/?seafood,restaurant,ocean",
    menu: [
      {
        title: "Starters",
        items: [
          { id: 2011, name: "Oysters (6 pcs)", price: 540, rating: 4.8, desc: "Fresh oysters with lemon", image: "https://source.unsplash.com/400x300/?oysters" },
          { id: 2012, name: "Crab Cakes", price: 420, rating: 4.7, desc: "Crispy crab cakes with aioli", image: "https://source.unsplash.com/400x300/?crab-cakes" },
          { id: 2013, name: "Calamari", price: 360, rating: 4.5, desc: "Lightly fried squid rings", image: "https://source.unsplash.com/400x300/?calamari" },
          { id: 2014, name: "Prawn Cocktail", price: 380, rating: 4.6, desc: "Chilled prawns with cocktail sauce", image: "https://source.unsplash.com/400x300/?prawn-cocktail" },
          { id: 2015, name: "Smoked Salmon Carpaccio", price: 480, rating: 4.7, desc: "Thinly sliced smoked salmon", image: "https://source.unsplash.com/400x300/?smoked-salmon-carpaccio" },
          { id: 2016, name: "Clam Chowder", price: 320, rating: 4.4, desc: "Creamy New England style chowder", image: "https://source.unsplash.com/400x300/?clam-chowder" }
        ]
      },
      {
        title: "Mains",
        items: [
          { id: 2021, name: "Grilled Lobster", price: 2200, rating: 4.9, desc: "Whole lobster, garlic butter", image: "https://source.unsplash.com/400x300/?grilled-lobster" },
          { id: 2022, name: "Seared Scallops", price: 880, rating: 4.8, desc: "Scallops with pea purée", image: "https://source.unsplash.com/400x300/?seared-scallops" },
          { id: 2023, name: "Blackened Salmon", price: 620, rating: 4.6, desc: "Pan-seared salmon with spices", image: "https://source.unsplash.com/400x300/?blackened-salmon" },
          { id: 2024, name: "Swordfish Steak", price: 720, rating: 4.5, desc: "Charred swordfish with citrus", image: "https://source.unsplash.com/400x300/?swordfish-steak" },
          { id: 2025, name: "Seafood Risotto", price: 520, rating: 4.7, desc: "Creamy risotto with mixed seafood", image: "https://source.unsplash.com/400x300/?seafood-risotto" },
          { id: 2026, name: "Mussels in White Wine", price: 420, rating: 4.6, desc: "Steamed mussels with herbs", image: "https://source.unsplash.com/400x300/?mussels-white-wine" }
        ]
      },
      {
        title: "Sides & Salads",
        items: [
          { id: 2031, name: "Garlic Butter Veggies", price: 220, rating: 4.2, image: "https://source.unsplash.com/400x300/?garlic-butter-vegetables" },
          { id: 2032, name: "Truffle Fries", price: 260, rating: 4.5, image: "https://source.unsplash.com/400x300/?truffle-fries" },
          { id: 2033, name: "Seaweed Salad", price: 240, rating: 4.3, image: "https://source.unsplash.com/400x300/?seaweed-salad" },
          { id: 2034, name: "Lemon Herb Rice", price: 180, rating: 4.1, image: "https://source.unsplash.com/400x300/?lemon-rice" },
          { id: 2035, name: "Grilled Asparagus", price: 240, rating: 4.4, image: "https://source.unsplash.com/400x300/?grilled-asparagus" },
          { id: 2036, name: "Mixed Greens", price: 160, rating: 4.0, image: "https://source.unsplash.com/400x300/?mixed-green-salad" }
        ]
      },
      {
        title: "Desserts & Wine",
        items: [
          { id: 2041, name: "Crème Brûlée", price: 320, rating: 4.7, image: "https://source.unsplash.com/400x300/?creme-brulee" },
          { id: 2042, name: "Lemon Tart", price: 280, rating: 4.5, image: "https://source.unsplash.com/400x300/?lemon-tart-seafood" },
          { id: 2043, name: "Chocolate Fondant", price: 340, rating: 4.8, image: "https://source.unsplash.com/400x300/?chocolate-fondant" },
          { id: 2044, name: "Cheese Platter", price: 520, rating: 4.6, image: "https://source.unsplash.com/400x300/?cheese-platter" },
          { id: 2045, name: "Sparkling Wine (Bottle)", price: 2200, rating: 4.7, image: "https://source.unsplash.com/400x300/?sparkling-wine" },
          { id: 2046, name: "Espresso Martini", price: 480, rating: 4.6, image: "https://source.unsplash.com/400x300/?espresso-martini" }
        ]
      }
    ]
  }
];

export default restaurantsData;