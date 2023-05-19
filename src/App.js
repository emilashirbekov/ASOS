import Footer from "./components/Footer/Footer";
import Discount from "./components/Discount/Discount";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners";
import Social from "./components/Social/Social";
import MainCardList from "./components/MainCardList/MainCardList";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Discount />
      <Hero />
      <MainCardList />
      <Partners />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
