import React from 'react';

interface Props {
  className?: string;
}

export const Button: React.FC<Props> = ({ className }) => {

  const handleClick = (event) => {
    console.log('Clicked!', event.target);
  }

  return (
    <button className={className} onClick={handleClick}>BUTTON</button>
  )
};