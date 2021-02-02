const generateRandomArray: Function = (
  size: number = numOfBars,
  low = lowerBound,
  up = upperBound
): number[] => {
  const array: number[] = [];

  for (let i = 0; i < size; i++)
    array.push(Math.floor(Math.random() * (up - low) + low));

  return array;
};

const setup: Function = (): void => {
  const container = document.querySelector(".container") as HTMLDivElement;

  if (container.innerHTML) container.innerHTML = "";

  container.style.height = `${upperBound * heightOfOneUnit}rem`;

  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div") as HTMLDivElement;

    bar.style.margin = "0.05rem";
    bar.style.width = `${width}rem`;
    bar.style.height = `${array[i] * heightOfOneUnit}rem`;
    bar.style.display = "inline-block";
    bar.style.backgroundColor = barBgColor;
    bar.style.borderRadius = "5px";
    bar.style.border = `1px solid ${barBorderColor}`;

    container.appendChild(bar);
  }
};

const drawBars: Function = (
  low: number = -1,
  high: number = -1,
  idx: number = -1
): void => {
  const allBars = document.querySelectorAll(".container div") as NodeListOf<
    HTMLDivElement
  >;

  for (let i = 0; i < array.length; i++) {
    if (i === low) allBars[i].style.backgroundColor = lowColor;
    else if (i === high) allBars[i].style.backgroundColor = highColor;
    else if (i === idx) allBars[i].style.backgroundColor = idxColor;
    else allBars[i].style.backgroundColor = barBgColor;

    allBars[i].style.height = `${array[i] * heightOfOneUnit}rem`;
  }
};

const delay = () => new Promise((res) => setTimeout(res, delayDuration));

const swap: Function = (i: number, j: number): void => {
  const temp: number = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const bubbleSort: Function = async () => {
  let isSwap: boolean = true;
  let lastIdx = array.length - 1;

  while (isSwap) {
    isSwap = false;

    for (let i = 1; i <= lastIdx; i++) {
      drawBars(i - 1, lastIdx, i);
      await delay();

      if (array[i] < array[i - 1]) {
        isSwap = true;

        swap(i, i - 1);

        drawBars(i, lastIdx, i - 1);
        await delay();
      }
    }

    lastIdx -= 1;
  }
};

const insertionSort: Function = async () => {
  let currentIdx: number;

  for (let i = 1; i < array.length; i++) {
    currentIdx = i;

    for (let j = i - 1; j >= 0; j--) {
      drawBars(j, currentIdx, i);
      await delay();

      if (array[i] < array[j]) {
        swap(i, j);

        drawBars(i, currentIdx, j);
        await delay();

        i -= 1;
      }
    }

    i = currentIdx;
  }
};

const selectionSort: Function = async () => {
  let idx: number = 0;
  let minIdx: number = 0;

  while (idx < array.length - 1) {
    await delay();

    minIdx = idx;

    for (let i = idx; i < array.length; i++) {
      drawBars(idx, minIdx, i);
      await delay();

      if (array[minIdx] > array[i]) {
        minIdx = i;

        drawBars(idx, minIdx, i);
        await delay();
      }
    }

    swap(idx, minIdx);

    drawBars(minIdx, idx);

    idx += 1;
  }
};

const partition: Function = async (low: number, high: number) => {
  let i: number = low;
  let j: number = low - 1;

  while (i < high) {
    await delay();

    if (array[i] < array[high]) {
      j += 1;

      drawBars(j, high, i);
      await delay();

      swap(i, j);

      drawBars(i, high, j);
      await delay();
    }

    drawBars(j, high, i);

    i += 1;
  }

  drawBars(low, high, j + 1);
  await delay();

  swap(j + 1, high);

  drawBars(low, j + 1, high);

  return j + 1;
};

const quickSort: Function = async (
  low: number = 0,
  high: number = array.length - 1
) => {
  if (low >= high) return;

  const pivot = await partition(low, high);

  await quickSort(low, pivot - 1);
  await quickSort(pivot + 1, high);
};

const reheapUp: Function = async (position: number) => {
  if (position > 0) {
    let parent: number = Math.floor((position - 1) / 2);

    if (array[position] > array[parent]) {
      await delay();
      drawBars(parent, position);

      swap(position, parent);

      await delay();
      drawBars(position, parent);

      await reheapUp(parent);
    }
  }
};

const reheapDown: Function = async (position: number, lastPosition: number) => {
  let leftChild: number = 2 * position + 1;
  let rightChild: number = 2 * position + 2;
  let largeChild: number = leftChild;

  drawBars(position, lastPosition);
  await delay();

  if (leftChild <= lastPosition) {
    if (rightChild <= lastPosition && array[rightChild] > array[leftChild])
      largeChild = rightChild;

    if (array[largeChild] > array[position]) {
      swap(position, largeChild);

      await reheapDown(largeChild, lastPosition);
    }
  }
};

const buildHeap: Function = async () => {
  for (let i = 1; i < array.length; i++) await reheapUp(i);
};

const heapSort: Function = async () => {
  await buildHeap();

  for (let i = array.length - 1; i > 0; i--) {
    drawBars(0, i);
    await delay();

    swap(0, i);

    drawBars(i, 0);
    await delay();

    await reheapDown(0, i - 1);
  }
};

const generateNew: Function = () => {
  if (!isStart || isDone) {
    isReset = true;
    isStart = false;
    isDone = false;

    array = generateRandomArray(numOfBars, lowerBound, upperBound);

    setup();
  }
};

let width: number; // Width of a bar in rem
let numOfBars: number; // Number of bars
let delayDuration: number;

const heightOfOneUnit: number = 0.3; // Height of one unit of bar's height in rem

const lowerBound: number = 0; // Lower bound of the range for sorting
const upperBound: number = 100; // Upper bound of the range for sorting

const barBgColor = "rgb(0, 0, 255)"; // Background color of bars
const barBorderColor = "rgb(0, 0, 0)"; // Border color of bars
const lowColor = "rgb(255, 0, 0)";
const highColor = "rgb(0, 255, 0)";
const idxColor = "rgb(255, 255, 0)";

let array: number[] = [];

let isReset: boolean = true;
let isStart: boolean = false;
let isDone: boolean = false;

const main: Function = (): void => {
  const sortingAlgorithm = document.querySelector(
    "select"
  ) as HTMLSelectElement;
  const numberOfBars = document.querySelector("#numBars") as HTMLInputElement;
  const speed = document.querySelector("#speed") as HTMLInputElement;

  numberOfBars.value = `${Math.floor(Number(numberOfBars.max) / 4)}`;

  speed.value = `${Number(speed.max)}`;

  numOfBars = Number(numberOfBars.value);
  width = (Number(numberOfBars.max) * 0.2) / numOfBars;
  delayDuration = Number(speed.max) - Number(speed.value);

  array = generateRandomArray(numOfBars, lowerBound, upperBound);

  setup();

  document.querySelector(".startBtn").addEventListener("click", async () => {
    if (isReset || isDone) {
      isReset = false;
      isStart = true;

      const startTime: number = new Date().getTime();

      if (sortingAlgorithm.value == "Bubble sort") await bubbleSort();
      if (sortingAlgorithm.value == "Insertion sort") await insertionSort();
      if (sortingAlgorithm.value == "Selection sort") await selectionSort();
      if (sortingAlgorithm.value == "Quick sort") await quickSort();
      if (sortingAlgorithm.value == "Heap sort") await heapSort();

      drawBars();

      isDone = true;

      const endTime: number = new Date().getTime();

      console.log(
        `Duration of ${sortingAlgorithm.value}: ${
          (endTime - startTime) / 1000
        }s`
      );
    }
  });

  document.querySelector(".generateNewBtn").addEventListener("click", () => {
    generateNew();
  });

  numberOfBars.addEventListener("input", () => {
    numOfBars = Number(numberOfBars.value);
    width = (200 * 0.2) / numOfBars;

    generateNew();
  });

  speed.addEventListener("input", () => {
    delayDuration = Number(speed.max) - Number(speed.value);
  });
};

main();
