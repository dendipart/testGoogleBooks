import styled from "@emotion/styled";
import React from "react";

import Typography from "~/components/Typography/Typography";
import { ItemBook } from "~/declarations/booksApi";

const BookDetails = ({ volumeInfo }: ItemBook): JSX.Element => {
  return (
    <>
      <Wrapper>
        <Details>
          <Typography variant="underline">{volumeInfo.categories}</Typography>
          <Typography variant="bookTitle">{volumeInfo.title}</Typography>

          <Typography variant="paragraph">
            {volumeInfo.authors.join(", ")}
          </Typography>
          <Description>
            <Typography variant="paragraph" color="">
              {volumeInfo.description}
            </Typography>
          </Description>
        </Details>
      </Wrapper>
    </>
  );
};

export default BookDetails;

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
`;

const Details = styled.div``;
const Description = styled.div`
  border: 1px solid;
  border-radius: 2px;
  width: 400px;
  padding: 5px;
  background-color: #dcdcdc;
`;
