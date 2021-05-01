import { toHex } from "../data/GTD_NumericStyles.js";

/**
 * Convert rgb values to HEX
 * @param {*} r - Red color
 * @param {*} g - Green color
 * @param {*} b - Blue color
 * @returns HEX value of a color.
 */
export const rgbToHex = (r, g, b) => {
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

/**
 * Convert HEX colors to RGB
 * @param {*} hex 
 * @returns RGB value of HEX color
 */
export const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  