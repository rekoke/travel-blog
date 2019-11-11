import PropTypes from 'prop-types';
import React from 'react';

function Landing({
  className,
  bgimg,
  title,
  country,
  continent,
  text,
  imagesCarrousel
}) {
  const carrousel = imagesCarrousel.map(item => (
    <img
      className="landing-page__body__carrousel__inner__image"
      src={item}
      alt="bgImg"
    />
  ));
  return (
    <div className={`landing-page ${className}`}>
      <div className="landing-page__header">
        <div className="landing-page__header__bgimage">
          <img
            className="landing-page__header__bgimage__image"
            src={bgimg}
            alt="bgImg"
          />
          <div className="landing-page__header__bgimage__text-container">
            <div className="landing-page__header__bgimage__text-container__sub">
              <div className="landing-page__header__bgimage__text-container__sub__title">
                {title}
              </div>
              <div className="landing-page__header__bgimage__text-container__sub__country-continent">
                {country} - {continent}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page__body">
        <div className="landing-page__body__text">{text}</div>
        <div className="landing-page__body__carrousel">
          <div className="landing-page__body__carrousel__inner">
            {carrousel}
          </div>
        </div>
      </div>
      <div className="landing-page__footer">
        <div className="landing-page__footer__copyright">
          © 2019 alvarokoke. All Rights Reserved. Website by alvarokoke designs.
        </div>
      </div>
    </div>
  );
}

Landing.defaultProps = {
  className: '',
  bgimg: null,
  title: '',
  country: '',
  continent: '',
  imagesCarrousel: []
};

Landing.propTypes = {
  className: PropTypes.string,
  bgimg: PropTypes.string,
  title: PropTypes.string,
  country: PropTypes.string,
  continent: PropTypes.string,
  imagesCarrousel: PropTypes.instanceOf(Array)
};

export default Landing;
