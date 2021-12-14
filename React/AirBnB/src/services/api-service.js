import axios from 'axios';

const annonymousInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  mode: 'no-cors',
});

const apartmentRelationships = ['country', 'city'].map((x) => `_expand=${x}`).join('&');

const fetchApartments = async () => {
  const response = await annonymousInstance.get(`/apartments?${apartmentRelationships}`);
  return response.data;
};

const fetchApartmentTypes = async () => {
  const response = await annonymousInstance.get('/apartmentTypes');
  return response.data;
};

const fetchCountries = async () => {
  const response = await annonymousInstance.get('/countries');
  return response.data;
};

const fetchCities = async () => {
  const response = await annonymousInstance.get('/cities');
  return response.data;
};

const fetchWishlists = async () => {
  const response = await annonymousInstance.get('/wishlists');
  return response.data;
};

const fetchApartmentContextData = async () => {
  const [apartments, apartmentTypes, countries, cities, wishlists] = await Promise.all([
    fetchApartments(),
    fetchApartmentTypes(),
    fetchCountries(),
    fetchCities(),
    fetchWishlists()]);

  const formatedApartments = apartments.map(({
    wishlistId, openDateRange, price, city, country, ...rest
  }) => {
    const apartment = {
      ...rest,
      openDateRange: openDateRange.map((x) => new Date(x)),
      city,
      country,
      title: `${city.title}, ${country.title}`,
      price: `${price.value} ${price.currency}`,
    };
    if (wishlistId) {
      const wishlist = wishlists.find((x) => x.id === wishlistId);
      apartment.wishlist = wishlist;
    }

    return apartment;
  });

  return {
    apartments: formatedApartments, apartmentTypes, countries, cities, wishlists,
  };
};

const APIService = {
  fetchCities,
  fetchApartments,
  fetchApartmentTypes,
  fetchCountries,
  fetchApartmentContextData,
};

export default APIService;
