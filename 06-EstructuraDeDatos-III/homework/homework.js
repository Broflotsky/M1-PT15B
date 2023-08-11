'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
   según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
   hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
   // caso de corte
   // value > root => der
   // value < root => izq
   if (value > this.value) {
      if (this.right !== null) {
         this.right.insert(value)
      } else {
         this.right = new BinarySearchTree(value);
      }
   }

   if (value < this.value) {
      if (this.left !== null) {
         this.left.insert(value)
      } else {
         this.left = new BinarySearchTree(value);
      }
   }
}

BinarySearchTree.prototype.contains = function (value) {
   if (this.value === value) {
      return true
   }

   if (value > this.value) {
      if (this.right === null) {
         return false
      } else {
         return this.right.contains(value)
      }
   } else {
      if (this.left === null) {
         return false
      } else {
         return this.left.contains(value)
      }
   }
}

BinarySearchTree.prototype.size = function () {
   if (this.right === null && this.left === null) return 1;
   if (this.left !== null && this.right === null) return 1 + this.left.size(); // tiene izq y va a la izq
   if (this.right !== null && this.left === null) return 1 + this.right.size(); // tiene der y va a la der
   if (this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size() // tiene los 2
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   // pre-order => root - izq - der
   // in-order => izq - root - der
   // post-order => izq - der - root
   if (order === 'pre-order') {
      cb(this.value)
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
   } else if (order === 'post-order') {
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
      cb(this.value)
   } else { // Este seria nuestro caso in-order
      if (this.left !== null) this.left.depthFirstForEach(cb, order)
      cb(this.value)
      if (this.right !== null) this.right.depthFirstForEach(cb, order)
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
   // primero izquierda y luego derechas nivel por nivel
   // guardo en arreglo y consumo FIFO
   if (this.left !== null) {
      array.push(this.left)
   }
   if (this.right !== null) {
      array.push(this.right)
   }
   cb(this.value)
   if (array.length > 0) {
      array.shift().breadthFirstForEach(cb, array)
   }
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};

