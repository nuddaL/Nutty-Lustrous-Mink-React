import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Nutty Lustrous Mink</title>
        <meta property="og:title" content="Nutty Lustrous Mink" />
      </Helmet>
      <div className="home-steps">
        <h1 className="home-text">script services</h1>
        <div className="home-step">
          <h1 className="home-text01">
            <span>1</span>
          </h1>
          <h1 className="home-text03">help</h1>
          <span className="home-text04">
            <span>script service is the #1 script helping service</span>
            <br></br>
          </span>
        </div>
        <div className="home-container1">
          <div className="home-container2">
            <div className="home-step1">
              <h1 className="home-text07">
                <span>2</span>
              </h1>
              <h1 className="home-text09">free</h1>
              <span className="home-text10">
                <span>unlike some others</span>
                <br></br>
                <span> you dont need to pay anything!</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container3"></div>
        </div>
        <div className="home-step2">
          <h1 className="home-text15">
            <span>3</span>
          </h1>
          <h1 className="home-text17">reputation</h1>
          <span className="home-text18">
            <span>with reputable owners, your sure to lose nothing!</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-step3">
        <h1 className="home-text21">
          <span>4</span>
        </h1>
        <h1 className="home-text23">speed</h1>
        <span className="home-text24">
          <span>we are one of the fastest with help!</span>
          <br></br>
        </span>
      </div>
      <button className="home-button button">
        <span>
          <span>next - subscriptions</span>
          <br></br>
          <br></br>
        </span>
      </button>
    </div>
  )
}

export default Home
