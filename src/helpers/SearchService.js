import axios from "axios";

const baseUrl =
  "https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?include_entities=1&count=2&q=";

export const SearchService = async (props) => {
  const { tweet } = props;

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
    let tweet = res;
    return tweet;
    console.log("tweetData --> ", tweet);
  } catch (err) {
    console.log("Algo ocorreu: -> " + err);
  }
};
