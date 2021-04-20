//@DEPENDENCIES
//none.

/**
 * Returns if something is empty
 * @param {*} e - The element 
 * @returns 
 */
 export const isEmpty = (object) => {

    if (object == null)       return true;
    if (object == undefined)  return true;
    if (object == "")         return true;
    if (object.length == 0)   return true;
  
    return false;
  }
  