import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import './Home.css';
import axios from 'axios';

// import apiImages from 'apiImages'
// import api from './api';
import BuscaImagem from './buscaImagem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faSearch, faGrinTongue } from '@fortawesome/free-solid-svg-icons'


library.add(
    faArrowUp
)

// function Home() {    
    
//     return (
//         <main>
//             <form className="main-busca" id="busca">
//                 <input type="text" id="input-busca" className="main-busca-input" placeholder="Digite sua pesquisa" autofocus />
//                 <button type="submit" className="main-busca-botao">
//                     <FontAwesomeIcon icon={faSearch} />
//                 </button>
//             </form>

//             <div className="mensagem-erro">
//                 <p>Digite um texto para pesquisa</p>
//             </div>

//             <div className="main-inicio-backgound">
//                 <FontAwesomeIcon icon={faArrowUp} />
//                 <p>Pesquise algo interessante</p>
//             </div>

//             <section className="media-posts-container">
//                 <div className="media-post">
//                     <div className="media-info">

//                         <div className="media-post-info">
//                             <div className="img-perfil">
//                                 {/* <img src="" alt="" class="post-imagem-perfil"> */}
//                             </div>

//                             <div className="info-usuario">
//                                 <h3 className="perfil-usuario"></h3>
//                                 <p className="id-usuario">@</p>
//                                 <p className="data-usuario"></p>
//                             </div>
//                         </div>

//                         <div className="media-mensagem">
//                             <p className="mensagem"></p>

//                             <div>
//                                 {/* <img src="" alt="Imagem de Perfil 1"> */}
//                             </div>

//                             {/* <a class="link" target="_blank"
//             [href]="'https://twitter.com/' + item.user.screen_name + '/status/' + item.id_str">Visualizar mais no
//             Twitter
//           </a> */}
//                         </div>

//                     </div>
//                 </div>
//             </section>


//             <div>
//                 {/* <ng-image-slider [images]="imageObject" #nav  class="slider"></ng-image-slider> */}
//             </div>

//         </main>
//     );

// }

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        var busca =  this.state.value;
        console.log('Busca', busca);
        this.tweetTexto = [];
        this.imageObject= [];
        this.pesquisar();
        event.preventDefault();
        this.imagemCarousel();
      }

    state= {
        tweets: [],
        tweetImages: []
    }

    imageObject= [];
    tweetTexto= [];

    


    pesquisar = async () => {

        const api = axios.create({
            baseURL: 'https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?include_entities=true&count=100&q=',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAPDWDQEAAAAAwhC8wAmvbpYad%2BFYLqXv4ep%2BWrE%3DoghUarbwC9b00RNDR5cK64XIt7qyWTm2j3StEjzaAxeASwfady'
            }
        });
        const res = await api.get(this.state.value);

        this.setState({tweets: res.data.statuses});
        // this.setState({tweetMedia: this.state.tweets.});
        this.setState({tweetMedia: this.state.tweets.map(entidade =>  (entidade.entities))});
        // this.setState({tweetImages: this.state.tweetMedia.map( image => (image) )});


        console.log('Statuses', this.state.tweets);
        console.log('tweetMedia', this.state.tweetMedia);
        // console.log('tweetImages', this.state.tweetImages);
    }

    imagemCarousel = () => {
        const carousel = document.querySelector('.carousel');
        return carousel.classList.remove ('carousel-hide');
    }


    render() {

        const { tweets } = this.state;


            ( tweets && tweets.map(tweet => 
                {
                    if (tweet.entities.media && this.imageObject.length < 10){
                        this.imageObject.push({
                            image: tweet.entities.media[0].media_url,
                            title: tweet.user.screen_name
                        })
                    }                    
                }
            ));

            ( tweets && tweets.map(tweet => 
                {
                    if (tweet.user.id && this.tweetTexto.length < 10){
                        this.tweetTexto.push({
                            name: tweet.user.name,
                            screen_name: tweet.user.screen_name,
                            profile_image: tweet.user.profile_image_url_https,
                            description: tweet.text
                        })
                    }
                    
                }
            ));
            
            

        
            // this.imageObject = [( tweets && tweets.map(tweet => (
            //     <div key = {tweet.user.id}>
            //         <h3>Usuário: {tweet.user.name} </h3>
            //         <h3>Seguidores: {tweet.user.followers_count} </h3>
            //         <img src={(tweet.user.profile_image_url)} />
            //         <h3>Twitter: {tweet.text} </h3>               
            // </div>
            // )))]

        
        return(
            <div>
                <form className="main-busca" id="busca" onSubmit={this.handleSubmit}>
                    <input type="text" id="input-busca" className="main-busca-input" placeholder="Digite sua pesquisa" value={this.state.value} onChange={this.handleChange}/>
                    <button type="submit" className="main-busca-botao">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>

                
                <div className="result"> 
                {this.tweetTexto.map(post => (
                        <div className="result__post">
                                <div className="result__post-img">
                                    <img src={(post.profile_image)} />
                                </div>
                                <div className="result__post-content">
                                    <h2>{post.name}</h2>
                                    <h4>@{post.screen_name}</h4>
                                    <p>{post.description}</p>
                                </div>
                            
                        </div>
                )
                )}
                </div>

                <Carousel className="carousel carousel-hide">
                {this.imageObject.map(foto => (
                    <Carousel.Item className="imagens">
                        <img src={(foto.image)} />
                    <Carousel.Caption className="caption">
                        <h3>Postado por: @{foto.title}</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                    )
                )}
                </Carousel>

            </div>
        );
    }
}
