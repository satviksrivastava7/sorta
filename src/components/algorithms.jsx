export const bubbleSort = async (
  array,
  setArray,
  setCurrent,
  setCompare,
  setSorted
) => {
  const arr = array.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      setCurrent(j);
      setCompare(j + 1);
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray(arr.slice());
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
    setSorted((prev) => [...prev, i]);
  }
  setSorted(arr.map((_, idx) => idx)); // Mark all as sorted
  return arr;
};

export const insertionSort = async (
  array,
  setArray,
  setCurrent,
  setCompare,
  setSorted
) => {
  const arr = array.slice();
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      setCurrent(i);
      setCompare(j);
      arr[j + 1] = arr[j];
      j = j - 1;
      setArray(arr.slice());
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    arr[j + 1] = key;
    setArray(arr.slice());
    await new Promise((resolve) => setTimeout(resolve, 50));
    setSorted((prev) => [...prev, i]);
  }
  setSorted(arr.map((_, idx) => idx)); // Mark all as sorted
  return arr;
};

export const selectionSort = async (
  array,
  setArray,
  setCurrent,
  setCompare,
  setSorted
) => {
  const arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      setCurrent(i);
      setCompare(j);
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    setArray(arr.slice());
    await new Promise((resolve) => setTimeout(resolve, 50));
    setSorted((prev) => [...prev, i]);
  }
  setSorted(arr.map((_, idx) => idx)); // Mark all as sorted
  return arr;
};
