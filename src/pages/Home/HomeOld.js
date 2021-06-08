import React, { Component } from "react";

import "./HomeOld.js";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var busca = this.state.value;
    console.log("Busca", busca);
    this.tweetTexto = [];
    this.imageObject = [];
    this.pesquisar();
    event.preventDefault();
    this.imagemCarousel();
  }

  state = {
    tweets: [],
    tweetImages: [],
  };

  imageObject = [];
  tweetTexto = [];

  pesquisar = async () => {
    const api = axios.create({
      baseURL:
        "https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?include_entities=true&count=100&q=",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAPiJJAEAAAAATjQf6fngCaxi618Ty6I%2BtXL5jDA%3D2J4ExwpJRRxDy8DIHfWgxqWiLsQflJyYbPDmv3jY2B0gw8iu7i",
      },
    });
    const res = await api.get(this.state.value);

    this.setState({ tweets: res.data.statuses });
    this.setState({
      tweetMedia: this.state.tweets.map((entidade) => entidade.entities),
    });

    console.log("Statuses", this.state.tweets);
    console.log("tweetMedia", this.state.tweetMedia);
    // console.log('tweetImages', this.state.tweetImages);
  };

  imagemCarousel = () => {
    const carousel = document.querySelector(".carousel");
    return carousel.classList.remove("carousel-hide");
  };

  render() {
    const { tweets } = this.state;

    tweets &&
      tweets.map((tweet) => {
        if (tweet.entities.media && this.imageObject.length < 10) {
          this.imageObject.push({
            image: tweet.entities.media[0].media_url,
            title: tweet.user.screen_name,
          });
        }
        return tweet;
      });

    tweets &&
      tweets.map((tweet) => {
        if (tweet.user.id && this.tweetTexto.length < 10) {
          this.tweetTexto.push({
            name: tweet.user.name,
            screen_name: tweet.user.screen_name,
            profile_image: tweet.user.profile_image_url_https,
            description: tweet.text,
          });
        }

        return tweet;
      });

    return (
      <div>
        <form id="busca" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="input-busca"
            className="main-busca-input"
            placeholder="Digite sua pesquisa"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className="main-busca-botao">
            {/*<FontAwesomeIcon icon={faSearch} />*/}
            Search
          </button>
        </form>

        <div className="result">
          {this.tweetTexto.map((post) => (
            <div className="result__post">
              <div className="result__post-img">
                <img alt="" src={post.profile_image} />
              </div>
              <div className="result__post-content">
                <h2>{post.name}</h2>
                <h4>@{post.screen_name}</h4>
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel carousel-hide">
          {this.imageObject.map((foto) => (
            <div className="imagens">
              <img alt="" src={foto.image} />
              <h4 className="caption">
                <h3>Postado por: @{foto.title}</h3>
              </h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
