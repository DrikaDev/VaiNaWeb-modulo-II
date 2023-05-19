import React, {Component} from 'react';
import prettyWoman from "./img/Meu desenho.png"
//ou: export default class App extends Component{}
class App extends Component{

//aqui vai o cod JavaScript - State/objeto

state = {
  title: "Pretty Woman",
  sinopse: "a beautiful woman who was a whore and one day found Richard Gere and fell in love with him"
}

  render(){
    return(
      <>
      <h1>{this.state.title}</h1>
      <p>{this.state.sinopse}</p>
      <img className='imagem' src={prettyWoman} alt="imagem"/>
      </>
    )
  }
}

export default App;