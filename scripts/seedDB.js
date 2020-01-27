const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "The Dead Zone",
        author: "Stephen King",
        description: "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
        image: "http://www.amreading.com/wp-content/uploads/The-Dead-Zone-cover-img-2-e1465961546152.jpg",
        link: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiV2e6v0aTnAhUFGc0KHWytCy4QjRx6BAgBEAQ&url=http%3A%2F%2Fwww.amreading.com%2F2016%2F06%2F29%2F13-classic-stephen-king-novels-everyone-should-read%2Fthe-dead-zone-cover-img-2%2F&psig=AOvVaw0q6UTnLfiyxRNgk1Nq-1Kh&ust=1580243878118320"
    },
    {
        title: "Lord of the Flies",
        author: "William Golding",
        description: "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
        image: "http://www.amreading.com/wp-content/uploads/The-Dead-Zone-cover-img-2-e1465961546152.jpg",
        link: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiV2e6v0aTnAhUFGc0KHWytCy4QjRx6BAgBEAQ&url=http%3A%2F%2Fwww.amreading.com%2F2016%2F06%2F29%2F13-classic-stephen-king-novels-everyone-should-read%2Fthe-dead-zone-cover-img-2%2F&psig=AOvVaw0q6UTnLfiyxRNgk1Nq-1Kh&ust=1580243878118320"
    }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
  }).catch(err => {
      console.error(err);
      process.exit(1);
  });