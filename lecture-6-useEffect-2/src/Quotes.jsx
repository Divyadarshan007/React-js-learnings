import { useEffect, useState } from "react";

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        getNewQuote();
    }, [])

    const getNewQuote = async () => {
        const URL = "https://dummyjson.com/quotes/random";
        const res = await fetch(URL);
        const data = await res.json();

        setQuotes([...quotes, data])
    }
    return (
        <div className="container">
            <div className="my-5">
                <button className="btn btn-primary" onClick={getNewQuote}>Click</button>
            </div>
            <div className="row gy-4 my-5">
                {
                    quotes.length == 0 ? <div class="spinner-grow" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div> : quotes.map((item) => {
                        return <div className="col-4">
                            <figure>
                                <blockquote class="blockquote">
                                    <p>{item.quote}</p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    Someone famous in <cite title="Source Title">{item.author}</cite>
                                </figcaption>
                            </figure>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Quotes