import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import BookItem from "~/components/BookItem";
import BooksCount from "../BooksCount";
import FilterContext from "~/context/FilterContext";
import { ItemBook } from "~/declarations/booksApi";
import { PAGINATION_STEP } from "~/hooks/useFilter";

const BookList = () => {
  const [bookItems, setBookItems] = useState<ItemBook[]>([]);
  const filter = useContext(FilterContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (filter?.data?.items) {
      filter.fetchedMore
        ? setBookItems([...bookItems, ...filter.data.items])
        : setBookItems(filter.data.items);
    } else {
      setBookItems([]);
    }
  }, [filter?.data?.items]);

  if (!filter) {
    return null;
  }

  const { setStartIndex, startIndex, isError, data, isFetching } = filter;

  const handleClickFetchMore = (): void => {
    filter.setFetchedMore(true);
    setStartIndex(startIndex + PAGINATION_STEP);
  };

  const handleClickBookItem = (id: string) => () => {
    navigate(`/book?volumeId=${id}`);
  };

  if (isError) {
    return <div>Error. Please, try again.</div>;
  }

  console.log(bookItems);
  return (
    <>
      <Wrapper isFetching={isFetching}>
        <Spinner isFetching={isFetching}>Loading...</Spinner>
        <BooksCount totalCount={data?.totalItems} />
        <BookItemList>
          {bookItems.map((item) => {
            return (
              item && (
                <BookItem
                  data={item}
                  key={item.id}
                  onClick={handleClickBookItem(item.id)}
                />
              )
            );
          })}
        </BookItemList>
        <Button onClick={handleClickFetchMore}>Load more</Button>
      </Wrapper>
    </>
  );
};

export default BookList;

const BookItemList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 8px;
`;

const Wrapper = styled.div<{ isFetching: boolean }>``;

const Spinner = styled.div<{ isFetching: boolean }>`
  display: ${({ isFetching }) => (isFetching ? "block" : "none")};
`;

const Button = styled.button`
  height: 40px;
  width: 140px;
  margin: 0 auto;
`;
