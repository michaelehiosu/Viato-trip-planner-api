const { defaultHeaders } = require("../data/defaultParams");
const axios = require("axios");

// FLIGHT FUNCTIONS
async function getAllAirports() {
  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/airports",
    headers: headers,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getAllCountries(reqBody) {
  const departureEntityID = reqBody.fromEntityId; //Airport ID can be used here
  const year = reqBody.year;
  const month = reqBody.month;
  const currency = reqBody.currency;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/search-everywhere",
    params: {
      fromEntityId: departureEntityID,
      year: year,
      month: month,
      currency: currency,
    },
    headers: defaultHeaders,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getAllCities(reqBody) {
  const departureEntityID = reqBody.fromEntityId;
  const destinationEntityID = reqBody.toEntityId;
  const year = reqBody.year;
  const month = reqBody.month;
  const currency = reqBody.currency;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/search-everywhere",
    params: {
      fromEntityId: departureEntityID,
      toEntityId: destinationEntityID,
      year: year,
      month: month,
      currency: currency,
    },
    headers: defaultHeaders,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getAllFlights(reqBody) {
  const departureEntityID = reqBody.fromEntityId;
  const destinationEntityID = reqBody.toEntityId;
  const year = reqBody.year;
  const month = reqBody.month;
  const currency = reqBody.currency;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/search-everywhere",
    params: {
      fromEntityId: departureEntityID,
      toEntityId: destinationEntityID,
      year: year,
      month: month,
      currency: currency,
    },
    headers: defaultHeaders,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllCountries,
  getAllCities,
  getAllAirports,
  getAllFlights,
};
