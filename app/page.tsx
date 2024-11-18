import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Searcher from "./components/Searcher";
import About from "./components/About";
import Explore from "./components/Explore";
import Properties from "./components/Properties";
import Sample from "./components/Sample";
import Checker from './components/Checker'

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <Searcher></Searcher>
      <About></About>
      <Explore></Explore>
      <Properties></Properties>
      <Checker></Checker>
      <Sample></Sample>
    </div>
  );
}
