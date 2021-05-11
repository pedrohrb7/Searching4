import React, { Component } from "react";

import axios from "axios";

export default class BuscaImagem extends Component {
  state = {
    tweetImages: [],
    images: [],
  };

  async componentDidMount() {
    const api = axios.create({
      baseURL:
        "https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?include_entities=1&count=2&q=",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAPiJJAEAAAAATjQf6fngCaxi618Ty6I%2BtXL5jDA%3D2J4ExwpJRRxDy8DIHfWgxqWiLsQflJyYbPDmv3jY2B0gw8iu7i",
      },
    });
    const res = await api.get("");

    this.setState({ tweetImages: res.data.statuses });
  }

  render() {
    const { tweets } = this.state;
    this.images = this.props;
    // console.log ('Tweets', tweets);

    this.images = [
      tweets &&
        tweets.map((tweet) => (
          <div key={tweet.user.id}>
            <h3>Imagens:</h3>
            {/* <img src={(tweet.user.profile_image_url)} />                                     */}
          </div>
        )),
    ];

    return (
      <div>
        <h2> Teste de Imagem</h2>
        {this.images}
      </div>
    );
  }
}
