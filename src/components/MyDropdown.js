import React from 'react';

export default function MyDropdown(props) {
  const { continent } = props;
  return (
    <div>
      <div>{continent}</div>
    </div>
  );
}
