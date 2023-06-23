function unique(arr) {
  const uniqueElements = new Set();
  const duplicates = new Set();

  for (const item of arr) {
    if (uniqueElements.has(item)) {
      uniqueElements.delete(item);
      duplicates.add(item);
    } else if (!duplicates.has(item)) {
      uniqueElements.add(item);
    }
  }

  return Array.from(uniqueElements);
}

console.log(unique(["apples", "oranges", "flowers", "apples"])); // returns ['oranges', 'flowers']
console.log(unique(["apples", "apples"])); // returns []
console.log(unique([1, 1, 1, 1, 1])); // returns []
