import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import MyCarousel from "../components/Carousel/MyCarousel";
import MainProducts from "../components/MainProducts/MainProducts";
import Banner from "../components/Banner/Banner";
import Info from "../components/Info/Info";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Contact from "../components/Contact/Contact";
import Login from "../pages/Login/Login";
import CreateAccount from "../pages/Login/CreateAccount";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path="/" exact>
          <MyCarousel />
          <Banner />
          <Info />
          <SectionTitle title="Productos Destacados" />
          <MainProducts />
          <SectionTitle title="Contacto" />
          <Contact />
        </Route>
      </Switch>

      <Switch>
        <Route path="/contacto">
          <Contact />
        </Route>
      </Switch>

      <Switch>
        <Route path="/ingresar" exact>
          <Login />
        </Route>
      </Switch>

      <Switch>
        <Route path="/ingresar/crearCuenta">
          <CreateAccount />
        </Route>
      </Switch>

      <Switch>
        <Route path="/nosotros"></Route>
      </Switch>

      <Switch>
        <Route path="/productos"></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
