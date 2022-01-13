import styled from "styled-components";

export const Container = styled.div``;
export const ButtonWrapperStyle = styled.button`
  --size: 100px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  background-color: #fff;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 100%;
  
  .animation {
    pointer-events: none;
  }
`;
