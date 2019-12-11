import React, { useState } from "react";
import Dater from "./childComponents/date";
import moment from "moment";
import styled from "styled-components/macro";

const DatePicker = () => {
  const [actualDate, setActualDate] = useState(moment());

  const calculateDay = offset => actualDate.clone().add(offset, "day");

  return (
    <Flex>
      <button onClick={() => setActualDate(calculateDay(-1))}>{"<"}</button>
      <Dater date={calculateDay(-1)} />
      <Dater date={calculateDay(0)} primary />
      <Dater date={calculateDay(1)} />
      <button onClick={() => setActualDate(calculateDay(1))}>{">"}</button>
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
