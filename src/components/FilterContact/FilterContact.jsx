import React from 'react';
import { nanoid } from 'nanoid';
import { Input } from './FilterContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

export const FilterContact = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterId = nanoid();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Input
      id={filterId}
      onChange={handleChange}
      type="text"
      name="filter"
      placeholder="Find Contacts"
      value={filter}
    />
  );
};
