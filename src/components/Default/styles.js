import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f5eded;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  img {
    width: 400px;
    height: 400px;
    align-items: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Info = styled.span`
  font-size: 18px;
  text-align: center;
  max-width: 500px;
`;