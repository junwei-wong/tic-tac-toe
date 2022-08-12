export const box1Win = (box1, box2, box3, box4, box7) => {
  if (box1 === box2 && box2 === box3) return true;
  else if (box1 === box4 && box4 === box7) return true;
  return false;
};

export const box2Win = (box1, box2, box3, box5, box8) => {
  if (box1 === box2 && box2 === box3) return true;
  else if (box1 === box5 && box5 === box8) return true;
  return false;
};

export const box3Win = (box1, box2, box3, box6, box8) => {
  if (box1 === box2 && box2 === box3) return true;
  else if (box1 === box6 && box6 === box8) return true;
  return false;
};

export const box4Win = (box1, box4, box5, box6, box7) => {
  if (box1 === box2 && box2 === box3) return true;
  else if (box1 === box4 && box4 === box7) return true;
  return false;
};

export const box5Win = (box1, box2, box3, box4, box7) => {
  if (box1 === box2 && box2 === box3) return true;
  else if (box1 === box4 && box4 === box7) return true;
  return false;
};

export const box6Win = (box1, box2, box3, box4, box7) => {
  if (box1 === box2 && box2 === box3) return true;
  else if (box1 === box4 && box4 === box7) return true;
  return false;
};

export const box7Win = (box1, box2, box3, box4, box7) => {
  if (box1 === box2 && box2 === box3) return true;
  else if (box1 === box4 && box4 === box7) return true;
  return false;
};
export const box8Win = (box1, box2, box3, box4, box7) => {
  if (box1 === box2 && box2 === box3) return true;
  else if (box1 === box4 && box4 === box7) return true;
  return false;
};
export const box9Win = (box1, box2, box3, box4, box7) => {
  if (box1 === box2 && box2 === box3) return true;
  else if (box1 === box4 && box4 === box7) return true;
  return false;
};
