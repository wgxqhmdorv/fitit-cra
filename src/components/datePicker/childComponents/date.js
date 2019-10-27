import moment from "moment";
import React from "react";
import styled from "styled-components";

const Date = ({ date, primary }) => {
  const calculateDay = () => {
    const offset = moment.duration(date.diff(moment())).asDays();
    if (Math.abs(offset) > 2) {
      return date.format("D MMM");
    } else {
      return date.calendar().split(" ")[0];
    }
  };

  return (
    <Button primary={primary}>
      <div style={{ fontWeight: "700" }}>{calculateDay()}</div>
      <div style={{ fontSize: "0.75rem", paddingBottom: "2px" }}>
        {date.format("dddd")}
      </div>
    </Button>
  );
};

const Button = styled.button`
  border-bottom-width: 2px;
  border-color: ${({ primary }) => (primary ? "#48bb78" : "#f7fafc")};
  color: ${({ primary }) => (primary ? "black" : "#a9a9a9")};
`;

export default Date;
