import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Sample from "./components/Sample";
import Checker from './components/Checker'
import Searcher from "./components/Searcher";
import Explore from "./components/Explore";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <Searcher></Searcher>
      <About></About>
      <Explore></Explore>
      <Checker></Checker>
      <Sample></Sample>
    </div>
  );
}
