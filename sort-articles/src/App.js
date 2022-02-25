import React, { useState, useEffect } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
    const [sortedArticles, setArticles] = useState(articles);
    const newArticles = [...sortedArticles];

    const upvoted = () => {
        newArticles.sort((a, b) => b.upvotes - a.upvotes);
        setArticles(newArticles);
    }

    const recent = () => {
        newArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticles(newArticles);
    }

    useEffect(() => {
        upvoted();
    },[]);


    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={upvoted}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={recent}>Most Recent</button>
            </div>
            <Articles articles={sortedArticles}/>
        </div>
    );

}

export default App;
