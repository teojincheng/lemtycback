const express = require("express");
const router = express.Router();
const axios = require("axios");
const Customer = require("../Customer");

const createCustomersWithImage = apiImages => {
  const NUM_CUSTOMERS = 2;
  const customers = [];
  for (let i = 0; i < NUM_CUSTOMERS; i++) {
    const newCustomer = new Customer();
    newCustomer.imageSrc = apiImages.data.results[i].picture.medium;
    customers.push(newCustomer);
  }
  return customers;
};

router.get("/", async (req, res) => {
  const images = await axios("https://randomuser.me/api/?results=2");
  const customers = createCustomersWithImage(images);
  res.status(200).send(customers);
});

module.exports = router;
