// import { range } from './utils';

function StarRating({ rating }) {
  
    const yellowStars = [];
    
    for (let i = 0; i < rating; i++) {
      yellowStars.push(
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    )
      }
    
  return <div className="star-wrapper">{yellowStars}</div>;
}

export default StarRating;
