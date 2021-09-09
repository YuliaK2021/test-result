// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    let chunks = [],
      i = 0,
      n = arr.length;

    while (i < n) {
      chunks.push(arr.slice(i, i += size));
    }

    return chunks;
  };