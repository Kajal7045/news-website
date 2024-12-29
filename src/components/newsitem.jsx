import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Newsitem({title,description,src,url}) {

  const defaultimg = 'https://i.pinimg.com/originals/b2/a7/8b/b2a78b7520577fc3664213e22bffd2c3.jpg'
  return (
   <div className="card b-dark text-white mb-3 d-inline-block my-3 mx-3 px-2 py-2 bg-black " style={{maxWidth:"310px" ,maxHeight:"400px"}}>
 <img 
        src={src || defaultimg } 
        className="card-img-top" 
        alt="News" 
        style={{ height: "200px", objectFit: "cover", width: "100%" }} 
      />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description ? description.slice(0,90):"News is very important"}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}
