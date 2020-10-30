import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FirstFilters.module.css';

const FirstFilters = () => {
  return (
    <article>
      <div className={styles.bigButton}>
        <Link to="/jeveuxtrouver" title="">
          Je veux trouver THE film&nbsp;!
        </Link>
      </div>
      <div className={styles.bigButton}>
        <Link to="/filmChoice" title="Je partage le film que je veux regarder">
          J’ai trouvé&nbsp;: je partage&nbsp;!
        </Link>
      </div>
      <div className={styles.bigButton}>
        <Link to="/nouveautes" title="Voir les nouveautés">
          Je veux voir les dernières sorties
        </Link>
      </div>
    </article>
  );
};

export default FirstFilters;
