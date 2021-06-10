import axios from "axios";

const baseUrl =
  "https://cors.bridged.cc/api.twitter.com:443/1.1/search/tweets.json?count=100&q=google";

export const SearchService = async (props) => {
  const { tweet } = props;

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
    let tweets= res;
    console.log("tweetData --> ", tweets.data.statuses);
    return tweets;
  } catch (err) {
    console.log("Algo ocorreu: -> " + err);
  }
};
