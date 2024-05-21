require('dotenv').config();
const axios = require("axios");

const apiKey = process.env.API_KEY;
const apiHost = process.env.API_HOST;


// STAYS FUNCTIONS
async function getCity(reqBody) {
  const city = reqBody.city;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/hotels/auto-complete",
    params: {
      query: city
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost,
    },
  }

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

async function getHotels(reqBody) {
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
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost,
    },
  }

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

async function getHotelPrices(reqBody) {
  const hotelId = reqBody.hotelId;
  const checkin = reqBody.checkin;
  const checkout = reqBody.checkout;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/hotels/search",
    params: {
      entityId: entityId,
      checkin: checkin,
      checkout: checkout,
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost,
    },
  }

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}
