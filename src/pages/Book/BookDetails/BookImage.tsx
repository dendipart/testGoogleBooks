import styled from "@emotion/styled";
import React from "react";

interface Props {
  imageSrc: string;
}

const BookImage = ({ imageSrc }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Image src={imageSrc} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  background-color: #dcdcdc;
`;

const Image = styled.img`
  margin: 50px;
  width: 70%;
  box-shadow: 10px 10px 10px grey;
`;

export default BookImage;
