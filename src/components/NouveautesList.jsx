import React from 'react';
import axios from 'axios';
import Nouveautes from './Nouveautes';
import styles from './NouveautesList.module.css';
import apiKey from './apiKey';

class NouveautesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNewMovies: [],
      chosenValue: '',
    };
    this.chosenGenre = this.chosenGenre.bind(this);
  }

  componentDidMount() {
    this.fetchNouveautes();
  }

  fetchNouveautes = () => {
    const { currentYear } = new Date().getFullYear();
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${currentYear}`;
    axios
      .get(url)
      .then((response) => response.data.results)
      .then((nouveautesArray) => {
        this.setState({
          listNewMovies: nouveautesArray,
        });
      });
  };

  chosenGenre(click) {
    const { currentYear } = new Date().getFullYear();
    const { chosenValue } = this.state;
    const genreMovies = `&with_genres=${chosenValue}`;
    this.setState({ chosenValue: click.target.value });
    this.setState({
      titleGenre: `Les nouveautés pour inspirer ma soirée ${click.target.innerText} :`,
    });
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${currentYear}${genreMovies}`;
    axios
      .get(url)
      .then((response) => response.data.results)
      .then((nouveautesArray) => {
        this.setState({
          listNewMovies: nouveautesArray,
        });
      });
  }

  render() {
    const { listNewMovies, titleGenre } = this.state;

    return (
      <article className={styles.NouveautesList}>
        <h2>L’actualité des films&nbsp;!</h2>
        <div className={styles.areaOfNouveautes}>
          <h3>{titleGenre}</h3>
          {listNewMovies.map((newMovie) => (
            <Nouveautes
              title={newMovie.title}
              posterPath={newMovie.poster_path}
              key={newMovie.poster_path}
            />
          ))}
          <div className={styles.divButtons}>
            <p>Je veux voir les nouveautés en&nbsp;:</p>
            <button type="button" value="28" onClick={this.chosenGenre}>
              Action
            </button>
            <button type="button" value="12" onClick={this.chosenGenre}>
              Aventure
            </button>
            <button type="button" value="16" onClick={this.chosenGenre}>
              Films d’animation
            </button>
            <button type="button" value="35" onClick={this.chosenGenre}>
              Humour
            </button>
            <button type="button" value="80" onClick={this.chosenGenre}>
              Crime
            </button>
            <button type="button" value="99" onClick={this.chosenGenre}>
              Documentaire
            </button>
            <button type="button" value="18" onClick={this.chosenGenre}>
              Drame
            </button>
            <button type="button" value="10751" onClick={this.chosenGenre}>
              Familial
            </button>
            <button type="button" value="14" onClick={this.chosenGenre}>
              Fantastique
            </button>
            <button type="button" value="36" onClick={this.chosenGenre}>
              Histoire
            </button>
            <button type="button" value="27" onClick={this.chosenGenre}>
              Horreur
            </button>
            <button type="button" value="10402" onClick={this.chosenGenre}>
              Musique
            </button>
            <button type="button" value="9648" onClick={this.chosenGenre}>
              Mystère
            </button>
            <button type="button" value="10749" onClick={this.chosenGenre}>
              Amour
            </button>
            <button type="button" value="878" onClick={this.chosenGenre}>
              S.F.
            </button>
            <button type="button" value="10770" onClick={this.chosenGenre}>
              Téléfilm
            </button>
            <button type="button" value="53" onClick={this.chosenGenre}>
              Thriller
            </button>
            <button type="button" value="10752" onClick={this.chosenGenre}>
              Guerre
            </button>
            <button type="button" value="37" onClick={this.chosenGenre}>
              Western
            </button>
          </div>
        </div>
      </article>
    );
  }
}

// NouveautesList.propTypes = {
//   listNewMovies: PropTypes.arrayOf(
//     PropTypes.shape({ title: PropTypes.string, posterPath: PropTypes.string })
//       .isRequired,
//   ),
// };

NouveautesList.defaultProps = {
  titleGenre: '',
};
//   title: '',
//   posterPath: 'https://via.placeholder.com/190x285.png',
// };

export default NouveautesList;
