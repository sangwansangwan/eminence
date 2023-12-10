const dataService = require("../services/data.service");

const getData = async (req, res) => {
  const data = await dataService.dummyData();
  res.status(200).json(data);
};

module.exports = {
  getData,
};
