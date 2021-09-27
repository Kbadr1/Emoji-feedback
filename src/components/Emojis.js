import React, { useState } from "react";
import { EmojisContainer } from "../styles/emojis.styles";
import { amazing, aweful, bad, good, okok } from "../animationData/index";
import Emoji from "./Emoji";

const Emojis = ({ chosen, setChosen }) => {
  const reactions = [
    { data: aweful, title: "Aweful" },
    { data: bad, title: "Bad" },
    { data: okok, title: "Ok Ok" },
    { data: good, title: "Good" },
    { data: amazing, title: "Amazing" },
  ];

  const options = reactions.map((emoji) => ({
    loop: true,
    autoplay: true,
    animationData: emoji.data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }));

  return (
    <EmojisContainer>
      {reactions.map((emoji, index) => (
        <Emoji
          emoji={emoji}
          index={index}
          options={options}
          setChosen={setChosen}
          chosen={chosen}
          key={index}
        />
      ))}
    </EmojisContainer>
  );
};

export default Emojis;
