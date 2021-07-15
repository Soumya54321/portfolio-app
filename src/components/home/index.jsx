import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

import "./style.css";

class Home extends Component {
  state = {
    characters: ["Developer", "Learner", "Singer"]
  }

  render(){
    return (
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Soumyadeep Paul</h1>
          <p> <div className="text-allignment"> I'm a </div><div className="text-allignment"><Typewriter options={{ strings: this.state.characters, autoStart: true, loop: true, delay: 100, changeDeleteSpeed: 100}}/></div></p>
        </div>
      </section>
    );
  }
};

export default Home;