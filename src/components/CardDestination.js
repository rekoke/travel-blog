/* eslint-disable */
import React from 'react';
import COUNTRIES from '../constants/countries';
import { Link } from 'react-router-dom';

export default class CardDestination extends React.Component {
  render() {
    return (
      <div className="cardDestination">
        {COUNTRIES.map(country => (
          <div className="cardDestination__card">
            <Link
              to={{
                pathname: `/${country.country}`,
                state: { country: country.country }
              }}
            >
              <span
                className="cardDestination__card__img"
                style={{
                  backgroundImage:
                    'url(' + this.props.data[country.country] + ')'
                }}
                alt="country-img"
              />
              <img
                className={`cardDestination__card__icon -${country.country}`}
                src={require(`../assets/icon-${country.country}.svg`)}
              />
              <span className="cardDestination__card__text">
                {country.country}
              </span>
              <span className="cardDestination__card__cta">explore</span>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
