import React from 'react'
import './Cards.css';
export const Cards = ({data}) => {
  
  
  
    return (
    <div className='Card-container'>
        <img src={data.img} alt="asdasd" />
        <div className='tag-card'>
            <h3>{data.title}</h3>
             <p>{data.content}</p>
             {
                data.extra ?
                <h2>"{data.extra}"</h2>
                :
                null
             }
        </div>
       
        
    </div>
  )
}
