
/**
 * Get if is small device
 * @returns 
 */
 export function isSmallDevice (): boolean {
    return  window.matchMedia("only screen and (max-width: 760px)").matches;
 }


/**
 *  Get userAgent of a device
 * @returns Bundle of functions
 */
 export const userAgent = () => {
    return {
        Android: () => navigator.userAgent.match(/Android/i),
        BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
        iOS:() => navigator.userAgent.match(/iPhone|iPad|iPod/i),
        Opera: () => navigator.userAgent.match(/Opera Mini/i),
        Windows: () => navigator.userAgent.match(/IEMobile/i),
    }
};

/**
 * Get if is mobile
 * @returns true | false
 */
export const isMobile = () => userAgent().Android || userAgent().BlackBerry || userAgent().iOS || userAgent().Opera || userAgent().Windows;

    
