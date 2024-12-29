import React, { useEffect, useState } from 'react'
import Newsitem from './newsitem'

export default function 
ewsboard({categeory}) {
//GET https://newsapi.org/v2/top-headlines?country=us&apiKey=2eb6fbeabf7f44e897f5faec9c2d451                                
const [articles,setarticles] = useState([])

useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categeory}&apiKey=${import.meta.env.VITE_API_KEY}`;
   
    
    fetch(url).then(response=>response.json()).then(data=>setarticles(data.articles))
},[categeory])
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2> 

     {articles.map((news,index)=>{
 return<Newsitem key={index} title={news.title} descripton={news.description} src={news.urlToImage} url={news.url}></Newsitem>
     })}                                     
    </div>
  )
}
