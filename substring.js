class SubstringExtractor {
  substr(str, start = 0, length) {
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

  getSubstring() {
    const substingInput = document.getElementById('substring-input').value;
    const copyButton = document.getElementById('copy-substring-output');
    if (substingInput === '') {
      document.getElementById('substring-error').innerText = 'Please enter a string.';
      return;
    }
    try {
      const substingOutput = this.substr(substingInput);
      document.getElementById('substring-output').innerText = substingOutput;
      copyButton.style.display = 'inline';
      document.getElementById('copy-substring-output').classList.remove('hidden');
      document.getElementById('substring-error').innerText = '';
      localStorage.setItem('substringOutput', substingOutput);
      localStorage.setItem('substringInput', substingInput);
    } catch (error) {
      document.getElementById('substring-error').innerText = error.message;
      copyButton.style.display = 'none'; 
    }
  }

  resetSubstring() {
    document.getElementById('substring-input').value = '';
    document.getElementById('substring-output').innerText = '';
    document.getElementById('copy-substring-output').classList.add('hidden');
    document.getElementById('substring-error').innerText = '';
    localStorage.setItem('substringOutput', '');
    localStorage.setItem('substringInput', '');
  }
}

export default SubstringExtractor;