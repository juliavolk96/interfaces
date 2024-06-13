class SubstringExtractor {
  getSubstring(str, start = 0, length) {
    if (str == null) {
      throw new Error('Argument cannot be null or undefined');
    }

    if (length === undefined) {
      length = str.length;
    }

    if (start < 0) {
      start = str.length + start;
    }

    if (start < 0) {
      start = 0;
    }

    if (length < 0) {
      length = 1;
    }

    if (start > str.length) {
      return '';
    }

    let end = start + length;

    if (end > str.length) {
      end = str.length;
    }

    let result = '';

    for (let i = start; i < end; i++) {
      result += str[i];
    }

    return result;
  }
}

export default SubstringExtractor;