import React, { useEffect, useState } from 'react'
import TravelCard from '../component/TravelCard';
// import './Travel.css'
import RecomCard from '../component/RecomCard';
import "../App.css"

const Travel = () => {
  const [all, setAll] = useState([]); // 전체 데이터 상태
  const [showAll, setShowAll] = useState(false); // 더보기 버튼 상태

  useEffect(() => {
    fetch('/db.json')
      .then(r => r.json()) // json 형식으로 변환
      .then(data => setAll(data.destinations || [])) // destinations 배열만 저장
      .catch(console.error);
  }, []); // 마운트될 때 1번만 실행

  const visible = showAll ? all : all.slice(0, 10);
  const restCount = Math.max(all.length - 10, 0) // 전체 데이터 갯수 -10을 뺀 나머지를 보여주고 나머지가 음수일 경우에는 0으로 처리

  return (
    <div className='contents'>
      <div className="title-area">
      <h2>건강한 여행가기</h2>
      <small>총 {all.length}개 항목 중에 처음 10개를 보여줍니다.</small>
      </div>
      <div className="travel-list">
        {visible.map((item) => (
          <RecomCard key={item.id} item={item}/>
        ))}
      </div>

      {!showAll && restCount > 0 && (
        <div className="btn-area">
          <button onClick={() => setShowAll(true)}>
            더보기(+{restCount})
          </button>
        </div>
      )}
    </div>
  )
}

export default Travel