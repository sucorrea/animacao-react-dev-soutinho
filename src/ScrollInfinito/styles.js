import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin:0;
}
  body {
    font-family: sans-serif;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
  }
  ul {
    width: 600px;
    height: 600px;
    overflow-y: scroll;
    padding: 0;
    background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
  }
  li {
    height: 150px;
    padding: 15px;
  }
  li img {
    --size: 75px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    display: flex;
    
  }
  li div {
    padding: 15px;
    background-color: #FF9A8B;
    height: calc(100% - 30px);
    justify-content: center;
  }
  #sentinela {
    width: 100%;
    height: 5px;
    background-color: green;
  }
`;
