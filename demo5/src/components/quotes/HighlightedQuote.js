import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <figcaption>{props.datum}</figcaption>
      <h1>{props.thema}</h1>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
