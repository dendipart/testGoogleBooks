import styled from "@emotion/styled";
import React, { ChangeEvent, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";

import Searchbar from "~/components/Searchbar/Searchbar";
import Select from "~/components/Select/Select";
import Typography from "~/components/Typography/Typography";
import { Categories, Sorting } from "~/constants";
import FilterContext from "~/context/FilterContext";

const Header = () => {
  const filter = useContext(FilterContext);

  if (!filter) {
    return null;
  }
  const navigate = useNavigate();

  const handleClickBookItem = () => {
    navigate("/");
  };

  const handleChangeSearchBar = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    filter.setSearchValue(event.target.value);
  };

  const handleSelectCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    filter.setCategoryValue(event.target.value as Categories);
  };

  const handleSelectSort = (event: ChangeEvent<HTMLSelectElement>) => {
    filter.setSortValue(event.target.value as Sorting);
  };

  return (
    <Div>
      <Title onClick={handleClickBookItem}>Search for books</Title>
      <form action="#">
        <SearchbarDiv>
          <Searchbar onChange={handleChangeSearchBar} />
          <Button onClick={filter.handleSubmit}>
            <MySearchIcon />
          </Button>
        </SearchbarDiv>
      </form>
      <SelectDiv>
        <Typography variant="label" color="white">
          Categories:
        </Typography>
        <CategorySelect
          options={Object.values(Categories)}
          onSelect={handleSelectCategory}
        />
        <Typography variant="label" color="white">
          Sorting by:
        </Typography>
        <SortSelect
          options={Object.values(Sorting)}
          onSelect={handleSelectSort}
        />
      </SelectDiv>
    </Div>
  );
};

export default Header;

const Div = styled.div`
  background-image: url(https://www.aspenwords.org/wp-content/uploads/2017/12/2017-12-01-15-49-www.aspeninstitute.org_.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 200px;
`;
const Title = styled.h2`
  display: flex;
  margin: 20px;
  font-size: 50px;
  color: white;
  cursor: pointer;
`;
const SearchbarDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  margin-left: -40px;
  height: 24px;
  width: 40px;
  margin-top: 0px;
`;
const SelectDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
const CategorySelect = styled(Select)`
  width: 200px;
`;
const SortSelect = styled(Select)`
  width: 200px;
`;
const MySearchIcon = styled(SearchIcon)`
  height: 22px;
  width: 37px;
  margin-top: -2px;
`;
