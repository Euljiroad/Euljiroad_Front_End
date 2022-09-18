import React from "react";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import Map from "./Map";

//card 1장에 대한 컴포넌트

/* 현재 카드 뒷면이 없는 관계로 기존 이미지 자리에 지도를 임시로 배치함 
<Carousel>
    {pics.map((pic, index) => (
        <img src={pic} key={index} alt="food_picture" />
    ))}
</Carousel> 
*/
const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { name, age, distance, bio, pics } = data[i];

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
        <div className="card">
          <Map
            i={i}
            data={data}
          />
          <h2>{name}</h2>
          <h2>{age}</h2>
          <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> {distance}</h5>
          <h5>{bio}</h5>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Card;

