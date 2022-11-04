/**
 * Removes the final character from a string
 * @param str The string to remove the final character from
 * @returns The resultant string
 */
function removeFinalCharacter(str: string): string {
  return str.slice(0, str.length - 1);
}

export default removeFinalCharacter;
