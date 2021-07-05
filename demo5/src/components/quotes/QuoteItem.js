import { Link } from 'react-router-dom';

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.datum}</p>
          <h2>{props.thema}</h2>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className={classes.btn} to={`/quotes/${props.id}`}>
        Anzeigen
      </Link>
    </li>
  );
};

export default QuoteItem;
