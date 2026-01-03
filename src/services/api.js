import axios from "axios";

/** * Today's Version: api.js
 * Using Vite Environment Variables for Security
 */
const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";
const NASA_BASE_URL = "https://api.nasa.gov";
const SOLAR_SYSTEM_API = "https://api.le-systeme-solaire.net/rest";

// 1. NASA Axios Instance (Automatically attaches API Key)
const nasaClient = axios.create({
  baseURL: NASA_BASE_URL,
  params: { api_key: NASA_API_KEY },
});

// 2. Solar System Axios Instance
const solarClient = axios.create({
  baseURL: SOLAR_SYSTEM_API,
});

// NASA Astronomy Picture of the Day
export const fetchAPOD = async (count = 1) => {
  const { data } = await nasaClient.get("/planetary/apod", {
    params: { count },
  });
  return data;
};

// NASA Image and Video Library
export const searchNASAMedia = async (query, mediaType = "image") => {
  const { data } = await axios.get("https://images-api.nasa.gov/search", {
    params: { q: query, media_type: mediaType },
  });
  return data.collection.items;
};

// Solar System Bodies
export const fetchAllPlanets = async () => {
  const { data } = await solarClient.get("/bodies", {
    params: { filter: "isPlanet,eq,true" },
  });
  return data.bodies;
};

export const fetchPlanetDetails = async (planetName) => {
  const { data } = await solarClient.get(`/bodies/${planetName}`);
  return data;
};

// Mars Rover Photos
export const fetchMarsRoverPhotos = async (rover = "curiosity", sol = 1000) => {
  const { data } = await nasaClient.get(
    `/mars-photos/api/v1/rovers/${rover}/photos`,
    {
      params: { sol },
    }
  );
  return data.photos;
};

// Near Earth Objects
export const fetchNEOs = async (startDate, endDate) => {
  const { data } = await nasaClient.get("/neo/rest/v1/feed", {
    params: { start_date: startDate, end_date: endDate },
  });
  return data;
};

// EPIC Earth Images
export const fetchEarthImages = async () => {
  const { data } = await nasaClient.get("/EPIC/api/natural");
  return data;
};

// Moons
export const fetchMoons = async (planetId) => {
  const { data } = await solarClient.get("/bodies", {
    params: { filter: `aroundPlanet,eq,${planetId}` },
  });
  return data.bodies;
};

// Fallback data remains unchanged for UI stability
export const fallbackPlanetsData = [
  {
    id: "mercury",
    name: "Mercury",
    englishName: "Mercury",
    avgTemp: 167,
    gravity: 3.7,
    isPlanet: true,
  },
  {
    id: "venus",
    name: "Venus",
    englishName: "Venus",
    avgTemp: 464,
    gravity: 8.87,
    isPlanet: true,
  },
  {
    id: "earth",
    name: "Earth",
    englishName: "Earth",
    avgTemp: 15,
    gravity: 9.8,
    isPlanet: true,
  },
  {
    id: "mars",
    name: "Mars",
    englishName: "Mars",
    avgTemp: -65,
    gravity: 3.71,
    isPlanet: true,
  },
  {
    id: "jupiter",
    name: "Jupiter",
    englishName: "Jupiter",
    avgTemp: -110,
    gravity: 23.1,
    isPlanet: true,
  },
  {
    id: "saturn",
    name: "Saturn",
    englishName: "Saturn",
    avgTemp: -140,
    gravity: 9.0,
    isPlanet: true,
  },
  {
    id: "uranus",
    name: "Uranus",
    englishName: "Uranus",
    avgTemp: -195,
    gravity: 8.7,
    isPlanet: true,
  },
  {
    id: "neptune",
    name: "Neptune",
    englishName: "Neptune",
    avgTemp: -200,
    gravity: 11.0,
    isPlanet: true,
  },
];
