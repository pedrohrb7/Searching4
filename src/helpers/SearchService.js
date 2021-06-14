import axios from "axios";

const baseUrl =
"https://cors.bridged.cc/api.twitter.com:443/1.1/search/tweets.json?count=50&q=";

export const getInitialSearch = async () => {
  const initialValue = [
    "politic",
    "sports",
    "science",
    "technology",
    "health",
    "covid",
  ];
  const randomValue =
    initialValue[Math.floor(Math.random() * initialValue.length)];
  console.log("Random --> ", randomValue);

  try {
    const api = axios.create({
      baseUrl,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAPiJJAEAAAAATjQf6fngCaxi618Ty6I%2BtXL5jDA%3D2J4ExwpJRRxDy8DIHfWgxqWiLsQflJyYbPDmv3jY2B0gw8iu7i",
      },
    });

    const res = await api.get(`${baseUrl}${randomValue}`);
    let tweets = res;
    console.log("random search --> ", tweets.data.statuses);
    return tweets;
  } catch (err) {
    console.log("Algo ocorreu initialSearch: -> " + err);
  }
};

export const SearchService = async (props) => {
  let tweet = props;
  try {
    const api = axios.create({
      baseUrl,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAPiJJAEAAAAATjQf6fngCaxi618Ty6I%2BtXL5jDA%3D2J4ExwpJRRxDy8DIHfWgxqWiLsQflJyYbPDmv3jY2B0gw8iu7i",
      },
    });

    const res = await api.get(`${baseUrl}${tweet}`);
    let tweets = res;
    console.log("tweetData --> ", tweets.data.statuses);
    return tweets;
  } catch (err) {console.log("Algo ocorreu: -> " + err);}
};
