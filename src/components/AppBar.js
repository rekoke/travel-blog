import React from 'react';
import { Link } from 'react-router-dom';

export default function AppBar() {
  return (
    <div className="appBar">
      <Link className="appBar__link" to="/">
        Home
      </Link>
    </div>
  );
}
