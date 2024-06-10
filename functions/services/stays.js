require('dotenv').config();
const axios = require("axios");
const hotels = require("../data/hotels.json");
const { defaultHeaders } = require('../data/defaultParams');

// STAYS FUNCTIONS
async function getCity(reqBody) {
  if (reqBody.dummy != undefined && reqBody.dummy == true) {
    return hotels.frankfurt;
  }

  const city = reqBody.city;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/hotels/auto-complete",
    params: {
      query: city
    },
    headers: defaultHeaders,
  }

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

async function getHotels(reqBody) {
  if (reqBody.dummy != undefined && reqBody.dummy == true) {
    return hotels.frankfurt_hotels;
  }

  const entityId = reqBody.entityId;
  const checkin = reqBody.checkin;
  const checkout = reqBody.checkout;
  const budget = reqBody.budget;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/hotels/search",
    params: {
      entityId: entityId,
      checkin: checkin,
      checkout: checkout,
      resultsPerPage: '10',
      sorting: 'price',
      maxPrice: budget,
    },
    headers: defaultHeaders,
  }

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

async function getHotelPrices(reqBody) {
  if (reqBody.dummy != undefined && reqBody.dummy == true) {
    return hotels.cheapest_hotel;
  }

  const hotelId = reqBody.hotelId;
  const checkin = reqBody.checkin;
  const checkout = reqBody.checkout;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/hotels/prices",
    params: {
      hotelId: hotelId,
      checkin: checkin,
      checkout: checkout,
    },
    headers: defaultHeaders,
  }

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getCity,
  getHotels,
  getHotelPrices,
};
