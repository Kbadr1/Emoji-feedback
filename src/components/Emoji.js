import React, { useState, useEffect } from "react";
import { EmojiContainer, Title, EmojiFace } from "../styles/emoji.styles";
import Lottie from "react-lottie";

const Emoji = ({ emoji, index, options, setChosen, chosen }) => {
  const [hover, setHover] = useState(null);

  let onHover = (index) => {
    setHover(index);
  };
  let onOut = () => {
    setHover(null);
  };

  const emojiSize = (index) => {
    if (chosen === index) {
      return 75;
    } else if (hover === index) {
      return 62.5;
    } else {
      return 50;
    }
  };

  return (
    <EmojiContainer
      onMouseOver={() => onHover(index)}
      onMouseOut={onOut}
      onClick={() => setChosen(index)}
      key={index}
    >
      <EmojiFace height={`${emojiSize(index)}`} width={`${emojiSize(index)}`}>
        <Lottie
          options={options[index]}
          isClickToPauseDisabled={true}
          speed={1.6}
          isStopped={false}
          isPaused={false}
        />
      </EmojiFace>
      <Title visibility={chosen === index ? `visible` : `hidden`}>
        {emoji.title}
      </Title>
    </EmojiContainer>
  );
};

export default Emoji;
