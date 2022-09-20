"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function() {
  // Solo tiene el nodo principal
  if(!this.left && !this.right){
    return 1;
  }
  // Tiene solo un hijo
  if(!this.right){
    return 1 + this.left.size();
  }
  if(!this.left){
    return 1 + this.right.size();
  }
  //Tiene ambos hijos
  return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.insert = function(value) {
  // comparamos
  if(value > this.value){//derecha
    if(!this.right){ // no tengo nada
      this.right = new BinarySearchTree(value) // creo una nuena instancia en mi subArbol
    }else{ // tengo algo aca
      this.right.insert(value)
    }
  }else{//izquiera
    if(!this.left){ // no tengo nada
      this.left = new BinarySearchTree(value) // creo una nuena instancia en mi subArbol
    }else{ // tengo algo aca
      this.left.insert(value)
    }
  }

}

BinarySearchTree.prototype.contains = function(value) {
  // Se encuentra en el primer
  if(value === this.value) {
    return true;
  }
  
  if(value > this.value) { // Derecha
    if(!this.right) {
      return false;
    }
    // Recursion
    return this.right.contains(value);
  } else {
    if(!this.left) { // Izquierda
      return false;
    }
    // Recursion
    return this.left.contains(value);
  }

}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if( order === "in-order" || !order){
    // izquierda - nodo - derecha
    this.left && this.left.depthFirstForEach(cb, order);
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb, order);
  }
  else if(order === "pre-order"){
    // nodo - izquierda - derecha
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
  }else{
    // post-order
    // izquierda - derecha - nodo
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
    cb(this.value)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr) {
  if(!arr){
    var arr = [];
  }
  cb(this.value)
 this.left && arr.push(this.left);
 this.right && arr.push(this.right);
 arr.length && arr.shift().breadthFirstForEach(cb, arr)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
