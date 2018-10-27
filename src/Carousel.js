import React, { useState } from 'react';
import classNames from 'classnames';


const IMAGES = [...Array(4)].map((_, i) => i);

const getImageClasses = (active) => (
  classNames("mySlides fade", {"active": active})
)

function Carousel() {
  const [active, setActive] = useState(0);

  const imagesDivs = IMAGES.map((i) => (
    <div className={getImageClasses(active === i)}>
      <img src="https://via.placeholder.com/350" alt="Placeholder" />
    </div>
  ));

  const buttons = IMAGES.map(i => (
    <span
      className={classNames("dot", { "active": i === active })}
      onClick={() => setActive(i)}
    /> 
  ))

  return (
      <div>
      <div className="slideshow-container">
        {imagesDivs}
      </div>
      <br />
      <div style={{textAlign: 'center'}}>
        {buttons}
      </div>
    </div>
  );
}

export default Carousel;
