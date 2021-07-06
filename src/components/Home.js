import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doIncrement } from '../actions/IncrementAction';
import { getRandomQuotes } from '../actions/QuoteAction';

const Home = () => {
    const dispatch = useDispatch();

    const { myIncrement, myQuote } = useSelector(state => state);

    useEffect(() => {
        dispatch(getRandomQuotes())
    }, [dispatch])

    return (
        <div>
            <h1>Quote of the day</h1>
            {myQuote.quotes && myQuote.quotes.length > 0 && myQuote.quotes[Math.floor(Math.random() * myQuote.quotes.length)].text}
            <p>{myIncrement && myIncrement.counter}</p>
            <button onClick={() => { dispatch(doIncrement) }}>Increment</button>
        </div>
    )
}

export default Home
