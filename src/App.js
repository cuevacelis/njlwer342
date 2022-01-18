import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      value: "",
    };
  }

  addList = (e) => {
    e.preventDefault();
    this.setState({ list: [...this.state.list, this.state.value] });
    this.setState({ value: "" });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.list.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
          <form onSubmit={this.addList}>
            <input
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
