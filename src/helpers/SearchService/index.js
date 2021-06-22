import axios from "axios";

const baseUrl =
  "https://cors.bridged.cc/api.twitter.com:443/1.1/search/tweets.json?count=48&q=";

export const SearchService = async (props) => {
  let tweet = props;

  try {
    const api = axios.create({
      baseUrl,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });

    const res = await api.get(`${baseUrl}${tweet}`);
    let tweets = res;
    console.log("response data --> ", tweets.data.statuses);
    return tweets.data.statuses;
  } catch (err) {
    console.log("something happened: -> " + err);
  }
};
