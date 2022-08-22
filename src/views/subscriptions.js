import React from 'react'

import { Helmet } from 'react-helmet'

import './subscriptions.css'

const Subscriptions = (props) => {
  return (
    <div className="subscriptions-container">
      <Helmet>
        <title>subscriptions - Nutty Lustrous Mink</title>
        <meta
          property="og:title"
          content="subscriptions - Nutty Lustrous Mink"
        />
      </Helmet>
      <div className="subscriptions-pricing">
        <div className="subscriptions-card">
          <div className="subscriptions-container1">
            <span className="subscriptions-text">Free</span>
            <span className="subscriptions-text01">$0</span>
            <span className="subscriptions-text02">Per month</span>
          </div>
          <span className="subscriptions-text03">
                                                this free
            &apos;subscription&apos; is the one with the least available
            features.
          </span>
          <button className="subscriptions-button button">Learn More</button>
        </div>
        <div className="subscriptions-card1">
          <div className="subscriptions-container2">
            <span className="subscriptions-text04">basic</span>
            <span className="subscriptions-text05">$9</span>
            <span className="subscriptions-text06">Per month</span>
          </div>
          <span className="subscriptions-text07">
            this subscription gives you 2nd priority on tickets, and if you have
            this and are upgrading to pro, you can get a discount
          </span>
          <button className="subscriptions-button1 button">Learn More</button>
        </div>
        <div className="subscriptions-card2">
          <div className="subscriptions-container3">
            <span className="subscriptions-text08">Pro</span>
            <span className="subscriptions-text09">$29</span>
            <span className="subscriptions-text10">Per month</span>
          </div>
          <span className="subscriptions-text11">
            <span className="subscriptions-text12">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                lorem lorem, malesuada in metus vitae, scelerisque accumsan
                ipsum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span></span>
          </span>
          <button className="subscriptions-button2 button">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Subscriptions
