class PalindromeChecker {
  isPalindrome(str) {
    if (str === null) {
      throw new Error('Argument cannot be null or undefined');
    }

    str = str.toString().toLowerCase().replace(/[-я0-9]/gi, '');

    if (str.length < 1) {
      return true;
    }

    if (str[0] !== str[str.length - 1]) {
      return false;
    }

    return this.isPalindrome(str.slice(1, str.length - 1));
  }
}

export default PalindromeChecker;