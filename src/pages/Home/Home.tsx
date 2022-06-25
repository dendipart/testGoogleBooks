import styled from "@emotion/styled";
import React from "react";

import BookList from "./BookList/BookList";

const Home = () => {
  return (
    <Wrapper>
      <BookList />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`;
