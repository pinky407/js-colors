// define handler
const updateColor = () => {
  const r = parseInt(document.querySelector('#red').value)
  const g = parseInt(document.querySelector('#green').value)
  const b = parseInt(document.querySelector('#blue').value)
  const canvasElement = document.querySelector('#canvas')
  canvasElement.style.backgroundColor = `rgb(${r},${g},${b})`
  canvasElement.style.border = "thin solid black"
  document.getElementById("HEX").value = rgbToHex(r,g,b);
}

/*var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};*/

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}



// configure event listeners
document.querySelector('#red').addEventListener('click', updateColor)
document.querySelector('#blue').addEventListener('click', updateColor)
document.querySelector('#green').addEventListener('click', updateColor)
document.querySelector('#red').addEventListener('touchend', updateColor)
document.querySelector('#blue').addEventListener('touchend', updateColor)
rgbStr = Y.Color.fromArray([r,g,b], Y.Color.TYPES.RGB);
  hex.set('text', Y.one.toHex(rgbStr));


  updateColor() 
// call the handler 



