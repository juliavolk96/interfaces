class PalindromeChecker {
  isPalindrome(str) {
    if (str == null) {
      throw new Error('Argument cannot be null or undefined');
    }

    str = str.toString().toLowerCase().replace(/[^a-zа-я0-9]/gi, '');

    if (str.length < 1) {
      return true;
    }

    if (str[0] !== str[str.length - 1]) {
      return false;
    }

    return this.isPalindrome(str.slice(1, str.length - 1));
  }

  checkPalindrome() {
    const palindromeInput = document.getElementById('palindrome-input').value;
    const copyButton = document.getElementById('copy-palindrome-output');
    if (palindromeInput === '') {
      document.getElementById('palindrome-error').innerText = 'Please enter a string.';
      return;
    }
    try {
      const palindromeOutput = this.isPalindrome(palindromeInput);
      document.getElementById('palindrome-output').innerText = palindromeOutput;
      copyButton.style.display = 'inline';
      document.getElementById('copy-palindrome-output').classList.remove('hidden');
      document.getElementById('palindrome-error').innerText = '';
      localStorage.setItem('palindromeOutput', palindromeOutput);
      localStorage.setItem('palindromeInput', palindromeInput);
    } catch (error) {
      document.getElementById('palindrome-error').innerText = error.message;
      copyButton.style.display = 'none';
    }
  }

  resetPalindrome() {
    document.getElementById('palindrome-input').value = '';
    document.getElementById('palindrome-output').innerText = '';
    document.getElementById('copy-palindrome-output').classList.add('hidden');
    document.getElementById('palindrome-error').innerText = '';
    localStorage.setItem('palindromeOutput', '');
    localStorage.setItem('palindromeInput', '');
  }
}

export default PalindromeChecker;