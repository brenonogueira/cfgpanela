import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Jogadores from "./pages/Jogadores";
import Binds from "./pages/Binds";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} exact component={Home} />
        <Route path={"/cadastro"} component={Cadastro} />
        <Route path={"/jogadores"} exact component={Jogadores} />
        <Route path={"/binds"} exact component={Binds} />
        <ToastContainer autoClose={3000} />;
      </BrowserRouter>
    </div>
  );
}

export default App;
