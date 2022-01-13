import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    width: 300px;
    height: 600px;
    overflow-y: scroll;
    padding: 0;
    background-color: #ddd;
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
  }
  li div {
    padding: 15px;
    background-color: #fff;
    height: calc(100% - 30px);
  }
  #sentinela {
    width: 100%;
    height: 5px;
    background-color: green;
  }
`;