import React, { useEffect } from "react";

import "./style.js";

const Home2 = () => {
  //const [tweets, setTweets] = useState([""]);

  const getTweet = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer AAAAAAAAAAAAAAAAAAAAAPiJJAEAAAAATjQf6fngCaxi618Ty6I%2BtXL5jDA%3D2J4ExwpJRRxDy8DIHfWgxqWiLsQflJyYbPDmv3jY2B0gw8iu7i"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?count=100&q=google",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // const apiUrl =
    //   "https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?count=100&q=google";
    // const requestOptions = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization:
    //       "Bearer AAAAAAAAAAAAAAAAAAAAAPiJJAEAAAAATjQf6fngCaxi618Ty6I%2BtXL5jDA%3D2J4ExwpJRRxDy8DIHfWgxqWiLsQflJyYbPDmv3jY2B0gw8iu7i",
    //   },
    //   redirect: "follow",
    // };

    // const req = await fetch(apiUrl, requestOptions);
    // const data = await req.json();
    // setTweets(data);
    // console.log(data);
  };

  useEffect(() => {
    getTweet();
  }, []);

  return (
    <>
      {/* {tweets.map((tweet) => (
        <p>{console.log(tweet)}</p>
      ))} */}
    </>
  );
};

export default Home2;
