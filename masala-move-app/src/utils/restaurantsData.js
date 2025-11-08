const restaurantsData = [
  {
    id: 1,
    name: "Bombay Spice Hub",
    avgRating: 4.5,
    costForTwo: "₹400 for two",
    cuisines: ["Indian", "Chinese", "Tandoor"],
    sla: { slaString: "30 mins" },
    veg: true,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&auto=format&fit=crop&q=80",
    menu: [
      {
        title: "Starters",
        items: [
          { id: 11, name: "Paneer Tikka", price: 250, rating: 4.6, desc: "Grilled paneer with spices", image: "https://images.unsplash.com/photo-1604908177073-8ac4b81e0d58?w=400&auto=format&fit=crop&q=80" },
          { id: 12, name: "Veg Manchurian", price: 220, rating: 4.4, desc: "Crispy balls tossed in sauce", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&auto=format&fit=crop&q=80" },
          { id: 13, name: "Hara Bhara Kabab", price: 200, rating: 4.3, desc: "Spinach-based kababs", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=80" },
          { id: 14, name: "Aloo Tikki", price: 180, rating: 4.2, desc: "Crispy mashed potato patties", image: "https://images.unsplash.com/photo-1637063471371-bae9dffba3b0?w=400&auto=format&fit=crop&q=80" },
          { id: 15, name: "Spring Rolls", price: 190, rating: 4.5, desc: "Crispy rolls stuffed with veggies", image: "https://images.unsplash.com/photo-1565958011705-44e21152a27d?w=400&auto=format&fit=crop&q=80" },
          { id: 16, name: "Chilli Paneer", price: 240, rating: 4.7, desc: "Paneer cubes in tangy sauce", image: "https://images.unsplash.com/photo-1589307004391-7a2b1a5c9e0d?w=400&auto=format&fit=crop&q=80" },
        ]
      },
      {
        title: "Main Course",
        items: [
          { id: 21, name: "Paneer Butter Masala", price: 280, rating: 4.8, desc: "Creamy tomato gravy paneer", image: "https://images.unsplash.com/photo-1626082927389-6fdb53d13a1d?w=400&auto=format&fit=crop&q=80" },
          { id: 22, name: "Dal Makhani", price: 250, rating: 4.7, desc: "Slow-cooked black lentils", image: "https://images.unsplash.com/photo-1601050690597-1e57a8bfcf91?w=400&auto=format&fit=crop&q=80" },
          { id: 23, name: "Veg Kadai", price: 260, rating: 4.5, desc: "Mixed veg in kadai masala", image: "https://images.unsplash.com/photo-1628294896610-d0a6d34c8a7b?w=400&auto=format&fit=crop&q=80" },
          { id: 24, name: "Chole Masala", price: 240, rating: 4.6, desc: "Spicy chickpeas curry", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&auto=format&fit=crop&q=80" },
          { id: 25, name: "Palak Paneer", price: 270, rating: 4.5, desc: "Paneer cooked with spinach", image: "https://images.unsplash.com/photo-1601050690597-1e57a8bfcf91?w=400&auto=format&fit=crop&q=80" },
          { id: 26, name: "Bhindi Masala", price: 230, rating: 4.3, desc: "Okra with Indian spices", image: "https://images.unsplash.com/photo-1589307004391-7a2b1a5c9e0d?w=400&auto=format&fit=crop&q=80" },
        ]
      },
      {
        title: "Breads",
        items: [
          { id: 31, name: "Butter Naan", price: 40, rating: 4.8, image: "https://images.unsplash.com/photo-1590080875835-f483c2c004a5?w=400&auto=format&fit=crop&q=80" },
          { id: 32, name: "Tandoori Roti", price: 30, rating: 4.5, image: "https://images.unsplash.com/photo-1565958011705-44e21152a27d?w=400&auto=format&fit=crop&q=80" },
          { id: 33, name: "Garlic Naan", price: 50, rating: 4.9, image: "https://images.unsplash.com/photo-1589307004391-7a2b1a5c9e0d?w=400&auto=format&fit=crop&q=80" },
          { id: 34, name: "Lachha Paratha", price: 45, rating: 4.6, image: "https://images.unsplash.com/photo-1626082927389-6fdb53d13a1d?w=400&auto=format&fit=crop&q=80" },
          { id: 35, name: "Missi Roti", price: 35, rating: 4.3, image: "https://images.unsplash.com/photo-1628294896610-d0a6d34c8a7b?w=400&auto=format&fit=crop&q=80" },
          { id: 36, name: "Plain Roti", price: 25, rating: 4.4, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&auto=format&fit=crop&q=80" },
        ]
      },
      {
        title: "Desserts",
        items: [
          { id: 41, name: "Gulab Jamun", price: 90, rating: 4.9, image: "https://images.unsplash.com/photo-1609743522653-6c5792e49d2c?w=400&auto=format&fit=crop&q=80" },
          { id: 42, name: "Rasmalai", price: 120, rating: 4.8, image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=80" },
          { id: 43, name: "Ice Cream Scoop", price: 80, rating: 4.7, image: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?w=400&auto=format&fit=crop&q=80" },
          { id: 44, name: "Kheer", price: 100, rating: 4.5, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&auto=format&fit=crop&q=80" },
          { id: 45, name: "Brownie", price: 140, rating: 4.6, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80" },
          { id: 46, name: "Cheesecake", price: 180, rating: 4.9, image: "https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=400&auto=format&fit=crop&q=80" },
        ]
      }
    ]
  },
  ...Array.from({ length: 19 }, (_, i) => ({
    id: i + 2,
    name: `Restaurant ${i + 2}`,
    avgRating: (Math.random() * 1.5 + 3.5).toFixed(1),
    costForTwo: "₹350 for two",
    cuisines: ["Indian", "Fast Food"],
    sla: { slaString: `${25 + i % 10} mins` },
    veg: i % 2 === 0,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&auto=format&fit=crop&q=80",
    menu: Array.from({ length: 4 }, (_, j) => ({
      title: `Menu Category ${j + 1}`,
      items: Array.from({ length: 6 }, (_, k) => ({
        id: `${i + 2}${j + 1}${k + 1}`,
        name: `Dish ${j + 1}-${k + 1}`,
        price: Math.floor(Math.random() * 400) + 100,
        rating: (Math.random() * 2 + 3.5).toFixed(1),
        desc: "Delicious dish made with authentic spices",
        image: `https://source.unsplash.com/400x300/?food,dish,plate,${j + 1}-${k + 1}`
      }))
    }))
  }))
];

export default restaurantsData;