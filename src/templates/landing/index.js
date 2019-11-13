import PropTypes from 'prop-types';
import React from 'react';

function Landing({
  className,
  bgimg,
  title,
  country,
  continent,
  text,
  imagesCarrousel,
  imageClicked,
  active,
  handleClose,
  handleArr
}) {
  const carrousel = imagesCarrousel.map((item, index) => (
    <button
      className={`landing-page__body__carrousel__inner__image-container ${
        active === index ? '-selected' : ''
      }`}
      onClick={() => imageClicked(index)}
      type="button"
    >
      <img
        className="landing-page__body__carrousel__inner__image-container__image"
        src={item}
        alt="bgImg"
        id={`imageposition_${index}`}
      />
      <div className="landing-page__body__carrousel__inner__image-container__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar
        molestie velit id hendrerit. Maecenas ligula nulla, accumsan nec dapibus
        sed, pellentesque quis sapien. Fusce malesuada lectus neque, id
        fringilla velit scelerisque sed.
      </div>
    </button>
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
            {active !== null ? (
              <button
                className="landing-page__body__carrousel__inner__close-container"
                type="button"
                onClick={() => handleClose()}
              >
                <img
                  src="/assets/icon-close.png"
                  className="landing-page__body__carrousel__inner__close-container__close"
                  alt="close"
                />
              </button>
            ) : null}
            {active !== null && active !== 0 ? (
              <button
                className="landing-page__body__carrousel__inner__arrL-container"
                type="button"
                onClick={() => handleArr('L')}
              >
                <img
                  src="/assets/icon-arrow.png"
                  className="landing-page__body__carrousel__inner__arrL-container__arrL"
                  alt="arrowL"
                />
              </button>
            ) : null}
            {active !== null && active !== 5 ? (
              <button
                className="landing-page__body__carrousel__inner__arrR-container"
                type="button"
                onClick={() => handleArr('R')}
              >
                <img
                  src="/assets/icon-arrow.png"
                  className="landing-page__body__carrousel__inner__arrR-container__arrR"
                  alt="arrowR"
                />
              </button>
            ) : null}
            {active !== null ? (
              <div className="landing-page__body__carrousel__inner__counter">
                {active + 1}/6
              </div>
            ) : null}
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
  imagesCarrousel: [],
  imageClicked: () => {},
  active: null,
  handleClose: () => {},
  handleArr: () => {}
};

Landing.propTypes = {
  className: PropTypes.string,
  bgimg: PropTypes.string,
  title: PropTypes.string,
  country: PropTypes.string,
  continent: PropTypes.string,
  imagesCarrousel: PropTypes.instanceOf(Array),
  imageClicked: PropTypes.func,
  active: PropTypes.number,
  handleClose: PropTypes.func,
  handleArr: PropTypes.func
};

export default Landing;
