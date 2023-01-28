const m = require("./mergesortedarrays");

describe("Helper functions", () => {
  test("pops element from array and returns popped element", () => {
    let input = [1, 2, 3];
    expect(m.popElement(input)).toBe(1);
    expect(input).toStrictEqual([2, 3]);
  });
  test("returns true for isEmpty on array with no elements", () => {
    expect(m.isEmpty([])).toBe(true);
  });
  test("returns false for isEmpty for array with 1 element", () => {
    expect(m.isEmpty([1])).toBe(false);
  });
  test("appends elements to array [1,2,3] from array [5,6]", () => {
    let input = [1, 2, 3];
    m.addToEnd(input, [5, 6]);
    expect(input).toStrictEqual([1, 2, 3, 5, 6]);
  });
  test("returns top element as 3 for array [3,2,1]", () => {
    expect(m.getTopElement([3, 2, 1])).toBe(3);
  });
  test("removes all elements from input array [1,2,3]", () => {
    let input = [1, 2, 3];
    expect(m.emptyArray(input));
    expect(input).toStrictEqual([]);
  });
});

describe("Merge arrays", () => {
  test("returns [1,3,14,18,20,25,30,30,31] after merging [1,18,25,30] and [3,14,20,30,31]", () => {
    expect(
      m.mergeSortedArrays([1, 18, 25, 30], [3, 14, 20, 30, 31])
    ).toStrictEqual([1, 3, 14, 18, 20, 25, 30, 30, 31]);
  });
});
