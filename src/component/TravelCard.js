import React from 'react'
import { useNavigate } from 'react-router-dom'

const TravelCard = ({item}) => {
  const navigate = useNavigate()
  return (
    <div className="travel-card" 
          onClick={() => {navigate(`/travel/${item.id}`)}}>
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div className="meal-text">
              <h3>{item.title}</h3>
              <p className='info'>
                <span className='tag'>{item.tags.join(".")}</span>
              </p>
              <p className="desc">{item.description}</p>
              <p className="recom">{item.recommended && <span className = 'badge'>추천</span>}</p>
            </div>
    </div>
  )
}

export default TravelCard