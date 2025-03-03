// This function sorts an array by the frequency of the elements and returns a copy of the array with duplicates removed, sorted in ascending order.
const _sortByFrequency = (array) => {
  // The frequency object is used to count the occurrences of each value in the input array.
  const frequency = {};

  // Populate the frequency object with the elements in lowercase
  for (const value of array) {
    const normalizedValue = value.toLowerCase();
    frequency[normalizedValue] = { count: 0, originalValue: value };
  }

  // Filter the array to leave only unique elements (case insensitive) and sort them
  return array
    .filter((value) => {
      const normalizedValue = value.toLowerCase();
      frequency[normalizedValue].count++;
      return frequency[normalizedValue].count === 1;
    })
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};

// This function transforms a collection of items into a sorted array of unique categories.
module.exports = (collection) => {
  // The categoryArray will hold all categories extracted from the collection.
  const categoryArray = [];

  // Go through all items of the collection.
  for (const item of collection.getAll()) {
    // Check if the item has a "category" property.
    if ("category" in item.data) {
      // Read the value of the category (which can be either an array or a single value).
      const categories = item.data.category;

      // If categories is an array, add all its elements to categoryArray.
      if (Array.isArray(categories)) {
        for (const category of categories) {
          categoryArray.push(category);
        }
      } else {
        // If categories is not an array, just add the value to categoryArray.
        categoryArray.push(categories);
      }
    }
  }

  // Sort the categories by frequency and return the sorted array.
  return _sortByFrequency(categoryArray);
};
