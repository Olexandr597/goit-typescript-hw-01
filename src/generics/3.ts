function merge<T extends object, U extends Object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}
