import "../style/Cards.css"

export default function Cards({ images }) {

    return (
        <div className="cardsContainer">
          <ul className="cardsUl">
        {images.map((pic) => (
          <li className="cardsLi" key={pic.id}>
            
            <img
              src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
              alt={pic.title}
            />
          </li>
          
        ))}
        </ul>
        </div>
    )
}



//       https://farm66.          staticflickr.com/  65535          /53166703274  _236568dd2c_m   .jpg
// src={`https://farm${pic.farm} .staticflickr.com/  ${pic.server}  /${pic.id}    _${pic.secret}  .jpg`}
// img key={pic.id}
