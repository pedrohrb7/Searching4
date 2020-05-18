import React, { Component } from 'react';

import axios from 'axios';

export default class BuscaImagem extends Component{

    state= {
        tweetImages: [],
        images: []
    }
    


    async componentDidMount(){

        const api = axios.create({
            baseURL: 'https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?include_entities=1&count=2&q=photos',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAPDWDQEAAAAAwhC8wAmvbpYad%2BFYLqXv4ep%2BWrE%3DoghUarbwC9b00RNDR5cK64XIt7qyWTm2j3StEjzaAxeASwfady'
            }
        });
        const res = await api.get('');

        this.setState({tweetImages: res.data.statuses});
        // this.setState({tweetMedia: this.state.tweets.});
        // this.setState({tweetMedia: this.state.tweets.map(entidade =>  (entidade.entities))});
        // this.setState({tweetImages: this.state.tweetMedia.map( image => (image) )});

        
        
    

        // if (this.tweetMedia !== ''){
        //     let img = tweetMedia.media_url;
        // } else {
        //     console.log("Errado");
        // }
        
        // this.state.tweets && this.state.tweets.map(tweetImage => (tweetImage.entities.media[0]));
        

        // console.log('Imagens', this.state.tweetImages);
        // console.log('tweetMedia', this.state.tweetMedia);
        // console.log('tweetImages', this.state.tweetImages);

    }

    render() {

        const { tweets } = this.state;
        this.images = this.props;
        // console.log ('Tweets', tweets);
        // let { imageTweets } = tweets.tweet.user.profile_image_url;

        // for (let i; i < 5; i++) {
        //     if (this.state.tweetMedia.media && this.imageObject.length < 5) {
        //       this.imageObject.push(
        //         {
        //           image: this.state.tweetMedia.media[0].media_url_https,
        //         //   thumbImage: value.entities.media[0].media_url_https,
        //         //   alt: value.user.name,
        //         //   title: 'Postado por: @' + value.user.screen_name
        //         });
        //     }
        // }

        this.images = [(tweets && tweets.map(tweet => (
            <div key = {tweet.user.id}>
                <h3>Imagens:</h3> 
                {/* <img src={(tweet.user.profile_image_url)} />                                     */}
            </div>)
        ))]

        return(

            <div>
            <h2> Teste de Imagem</h2>
             {this.images}

                
                
            </div>
        );
    }
}