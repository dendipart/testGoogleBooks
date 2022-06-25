import styled from "@emotion/styled";
import React from "react";

import { ItemBook } from "~/declarations/booksApi";
import Typography from "../Typography/Typography";

interface Props {
  data: ItemBook;
  onClick: () => void;
}

const BookItem = ({ data, onClick }: Props) => {
  return (
    <Wrapper>
      <BookImage
        src={data.volumeInfo?.imageLinks?.thumbnail}
        onClick={onClick}
      />
      <Details>
        <Typography variant="underline" color="brown">
          {data.volumeInfo.categories}
        </Typography>
        <Typography variant="bookItemTitle" color="black" onClick={onClick}>
          {data.volumeInfo.title}
        </Typography>
        <Typography variant="default" color="black">
          {data.volumeInfo.authors?.join(", ")}
        </Typography>
      </Details>
    </Wrapper>
  );
};

export default BookItem;

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 300px;
  width: 200px;
  margin: 0 auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const BookImage = styled.img`
  height: 180px;
  width: 70%;
  cursor: pointer;
  margin: 0 auto;
`;

const Details = styled.div``;
