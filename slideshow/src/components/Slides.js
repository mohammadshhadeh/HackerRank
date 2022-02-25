import React from 'react';

function Slides({
    prevSlide,
    nextSlide,
    resetSlides,
    slides,
    index,
}) {

    return (
		<div>
			<div id="navigation" className="text-center">
				<button
					onClick={() => resetSlides()}
					data-testid="button-restart"
					className="small outlined"
					disabled={index === 0}
				>
					Restart
				</button>
				<button
					onClick={() => prevSlide()}
					data-testid="button-prev"
					className="small"
					disabled={index === 0}
				>
					Prev
				</button>
				<button
					onClick={() => nextSlide()}
					data-testid="button-next"
					className="small"
					disabled={index === slides.length - 1}
				>
					Next
				</button>
			</div>
			<div id="slide" className="card text-center">
				<h1 data-testid="title">{slides[index].title}</h1>
				<p data-testid="text">{slides[index].text}</p>
			</div>
		</div>
	);

}

export default Slides;
