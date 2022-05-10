const { Post } = require("../models");

const postdata = [
  {
    "postTitle": "First message!",
    "postContent": "Hello World!",
    "userId": 1
  },
  {
    "postTitle": "Im sleepy",
    "postContent": "I want to go to bed, goodnight!",
    "userId": 2
  },
  {
    "postTitle": "So hungry",
    "postContent": "Hey, what's for lunch?",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
