import React from "react";
import Dater from "./childComponents/date";
import moment from "moment";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { incrementDate, decrementDate } from "../../redux/features/dateSlice";

const DatePicker = () => {
  const date = useSelector(state => moment(state.date));
  const dispatch = useDispatch();

  const calculateDay = offset => date.clone().add(offset, "day");

  return (
    <Flex>
      <button onClick={() => dispatch(decrementDate())}>{"<"}</button>
      <Dater date={calculateDay(-1)} />
      <Dater date={date} primary />
      <Dater date={calculateDay(1)} />
      <button onClick={() => dispatch(incrementDate())}>{">"}</button>
    </Flex>
  );
};

const Flex = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 1fr 1fr 2rem;
  grid-column-gap: 2rem;
  //justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export default DatePicker;
