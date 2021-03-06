import { Fragment, useEffect } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>Zu diesem Beitrag gibt es keine Kommentare</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}  datum={loadedQuote.datum} thema={loadedQuote.thema}/>
      <Route path={match.path} exact>
        <div className='centered'>
         {/*<Link className='btn--flat' to={`${match.url}/comments`}>
          //   Kommentare laden
           </Link>*/}
        </div>
      </Route>
     
        <Comments />
      
    </Fragment>
  );
};

export default QuoteDetail;
