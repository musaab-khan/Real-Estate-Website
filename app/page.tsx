import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Searcher from "./components/Searcher";
import About from "./components/About";
import Explore from "./components/Explore";
import Properties from "./components/Properties";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import MessageForm from "./components/MessageForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ToggleMode from "./components/ToggleMode";

export default function Home() {

  return (
    <div className="bg-[#f3f3f3] dark:bg-black font-sans">
      <Navbar></Navbar>
      <Hero></Hero>
      <Searcher></Searcher>
      <About></About>
      <Explore></Explore>
      <Properties></Properties>
      <Services></Services>
      <Testimonials></Testimonials>
      <MessageForm></MessageForm>
      <Footer></Footer>
      <BackToTop></BackToTop>
      <ToggleMode></ToggleMode>
    </div>
  );
}
