import React from "react";
import Botones from "./Botones";
const studentName = "Sinthia";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };
// creamos una variable para guardar los items del array que mostraremos en la ul, esta esta siendo llamada en la ulmediante llaves
let skillItems = techSkills.map((skill, index) => {
  return <li key={index}>{skill}</li>;
});
// esta es una sintaxis de funcion en react en Botones usamos de clase
export default function Bienvenido() {
  // el código de tu componente acá
  // creamos una variable alert donde guardamos en un objeto los mensajes que mostraremos en los alert
  let alerts= {
     m1: "Aprobado",
     m2: "En curso"
     };
  return(
    <div>
      <h1>Soy Henrry!</h1>
      <h3>{studentName}</h3>
      <ul>{skillItems}</ul>
      <Botones alerts={alerts}  />

    </div>
  );
}
// dentro de la etiqueta Botones pasamos la variable que creamos con los mensajes que mostraremos en los alerts
// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
