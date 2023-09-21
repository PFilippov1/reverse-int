module.exports = function reverse (n) {
    let number =Math.abs(n).toString().split("").reverse().join("");
    console.log(+number)
    return +number

}



