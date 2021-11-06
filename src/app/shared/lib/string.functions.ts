export class StringFn {
  static toKebabCase(value: string): string {
    return value
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
      .toLowerCase();
  }

  static toUpperCamelCase(value: string): string {
    return value
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (leftTrim) => leftTrim.toUpperCase())
      .replace(/[\s]*[-]*/g, '');
  }
}
