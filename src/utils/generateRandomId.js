export default function generateRandomId(length = 8) {
  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
  let result = ``;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.random() * characters.length);
  }

  return result;
}
