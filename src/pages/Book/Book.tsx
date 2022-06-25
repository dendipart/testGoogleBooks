import styled from "@emotion/styled";
import React from "react";
import { useLocation } from "react-router";

import { useGetBookQuery } from "~/services/api";
import BookDetails from "./BookDetails/BookDetails";
import BookImage from "./BookDetails/BookImage";

const Book = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("volumeId");

  const book = useGetBookQuery(
    {
      volumeId: query ?? "",
    },
    { skip: !query }
  );

  console.log(book);

  if (book.isError || !book.data) {
    return null;
  }

  return (
    <>
      <Wrapper>
        <BookImage imageSrc={book.data.volumeInfo.imageLinks.medium} />
        <BookDetails id="" volumeInfo={book.data.volumeInfo} />
      </Wrapper>
    </>
  );
};

export default Book;

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
`;
