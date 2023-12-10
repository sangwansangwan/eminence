const Boom = require("@hapi/boom");
const axios = require("axios");

const dummyData = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } catch (error) {
    throw Boom.internal("Error fetching data from the external API.", error);
  }
};

module.exports = {
  dummyData,
};
