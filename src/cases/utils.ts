export function toCamelCase(str: string): string {
    return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}
export function toPascalCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}