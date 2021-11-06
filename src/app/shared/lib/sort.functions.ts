export class SortFn {
  static sortObjectProperties(object: any) {
    return Object.keys(object)
      .sort()
      .reduce((result: any, key) => {
        result[key] = object[key];
        return result;
      }, {});
  }
}
