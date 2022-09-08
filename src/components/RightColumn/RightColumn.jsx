import React from "react"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import './RightColumn.css'



const RightColumn  = () => {
  return (
    <div className="right-column">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
            <img src={heart} alt="heart-rate" />
            <span>Heart Rate</span>
            <span>116 bmp</span>
        </div>
        <img src={hero_image} alt="hero-image" className="hero-image" />
        <img src={hero_image_back} alt="hero-image-background" className="image-back" />
        <div className="calories">
          <img src={calories} alt="calories" />
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </div>
    </div>
  )
}

export default RightColumn 