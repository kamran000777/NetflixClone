import "./App.css";
import Advertisment from "./component/Advertisment/Advertisment";
import Navbar from "./component/Navbar/Navbar";
import Row from './component/Row/Row';
import Banner from "./component/Banner/Banner";
import requests from './request';

function App() {
  return (
      <div className="app">
        <Navbar/>
        <Banner/>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>


        <Advertisment title="Watch everywhere." message="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." imageUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" videoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"/>


        <Advertisment title="Enjoy on your TV." message="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." imageUrl="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" videoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" islargeImage={true}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentarires}/>
      </div>

  );
}

export default App;
