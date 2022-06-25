import React, { ChangeEventHandler } from "react";

import { Categories, Sorting } from "~/constants";

interface Props {
  options: Categories[] | Sorting[];
  onSelect?: ChangeEventHandler<HTMLSelectElement>;
}

const Select = ({ options, onSelect }: Props) => {
  return (
    <>
      <select name="" id="" onChange={onSelect}>
        {options.map((i) => (
          <option value={i.toLowerCase()} label={i} key={i}></option>
        ))}
      </select>
    </>
  );
};

export default Select;
