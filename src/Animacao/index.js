import React, { useState } from "react";
import Lottie from "react-lottie";

import animationData from "./animation.json";
import { ButtonWrapperStyle } from "./styles";
import "./index.css";

const Animation = () => {
  const [isLiked, setLikeState] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
    direction: -0.5,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <ButtonWrapperStyle
        onClick={() => {
          const reverseAnimation = -0.5;
          const normalAnimation = 0.5;
  
          setAnimationState({
            ...animationState,
            isStopped: false,
            direction: animationState.direction === normalAnimation 
              ? reverseAnimation
              : normalAnimation,
          })
          setLikeState(!isLiked);
        }}>
          <div className="animation">
            <Lottie
              options={defaultOptions}
              width={400}
              height={400}
              direction={animationState.direction}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}/>
          </div>
      </ButtonWrapperStyle>
      {/* <spam>{isLiked ? 0.5 : 0}</spam> */}
    </>
  );
};

export default Animation;
