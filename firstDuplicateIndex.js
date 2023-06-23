function indexOfFirstDuplicate(arr) {
  const seen = {};
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const value = arr[i];
    if (seen[value] !== undefined) {
      return i;
    }
    seen[value] = true;
  }

  return -1; // No duplicates found
}

console.log(indexOfFirstDuplicate([5, 17, 3, 1, 4, 17]));

//Time complexity: O(n)
//Space complexity: O(n)
