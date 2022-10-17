import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-image: url(https://i.postimg.cc/QxmFq025/wpp2.png);
  overflow-y: auto;


  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(255, 0, 0, 0.4);
  }
`;