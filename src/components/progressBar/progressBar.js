import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import moment from "moment";

const ProgressBar = ({ name, max, color }) => {
  const date = useSelector(state => moment(state.date).format("YYYY-MM-DD"));
  const list = useSelector(state =>
    state.list.filter(item => item.date === date)
  );

  // list = list.filter(item => item.date === date);
  const value = list.reduce(
    (prevValue, nextValue) => prevValue + nextValue[name],
    0
  );
  const percent = (value / max) * 100;

  return (
    <Container>
      <Wrapper>
        <Filler percent={percent} color={color} />
      </Wrapper>
      <CenteredText>{`${name.charAt(0).toUpperCase() +
        name.slice(1)}: ${value} / ${max}`}</CenteredText>
    </Container>
  );
};

const Container = styled.div`
  width: 20%;
`;

const CenteredText = styled.div`
  width: 100%;
  text-align: center;
`;

const Wrapper = styled.div`
  background-color: #dedede;
  border: #dedede solid 2px;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const Filler = styled.div`
  background-color: ${props => props.color};
  height: 100%;
  width: ${props => props.percent + "%"};
  padding: 4px;
`;

export default ProgressBar;
