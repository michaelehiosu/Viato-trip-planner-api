const axios = require("axios");
const attractions = require("../data/attractions.json");
const { nearbyHeaders } = require("../data/defaultParams");

async function getAttractions(reqBody) {
  if (reqBody.dummy != undefined && reqBody.dummy == true) {
    return attractions;
  }
  const longitude = reqBody.longitude; //Airport ID can be used here
  const latitude = reqBody.latitude;
  const distance = reqBody.distance;
  const currency = reqBody.currency;

  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
    params: {
      longitude: longitude,
      latitude: latitude,
      lunit: 'km',
      currency: currency,
      limit: '20',
      distance: distance,
      lang: 'en_US'
    },
    headers: nearbyHeaders
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAttractions
}

