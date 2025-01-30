/**
 * Adds an emoji prefix to a string based on the given ID.
 * 
 * @param {string} name - The original string to prefix.
 * @param {number} id - The ID used to determine the emoji.
 * @returns {string} The string with the emoji prefix added.
 */
export const addEmojiPrefix = (name: string, id: number): string => {
  const emoji = id % 2 === 0 ? "🔴" : "🔵";
  return `${emoji} ${name}`;
};
  
/**
 * Extracts the emoji prefix from a string if present.
 * 
 * @param {string} name - The string to extract the emoji prefix from.
 * @returns {string} The extracted emoji prefix or an empty string if not found.
 */
export const getEmojiPrefix = (name: string): string => {
  const emojiMatch = name.match(/^(🔴|🔵)\s/);
  return emojiMatch ? emojiMatch[0] : '';
};
  
/**
 * Combines an emoji prefix with a new name.
 * 
 * @param {string} currentName - The current name which may contain an emoji prefix.
 * @param {string} newName - The new name to be appended after the emoji prefix.
 * @returns {string} The combined name with the emoji prefix preserved.
 */
export const combineEmojiPrefixWithName = (currentName: string, newName: string): string => {
  const emojiPrefix = getEmojiPrefix(currentName);
  return `${emojiPrefix}${newName}`;
};