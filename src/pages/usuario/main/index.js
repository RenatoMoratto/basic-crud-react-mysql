import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: [],
      erro: null
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3003/sistema/usuarios`)
      .then(usuario =>
        usuario.json().then((usuario) => this.setState({ usuario }))
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    const { usuario } = this.state;

    return usuario.map((usuario, i) => (
      <div className="usuario-list">
        <div key={i}>
          <h5>{usuario.nome}</h5>
          <article key={usuario.id}>
            <strong>{usuario.salario}</strong>
            <p>
              <Link to={`/usuarios/${usuario.id}`}>Detalhes</Link>
            </p>
            <br />
          </article>
        </div>
      </div>
    ));
  }
}
