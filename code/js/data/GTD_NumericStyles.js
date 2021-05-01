
/**
 * decimal to HEX converter
 * @param {*} number 
 * @returns hex value
 */
export const toHex = (number) => {
  var hex = number.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};
