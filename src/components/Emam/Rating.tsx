import React from 'react'
import { Rate } from 'antd';

export interface RatingProp{
    rating:number
}


const Rating = ({ rating }:RatingProp) => {
  return (
    <div>
      <Rate allowHalf defaultValue={rating} />
    </div>
  )
}

export default Rating
