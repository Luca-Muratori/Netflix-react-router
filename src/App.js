import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

import Gallery from "./components/Gallery";
import MyNavbar from "./components/Navbar";

function App() {
  return (
    <>
      <MyNavbar
        logoWidth={"100%"}
        iconWidth={"40px"}
        bgColor={"black"}
        textColor={"white"}
        fontSize={"20px"}
        logoSmartphoneWidth={"180px"}
      />
      <MyHeader />
      <Gallery />
      <MyFooter />
    </>
  );
}

export default App;
