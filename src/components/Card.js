import React, {useState} from "react";
import { animated, interpolate, useSpring} from "react-spring/hooks";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

//card 1장에 대한 컴포넌트

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { name, age, distance, bio, pics } = data[i];

  const [open, setOpen] = useState(false);

  const { size } = useSpring({
    from: { size: "100%" },
    to: {
      size: open ? "125%" : "100%"
    }
  });
  
  function seeDetails(){
    setOpen(open => !open);
    if(!open){
      document.getElementById(`details${i}`).style.display = "block";
      document.getElementById(`seeDetails${i}`).innerText = "닫기";
    }
    else{
      document.getElementById(`details${i}`).style.display = "none";
      document.getElementById(`seeDetails${i}`).innerText = "자세히 보기";
    }
  }

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
        scale: size
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
        <div className="card" id={`card${i}`}>
          <Carousel>
            {pics.map((pic, index) => (
              <img src={pic} key={index} alt="food_picture" />
            ))}
          </Carousel>
          <h2>{name},</h2>
          <h2>{age}</h2>
          <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> {distance}</h5>
          <h5>{bio}</h5>
          <h5><button onClick={()=>seeDetails()} id={`seeDetails${i}`}>자세히 보기</button></h5>
          <h5 id = {`details${i}`} style={{display: 'none'}}>asdf asdf asdf<br/>asdf asdf asdf<br/>asdf asdf asdf<br/>asdf asdf asdf<br/>asdf asdf asdf<br/>asdf asdf asdf<br/></h5>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Card;
