import {Link} from "react-router-dom"

export default function Cards({images}) {

    return (
        <div>
            {images.map(function (pic) {
                return (
                   <img src={`${pic.photo}`}/>
                )
            })}
        </div>
    )
}