const truncate = (text: string) =>
  text.length > 120 ? text.slice(0, 120 - 1) + "..." : text;

export default truncate;
