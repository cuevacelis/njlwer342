import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
    };
  }

  addList = (e) => {
    if (e.keyCode === 13) {
      this.setState({ list: [...this.state.list, e.target.value] });
      e.target.value = "";
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.list.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="new-task"
              onKeyUp={(e) => this.addList(e)}
              placeholder="Ingresa una tarea y oprime Enter"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
