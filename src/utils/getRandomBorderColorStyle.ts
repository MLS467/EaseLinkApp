export const getRandomBorderColorStyle = () => {
  const randomHexColor = () => {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, "0")}`;
  };

  const test = {
    borderWidth: 1,
    borderColor: randomHexColor(),
  };

  return test;
};
