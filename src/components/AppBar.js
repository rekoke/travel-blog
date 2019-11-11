import React from 'react';
import { Link } from 'react-router-dom';

export default function AppBar() {
  return (
    <div className="appBar">
      <div className="appBar__container">
        <Link className="appBar__container__link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}
