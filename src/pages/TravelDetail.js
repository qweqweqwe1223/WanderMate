import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const TravelDetail = () => {
  const {id} = useParams();  //url에서 id를 추출
  const [item, setItem] = useState(null);

    useEffect(() => {
      fetch(`${process.env.PUBLIC_URL}/db.json`)
        .then(r => r.json()) // json 형식으로 변환
        .then((data) => {
          const found = data.destinations.find((m) => m.id === parseInt(id));
          setItem(found)
        })
        .catch(console.error);
    }, [id]); // id가 바뀔 때마다 실행,

    if (!item) return <p>데이터 불러오는 중..</p>

  return (

    <section>
      <div className="card">
        <img src={item.image} alt={item.title} />
        <div className="recom-text">
          <h3>{item.title}</h3>
          <div className="info">
            <span className="tag">{item.tags.join("•")}</span>
          </div>
          <p className="text">{item.description}</p>
        </div>
      </div>
    </section>
    
  )
}

export default TravelDetail