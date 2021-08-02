import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainUsuario from "./pages/usuario/main";
import DetalhesUsuario from './pages/usuario/detalhes';
import CriarUsuario from './pages/usuario/criar';
import EditarUsuario from  './pages/usuario/editar';
import DeletarUsuario from  './pages/usuario/deletar';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/usuarios" component={MainUsuario} />
      <Route exact path="/usuarios/:id" component={DetalhesUsuario} />
      <Route exact path="/criarUsuario" component={CriarUsuario} />
      <Route exact path="/editarUsuario/:id" component={EditarUsuario} />
      <Route exact path="/deletarUsuario/:id" component={DeletarUsuario} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
