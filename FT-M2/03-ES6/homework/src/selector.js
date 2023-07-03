// esta funcion recibe un selector y devuelve un array con los elementos que matchean con el selector y se lo pasa a la function $ y este lo muestra

var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // // Función auxiliar para recorrer el árbol del DOM de forma recursiva
  // var traverse = function (element) {
  //   // Comprueba si el elemento actual coincide con la función de comparación
  //   if (matchFunc(element)) {
  //     resultSet.push(element);
  //   }

  //   // Recorre los hijos del elemento actual
  //   var child = element.firstElementChild;
  //   while (child) {
  //     traverse(child);
  //     child = child.nextElementSibling;
  //   }
  // };

  // // Comienza el recorrido desde el elemento de inicio
  // traverse(startEl);

  // // Devuelve el conjunto de resultados
  // return resultSet;

//! con metodo ecma6 y recursividad y spread operator para unir los arrays de los hijos con el padre y asi sucesivamente
if(matchFunc(startEl)) resultSet.push(startEl);
for(const child of startEl.children){
  const childrenResults= traverseDomAndCollectElements(matchFunc, child);
  resultSet = [...resultSet, ...childrenResults];

}
return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí con un bucle switch/case
  // var firstChar = selector.charAt(0);

  // switch (firstChar) {
  //   case "#":
  //     Selector de ID
  //     return "id";
  //   case ".":
  //     Selector de clase
  //     return "class";
  //   default:
  //     if (selector.includes(".")) {
  //       Selector de etiqueta y clase
  //       return "tag.class";
  //     } else {
  //       Selector de etiqueta
  //       return "tag";
  //     }
  // } 
// con metodo ecma6
// *si el selector comienza con # retorname id y asi con los otros casos, como lo que nos retorna e sun array ty nosotros sabemos eso tratamos el caso como un array y nos quedamos con el primer elemento
if(selector[0] === "#") return "id";
if(selector[0] === ".") return "class";
if(selector.includes(".")) return "tag.class";
return "tag";

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

// esta function es llamada por $ para detectar el tipo de selector y regresa un matchFunction que lo que hace es ver si el selector coinside con alguno qeu se encuentra en el dom y si es asi devuelve TRUE y si no FALSE
var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
//! forma de hacerlo con recursividad en la function matchFunctionMaker
  // if (selectorType === "id") {
  //   matchFunction = function (element) {
  //     return element.id === selector.slice(1);
  //   };
  // } else if (selectorType === "class") {
  //   matchFunction = function (element) {
  //     return element.classList.contains(selector.slice(1));
  //   };
  // } else if (selectorType === "tag.class") {
  //   var tag = selector.split(".")[0];
  //   var className = selector.split(".")[1];
    
  //   matchFunction = function (element) {
  //     return element.tagName === tag.toUpperCase() && element.classList.contains(className);
  //   };
  // } else if (selectorType === "tag") {
  //   matchFunction = function (element) {
  //     return element.tagName === selector.toUpperCase();
  //   };
 // }
// con metodo ecma6 decimos: matchFunction es igual a una funcion (elemeto) => si el # mas el id del elemento es igual al selector que nos pasan como parametro entonces devuelve true y si no false
if(selectorType === "id"){
  matchFunction = (element) =>{
    if(`#${element.id}` === selector) return true;
    return false;
  };
 } else if(selectorType === "class"){
    matchFunction = (element) =>{
      //*agregamos una variable className que recorre el elemento  para que nos devuelva el nombre de la clase ya que un elemeto puede tener varias clases por eso hacemos un for of
      for(const className of element.classList){
        if(`.${className}` === selector) return true;
      }
      return false;
    };
 } else if(selectorType === "tag.class"){
  matchFunction = (element) =>{
  //utilizamos una propiedad ecma6 que es cuando conocemos lo que hay en el arraylo guardamos en variable y lo desestructuramos en dos variables tag y className utiliza el split . para separar el tag de la clase, es decir esta propiedad ecma 6 divide el SELECTOR  en dos partes y lo guarda en dos variables
  const [tag,className] = selector.split(".");
// chequear que el tag corresponda con el elemento y que la clase este incluida en el elemento
return matchFunctionMaker(tag)(element) && matchFunctionMaker(`.${className}`)(element);

  };

 }else if(selectorType === "tag"){
  matchFunction = (element) =>{
    if(element.tagName.toLowerCase()===selector) return true;
    return false;
  };
 }
  return matchFunction;
};

// el usario llama a la fucntion $ y le pasa un selector sea (#id, .class,p...tags ) como parametro y este llama a matchFunctionMaker con el selector como parametro y este detecta el tipo de selector
var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
