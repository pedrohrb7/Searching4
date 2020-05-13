import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './Home.css';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faSearch } from '@fortawesome/free-solid-svg-icons'



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

// function Api () {

//     const api = { 
//             apiurl: "https://cors-anywhere.herokuapp.com/api.twitter.com/api.twitter.com/1.1/search/tweets.json?q=from%3ANasa%20OR%20%23nasa",
//             method: 'GET',
//             statuses: {
//               'Content-Type': 'application/json',
//                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAPDWDQEAAAAAwhC8wAmvbpYad%2BFYLqXv4ep%2BWrE%3DoghUarbwC9b00RNDR5cK64XIt7qyWTm2j3StEjzaAxeASwfady',
//                id: ''
//             }
//         };

//     }

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
        this.pesquisar();
        event.preventDefault();
      }

    state= {
        tweets: []
    }
    

    pesquisar = async () => {

        const api = axios.create({
            baseURL: 'https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?count=3&q=',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAPDWDQEAAAAAwhC8wAmvbpYad%2BFYLqXv4ep%2BWrE%3DoghUarbwC9b00RNDR5cK64XIt7qyWTm2j3StEjzaAxeASwfady'
            }
        });
        const res = await api.get(this.state.value);

        this.setState({tweets: res.data.statuses});
        console.log('Statuses', this.state.tweets);

    }

    render() {

        const { tweets } = this.state;

        return(
            <div>
                <form className="main-busca" id="busca" onSubmit={this.handleSubmit}>
                    <input type="text" id="input-busca" className="main-busca-input" placeholder="Digite sua pesquisa" value={this.state.value} onChange={this.handleChange}/>
                    <button type="submit" className="main-busca-botao">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>

                {/* Porque? */}
                {tweets && tweets.map(tweet => (
                    <div key = {tweet.user.id}>
                        <h3>Usuário: {tweet.user.name} </h3>
                        <h3>Seguidores: {tweet.user.followers_count} </h3>
                        <img src={(tweet.user.profile_image_url)} />
                        <h3>Twitter: {tweet.text} </h3>
                        <h3>Imagens:</h3>                                           
                    </div>
                ))}

            </div>
        );
    }
}