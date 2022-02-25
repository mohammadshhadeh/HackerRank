import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";

function App({slides}) {
    let [slideIndex, setSlideIndex] = useState(0);

    const prevSlide = () => {
        if (slideIndex !== 0) setSlideIndex(--slideIndex);
    };

    const nextSlide = () => {
        if (slideIndex !== slides.length - 1) setSlideIndex(++slideIndex);
    };

    const resetSlides = () => {
        setSlideIndex(0);
    };

    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                    resetSlides={resetSlides}
                    slides={slides}
                    index={slideIndex}
                />
            </div>
        </div>
    );
}

export default App;
