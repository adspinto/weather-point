import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const guidelineBaseWidth = 360;

// const guidelineBaseHeight = 680;

export const scale = (size: number) => {
  if (width < height) {
    return (width / guidelineBaseWidth) * size;
  }
  return size;
};

export const scaleImage = (size: number, type: string) => {
  //used when image got from XD have max resolution
  if (type === 'height') {
    return (size * height) / 2340;
  }
  return (size * width) / 1080;
};

export function range(start, end, step = 1) {
  // Test that the first 3 arguments are finite numbers.
  // Using Array.prototype.every() and Number.isFinite().
  const allNumbers = [start, end, step].every(Number.isFinite);
  // Throw an error if any of the first 3 arguments is not a finite number.
  if (!allNumbers) {
    throw new TypeError('range() expects only finite numbers as arguments.');
  }
  // Ensure the step is always a positive number.
  if (step <= 0) {
    throw new Error('step must be a number greater than 0.');
  }
  // When the start number is greater than the end number,
  // modify the step for decrementing instead of incrementing.
  if (start > end) {
    step = -step;
  }
  // Determine the length of the array to be returned.
  // The length is incremented by 1 after Math.floor().
  // This ensures that the end number is listed if it falls within the range.
  const length = Math.floor(Math.abs((end - start) / step)) + 1;
  // Fill up a new array with the range numbers
  // using Array.from() with a mapping function.
  // Finally, return the new array.
  return Array.from(Array(length), (x, index) => start + index * step);
}
