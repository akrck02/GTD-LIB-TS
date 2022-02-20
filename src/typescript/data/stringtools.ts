
/**
 * Converts a string to kebab-case.
 * @param text The string to convert.
 * @returns The converted string.
 */
export function toKebabCase(text : string) : string {
    return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Converts a string to camelCase.
 * @param text The string to convert.
 * @returns The converted string.
 */
export function toCamelCase(text : string) : string {
    return text.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Converts a string to PascalCase.
 * @param text The string to convert.
 * @returns The converted string.
 */
export function toPascalCase(text : string) : string {
    return text.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Converts a string to snake_case.
 * @param text The string to convert.
 * @returns The converted string.
 */
export function toSnakeCase(text : string) : string {
    return text.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}