// camelCase
// PascalCase
// snake_case
// kebab-case
// read case
// Sentence case
// UPPER_CASE
class TextCase {
  static isCapital = text => text === text.toUpperCase();

  static camelToSentence = text => {
    let ii = text.length - 1;
    while (ii > 1) {
      const letter = text[ii];
      if (TextCase.isCapital(letter)) {
        text = text.replace(letter, ' ' + letter.toLowerCase());
      }
      ii--;
    }
    return text[0].toUpperCase() + text.slice(1);
  }
}
