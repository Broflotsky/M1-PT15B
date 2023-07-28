// console.log(6 / "3")
// console.log("2" * "3")
// console.log(4 + 5 + "px")
// console.log("$" + 4 + 5)
// console.log("4" - 2)
// console.log("4px" - 2)
// console.log(7 / 0)
// console.log({}[0])
// console.log(parseInt("09"))
// console.log(5 && 2)
// console.log(2 && 5)
// console.log(5 || 0)
// console.log(0 || 5)
// console.log([3] + [3] - [10])
// '3' + '3' => '33' - [10] => '33' - '10' => 33 - 10 => 23
// console.log(3 > 2 > 1)  //=> true > 1 => 1 > 1  => false


// console.log([] == ![])
// [] == false no puede
// [] ==  0  no puede
// '' == 0  no puede
// 0 == 0 true

var fullname = 'Juan Perez';
var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        },
    },
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test());