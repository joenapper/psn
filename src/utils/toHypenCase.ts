const toHyphenCase = (value: string) =>
  value.trim().replace(/ +/g, "-").toLowerCase();

export default toHyphenCase;
