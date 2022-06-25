import styled from "@emotion/styled";
import React from "react";

import Typography from "~/components/Typography/Typography";

interface Props {
  totalCount?: number;
}

const BooksCount = ({ totalCount }: Props) => (
  <Wrapper>
    {totalCount && (
      <Typography variant="label" color="black">
        Found {totalCount} results
      </Typography>
    )}
  </Wrapper>
);

export default BooksCount;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px;
`;
