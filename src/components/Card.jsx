import React from 'react';
import '../styles/styles.css';
import '../styles/styles.scss';
import { CardContainer, ProceedButton, CancelLink } from '../styles/StyleCard';
import backImage from '../images/pattern-background-desktop.svg';
import headerImage from '../images/illustration-hero.svg';
import musicIcon from '../images/icon-music.svg';

const Card = () => {
  return (
    <>
      <CardContainer className="card">
        <div className="bck_image" style={{ backgroundImage: `url(${backImage})` }}/>
        <div className="card-content">
          <div className="hero_image">
            <img src={headerImage} alt="Hero" />
          </div>
          <div className="card_header">
            <h1>Order Summary</h1>
            <p className="description">
              You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </p>
          </div>
          <div className="pricing_section">
            <article>
              <img src={musicIcon} alt="Music Icon" />
              <div className="text">
                <h2>Annual Plan</h2>
                <p>$59.99/year</p>
              </div>
            </article>
            <button className="change_btn">Change</button>
          </div>
          <div className="action_buttons">
            <ProceedButton>Proceed to Payment</ProceedButton>
          </div>
          <CancelLink href="#">Cancel Order</CancelLink>
        </div>
      </CardContainer>
    </>
  );
};

export default Card;
