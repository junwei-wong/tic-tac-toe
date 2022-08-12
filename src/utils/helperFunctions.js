export const checkWin = (box1, box2, box3) => {
  return !!(box1 === box2 && box2 === box3);
};
