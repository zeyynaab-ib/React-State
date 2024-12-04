import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialisation de l’état
  state = {
    Person: {
      fullName: "John Doe",
      bio: "Développeur passionné avec une expertise en React.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Développeur Logiciel"
    },
    shows: false,
    timeElapsed: 0 // Temps écoulé depuis le montage du composant
  };

  // Définition du compteur dans componentDidMount
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeElapsed: this.state.timeElapsed + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Nettoyage pour éviter les fuites de mémoire
  }

  // Fonction pour basculer l'affichage du profil
  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div className="App">
        <h1>Bienvenue au Checkpoint des Composants Basés sur des Classes</h1>

        {/* Bouton pour afficher/masquer le profil */}
        <button onClick={this.toggleProfile}>
          {this.state.shows ? "Masquer le Profil" : "Afficher le Profil"}
        </button>

        {/* Affichage conditionnel du profil */}
        {this.state.shows && (
          <div>
            <h2>{this.state.Person.fullName}</h2>
            <p>{this.state.Person.bio}</p>
            <img src={this.state.Person.imgSrc} alt="Profile" />
            <p>{this.state.Person.profession}</p>
          </div>
        )}

        {/* Afficher le temps écoulé */}
        <p>Temps écoulé depuis le montage : {this.state.timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
