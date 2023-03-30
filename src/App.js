import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Row from "./components/row/Row";

function App() {
  const [geners, setgeners] = useState([]);

  useEffect(() => {
    async function getGener() {
      const respones = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=a958eb475e408eb09ba601ab514b527a&language=en-US"
      );
      const data = await respones.json();
      setgeners(data.genres);
    }
    getGener();
  }, []);

  return (
    <div className="app">
      <Header />
      <Banner />
      {geners?.map((e) => {
        const { id, name } = e;
        return (
          <>
            <Row title={name} gener={id} />
          </>
        );
      })}
    </div>
  );
}

export default App;
