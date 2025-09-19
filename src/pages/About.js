import React from 'react'
// import aboutMovie from '../assets/movie.mp4'

const About = () => {
  return (
    <div className='about-wrap'>
      <div className="about-mov">
        {/* <video src={aboutMovie} autoPlay loop muted preload='auto' playsInline></video> */}
      </div>
      <section className='contents'>
        <div className="slogan-area">
          <em>원더메이트와 함께 여행을 가요</em>
          <p>함께 하는 여행, WanderMate</p>
        </div>
      </section>
    </div>
  )
}

export default About