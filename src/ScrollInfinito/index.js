import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles";

const ScrollInfinito = () => {
  const [followers, setFollowers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      const perPage = 10;
      const ENDPOINT = "https:api.github.com/users/omariosouto/followers";
      const URL = `${ENDPOINT}?per_page=${perPage}&page=${currentPage}&order=DESC`;
      fetch(URL)
        .then((response) => response.json())
        .then((newFollowers) =>
          setFollowers((prevFollowers) => [...prevFollowers, ...newFollowers])
        );
    }, [currentPage]);

   useEffect(() => {
     const intersectionObserver = new IntersectionObserver((entries) => {
       if (entries.some((entry) => entry.isIntersecting)) {
         console.log("Sentinela appears!", currentPage + 1);
         setCurrentPage((currentValue) => currentValue + 1);
       }
     });
     intersectionObserver.observe(document.querySelector("#sentinela"));
     return () => intersectionObserver.disconnect();
   }, [currentPage]);

  return (
    <main>
      <GlobalStyle />
      <h1>GitHub API: Infinite Scroller</h1>
      <h2>Página atual: {currentPage}</h2>

      <ul>
        {followers.map((follower) => (
          <li key={follower.login}>
            <div>
              <img alt="alt" src={`https://github.com/${follower.login}.png`} />
              <p>
                github.com/<strong>{follower.login}</strong>
              </p>
            </div>
          </li>
        ))}
        <li id="sentinela"></li>
      </ul>
    </main>
  );
};

export default ScrollInfinito;
