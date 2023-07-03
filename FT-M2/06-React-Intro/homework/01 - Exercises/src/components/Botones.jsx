import React from "react";

// asi se declara un sintaxis de clase en react es un metodomantiguo pero aun se usa
class Botones extends React.Component {
    constructor(props) {
      super(props);
    }
  
    handleClickModulo1() {
      alert(this.props.alerts.m1 );
    }
  
    handleClickModulo2() {
      alert(this.props.alerts.m2);
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleClickModulo1.bind(this)}>Módulo 1</button>
          <button onClick={this.handleClickModulo2.bind(this)}>Módulo 2</button>
        </div>
      );
    }
  }

export default Botones;