import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from'./friends.json'

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <FriendCard friend={friends[0]}/>
      <FriendCard friend={friends[1]}/>
      <FriendCard friend={friends[2]}/>
      {/* <SpongeBobCard />
      <MrKrabsCard />
      <SquidwardCard /> */}
    </Wrapper>
  );
}

export default App;
