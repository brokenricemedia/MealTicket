

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mealticket",
  {
    useMongoClient: true
  }
);

const foodSeed = [
  {
    productName: "Venezuelan Arepa",
    price: 12.50,
    date: new Date(Date.now())
  },
  {
    productName: "Tonkatsu",
    price: 15.25,
    date: new Date(Date.now())
  },
  {
    productName: "Cheesecake",
    price: 20.00,
    date: new Date(Date.now())
  },
  {
    productName: "Asian-Style Risotto",
    price: 7.75,
    date: new Date(Date.now())
  },
  {
    productName: "Chicken Cordon Bleu",
    price: 15.95,
    date: new Date(Date.now())
  },
  {
    productName: "Vietnamese Sour Soup",
    price: 12.50,
    date: new Date(Date.now())
  },
  {
    productName: "Mexican Toast",
    price: 7.75,
    date: new Date(Date.now())
  },
  {
    productName: "Char Siu Chcken",
    price: 12.50,
    date: new Date(Date.now())
  },
  {
    productName: "French Onion Soup",
    price: 8.50,
    date: new Date(Date.now())
  },
  
  
];

db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
