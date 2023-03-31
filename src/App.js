import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Row from "./components/row/Row";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Row title={"Action"} gener={28} key={28} isLarge />
      <Row title={"Animation"} gener={16} key={16} />
      <Row title={"Science Fiction"} gener={878} key={878} />
      <Row title={"Horror"} gener={27} key={27} />
      <Row title={"Romance"} gener={10749} key={10749} />
      <Row title={"Documentary"} gener={99} key={99} />
      <Row title={"History"} gener={36} key={36} />
      <Row title={"TV Movie"} gener={10770} key={10770} />
    </div>
  );
}

export default App;
