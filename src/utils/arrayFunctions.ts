export function interleave<T, U>(arr: T[], val: U): (T | U)[] {
  return arr.flatMap((x) => [x, val]).slice(0, -1);
}
