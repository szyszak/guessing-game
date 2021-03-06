export function pickRandomItems<T>(arr: T[], amount: number): T[] {
  const arrCopy = [...arr];
  const newArr = [];
  let length = arrCopy.length;

  while (newArr.length < amount) {
    const idx = Math.floor(Math.random() * length);

    newArr.push(arrCopy[idx]);
    arrCopy.splice(idx, 1);
    length--;
  }

  return newArr;
}
