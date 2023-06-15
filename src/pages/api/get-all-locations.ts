const { connectToDatabase } = require('../../utils/mongo-client');

async function getUsers() {
  const usersCollection = await connectToDatabase('users');
  return usersCollection.find().toArray();
}

async function getHomes() {
  const homesCollection = await connectToDatabase('homes');
  return homesCollection.find().toArray();
}

function matchUsersToHomes(users, homes) {
  return homes.map((home) => {
    const user = users.find(
      (user) => user._id.toString() === home.userId.toString()
    );
    return {
      fullName: user.name,
      city: home.city,
      homeId: home._id,
      userId: user._id,
    };
  });
}

async function getLatLong(location) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location.city}&key=${process.env.GOOGLE_API}`
  );
  const data = await response.json();

  return {
    lat: data.results[0].geometry.location.lat,
    lng: data.results[0].geometry.location.lng,
  };
}

async function getLatLongs(locations) {
  return Promise.all(locations.map(getLatLong));
}

function addLatLongToLocations(locations, latLongs) {
  return locations.map((location, index) => {
    return {
      ...location,
      latitude: latLongs[index].lat,
      longitude: latLongs[index].lng,
    };
  });
}

export default async function handler(req, res) {
  const users = await getUsers();
  const homes = await getHomes();
  const locations = matchUsersToHomes(users, homes);
  const latLongs = await getLatLongs(locations);
  const locationsWithLatLongs = addLatLongToLocations(locations, latLongs);

  res.status(200).json(locationsWithLatLongs);
}
