const { defaultHeaders } = require("../data/defaultParams");
const axios = require("axios");
const data = require("../data/data.json");

// FLIGHT FUNCTIONS
async function getAllAirports() {
  if (reqBody.dummy != undefined && reqBody.dummy == true) {
    return data.airports;
  }
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
  if (reqBody.dummy != undefined && reqBody.dummy == true) {
    return data.countries_nl;
  }
  const departureEntityID = reqBody.fromEntityId; //Airport ID can be used here
  const dateDepart = reqBody.departDate;
  const dateReturn = reqBody.returnDate;
  const currency = reqBody.currency;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/search-roundtrip",
    params: {
      fromEntityId: despartureEntityID,
      departDate: dateDepart,
      returnDate: dateReturn,
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
  if (reqBody.dummy != undefined && reqBody.dummy == true) {
    return data.cities_de;
  }
  const departureEntityID = reqBody.fromEntityId;
  const destinationEntityID = reqBody.skyId;
  const dateDepart = reqBody.departDate;
  const dateReturn = reqBody.returnDate;
  const currency = reqBody.currency;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/search-roundtrip",
    params: {
      fromEntityId: departureEntityID,
      toEntityId: destinationEntityID,
      departDate: dateDepart,
      returnDate: dateReturn,
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
  if (reqBody.dummy != undefined && reqBody.dummy == true) {
    return data.flights_ams - fra;
  }
  const departureEntityID = reqBody.fromEntityId;
  const destinationEntityID = reqBody.toEntityId;
  const dateDepart = reqBody.departDate;
  const dateReturn = reqBody.returnDate;
  const currency = reqBody.currency;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/search-roundtrip",
    params: {
      fromEntityId: departureEntityID,
      toEntityId: destinationEntityID,
      departDate: dateDepart,
      returnDate: dateReturn,
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

async function getAllFlightsComplete(reqBody) {
  const idSession = reqBody.sessionId;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/search-incomplete",
    params: {
      sessionId: idSession,
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

async function getFlightDetails(reqBody) {
  if (reqBody.dummy != undefined && reqBody.dummy == true) {
    return data.itinerary;
  }
  const token = reqBody.token;
  const itineraryId = reqBody.itineraryId;
  const currency = reqBody.currency;

  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/detail",
    params: {
      token: token,
      itineraryId: itineraryId,
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
  getFlightDetails,
  getAllFlightsComplete,
};
