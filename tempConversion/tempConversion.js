const ftoc = function(degsF) {
  let toC = ((degsF - 32) * 5/9).toFixed(1);
  return parseFloat(toC);
}
//[°C] = ([°F] − 32) × ​5⁄9
ftoc(32); //0
ftoc(100); //37.8
ftoc(-100); //-73.3

const ctof = function(degsC) {
  let toF = (degsC * 9/5 + 32).toFixed(1);
  return parseFloat(toF);
}
//[°F] = [°C] × ​9⁄5 + 32
ctof(0); //32
ctof(73.2); //163.8
ctof(-10); //14
module.exports = {
  ftoc,
  ctof
}
