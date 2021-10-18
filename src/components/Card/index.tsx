import React, { useState, useEffect } from 'react';
interface Props {
  title: string
  className?: string
}

export const Card: React.FC<Props> = ({ title, className }) => {

  return (
    <div className={className}>
      {title}
    </div>
  )
}