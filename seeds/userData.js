const { User } = require("../models");

const userdata = [
  {
    "username": "Geno",
    "password": "password",
  },
  {
    "username": "Tommy",
    "password": "password",
  },
  {
    "username": "Margaret",
    "password": "password"
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
