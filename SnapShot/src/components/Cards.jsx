export default function Cards({ images }) {

    return (
        <div>
        {images.map((pic) => (
          <div key={pic.id}>
            
            <img
              src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
              alt={pic.title}
            />
          </div>
        ))}
        </div>
    )
}



//       https://farm66.          staticflickr.com/  65535          /53166703274  _236568dd2c_m   .jpg
// src={`https://farm${pic.farm} .staticflickr.com/  ${pic.server}  /${pic.id}    _${pic.secret}  .jpg`}
// img key={pic.id}
