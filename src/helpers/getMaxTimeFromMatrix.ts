export const getMaxTimeFromMatrix = (timeMatrix: number[][]) => {
  const matrixWithoutDiagonals = timeMatrix.map((innerArray, index) =>
    innerArray.filter((_, innerIndex) => innerIndex !== index)
  ); //Here we extract the values that match index with the parent, for example values in [0][0], [1][1], [2][2], and so on, are not need so we take em out from the array

  const flattenedMatrixWithoutDiagonals = matrixWithoutDiagonals.flat(); //We turn the matrix into a plain array

  const maxTime = flattenedMatrixWithoutDiagonals.reduce((lastMax, value) => {
    return value > lastMax ? value : lastMax;
  }, -Infinity);

  return maxTime;
};
