import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners";
import Social from "./components/Social/Social";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <Partners />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
