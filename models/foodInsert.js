

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
    id: '001',
    image: 'https://farm5.staticflickr.com/4703/26320286878_48aecce23b.jpg',
    title: 'Durian Cheesecake',
    price: '$40.00', 
},
{
    id: '002',
    image: 'https://farm5.staticflickr.com/4697/28413205699_44d515f2e2.jpg',
    title: 'Tonkatsu Ramen',
    price: '$12.95',
},
{
    id: '003',
    image: 'https://farm5.staticflickr.com/4622/39481710554_57b8aedd98.jpg',
    title: 'Asian-Style Risotto',
    price: '$11.25',
},
{
    id: '004',
    image: 'https://farm5.staticflickr.com/4628/25321789967_65c8e4d48b.jpg',
    title: 'Venezuelan Arepa',
    price: '$9.95',
},
{
    id: '005',
    image: 'https://farm5.staticflickr.com/4699/28413278889_bb2e39e2a2.jpg',
    title: 'Vietnamese Sour Soup',
    price: '$14.95',
},
{
    id: '006',
    image: 'https://farm5.staticflickr.com/4623/40193439091_95a96d4218.jpg',
    title: 'Chicken Cordon Bleu',
    price: '$14.95',
},    
{
    id: '007',
    image: 'https://farm5.staticflickr.com/4753/39295394205_a98c06296e.jpg',
    title: 'Char Siu Chicken',
    price: '$6.25',
},    
{
    id: '008',
    image: 'https://farm5.staticflickr.com/4624/39295394265_de13754bc9.jpg',
    title: 'Mexican Toast',
    price: '$6.25',
},
{
    id: '009',
    image: 'https://farm5.staticflickr.com/4655/39295394165_fc0712c843.jpg',
    title: 'French Onion Soup',
    price: '$7.25',
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
