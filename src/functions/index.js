// Convert seconds to mm:ss format
export const lengthToMMSS = seconds => {
  const minutes = Math.floor(seconds / 60);
  let leftSeconds = seconds - minutes * 60;
  if (leftSeconds.toString().length === 1) {
    leftSeconds = `0${leftSeconds}`;
  }
  const result = `${minutes}:${leftSeconds}`;
  return result;
};
