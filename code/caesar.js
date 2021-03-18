export const caesar = (str, shift) => {
  while (shift < 0) shift += 26;
  const cipher = str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        const newCode = ((code + shift - 65) % 26) + 65;
        return String.fromCharCode(newCode);
      } else if (code >= 97 && code <= 122) {
        const newCode = ((code + shift - 97) % 26) + 97;
        return String.fromCharCode(newCode);
      } else return char;
    })
    .join("");
  return cipher;
};
