import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "../App.css"
import "react-multi-carousel/lib/styles.css";
import RecomCard from '../component/RecomCard';

//상단 스와이퍼
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};


const Home = () => {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    fetch('/db.json')
    .then((r) => r.json()) //요청한 데이터를 json형태로 바꿔줘
    .then((data) => {
      console.log('전체데이터:', data); 
      const destinations = data.destinations || []; //data.travel이 있으면 그 값 그대로 보여주고 없으면 빈 배열로 처리 -> travel 데이터가 항상 배열로 처리되도록 해주는 구문
      console.log("destinations 배열:", destinations)
      
      //db.json에서 recommended라는 값이 true인 요소만 새 배열로 만든 다음 onlyRecommended에 담음.
      const onlyRecommended = destinations.filter((m) => m.recommended);
      // console.log("추천만:", onlyRecommended)

      const firstFour = onlyRecommended.slice(0,4);
      // console.log('앞4개:', firstFour)

      setRecs(firstFour);
    })
    .catch((err) => {
      console.log("db.json 로드 실패:", err)
    })  
  }, []); //[]은 처음 실행했을 때 한번만 실행
  return (
    <div className='contents'>
      <Carousel
      responsive={responsive}
      swipeable={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      className='hero-slide'
      infinite={true}
      >
        <div>
          <img src="https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="도쿄" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="하와이" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="산토리니" />
        </div>


      </Carousel>

      <div className="intro-text">
        <h2><span>세상의 아름다운 여행지를 한눈에!</span></h2>
      </div>
      
      <div className="text-area">
        <p>
          WanderMate는 전 세계의 인기 여행지를 모아 소개하고, <br />
          추천 목적지와 태그별 탐색 기능을 통해 나만의 여행을 계획할 수 있도록 도와줍니다."
        </p>
      </div>

      <div className="recommendArea">
        <h2>오늘의 PICK</h2>
        <div className="recom-card">
          {
            recs.map((item) => (
              <RecomCard key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home