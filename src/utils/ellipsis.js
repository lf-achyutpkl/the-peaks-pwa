const truncate = (input, maxLength = 50) =>
  input.length > maxLength ? `${input.substring(0, maxLength)}...` : input;

export { truncate };
