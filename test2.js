// TEST 2
const decode = (encoded) =>
  encoded
    .split(".")
    .map(Number)
    .reduce((acc, num, index) => {
      const isDot = (index + 1) % 2 === 0;
      const bit = isDot ? "0" : "1";
      return acc + bit.repeat(num);
    }, "")
    .replace(/0+/g, ".")
    .replace(/1+/g, (match) => String(match.length - 1));
