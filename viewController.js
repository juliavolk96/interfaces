class ViewController {
  initialize() {
    // Restore values from localStorage for input fields
    document.getElementById('dna-input').value = localStorage.getItem('dnaInput') || '';
    document.getElementById('palindrome-input').value = localStorage.getItem('palindromeInput') || '';
    document.getElementById('substring-input').value = localStorage.getItem('substringInput') || '';

    // Hide output copy buttons initially
    document.getElementById('copy-rna-output').style.display = 'none';
    document.getElementById('copy-palindrome-output').style.display = 'none';
    document.getElementById('copy-substring-output').style.display = 'none';

    // Add event listeners for copy buttons
    document.getElementById('copy-rna-output').addEventListener('click', this.copyToClipboard.bind(this));
    document.getElementById('copy-palindrome-output').addEventListener('click', this.copyToClipboard.bind(this));
    document.getElementById('copy-substring-output').addEventListener('click', this.copyToClipboard.bind(this));
  }

  // Copy text
  copyToClipboard(event) {
    const buttonElement = event.target.parentNode;
    const outputElementId = buttonElement.id.replace('copy-', '');
    const outputText = document.getElementById(outputElementId).innerText;
    navigator.clipboard.writeText(outputText).then(function() {
      console.log('Copying to clipboard was successful!');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }

  // DNA input processing
  processDnaInput() {
    const dnaInput = document.getElementById('dna-input').value;
    const copyButton = document.getElementById('copy-rna-output');
    if (dnaInput === '') {
      document.getElementById('dna-error').innerText = 'Please enter a DNA sequence.';
      return;
    }
    try {
      const rnaOutput = window.dnaTranscriber.convertDnaToRna(dnaInput);
      document.getElementById('rna-output').innerText = rnaOutput;
      copyButton.style.display = 'inline';
      copyButton.classList.remove('hidden');
      document.getElementById('dna-error').innerText = '';
      localStorage.setItem('rnaOutput', rnaOutput);
      localStorage.setItem('dnaInput', dnaInput);
    } catch (error) {
      document.getElementById('dna-error').innerText = error.message;
      copyButton.style.display = 'none';
      copyButton.classList.add('hidden');
    }
  }

  resetDnaInput() {
    document.getElementById('dna-input').value = '';
    document.getElementById('rna-output').innerText = '';
    const copyButton = document.getElementById('copy-rna-output');
    copyButton.style.display = 'none';
    copyButton.classList.add('hidden');
    document.getElementById('dna-error').innerText = '';
    localStorage.setItem('rnaOutput', '');
    localStorage.setItem('dnaInput', '');
  }

  // Palindrome checking
  checkPalindrome() {
    const palindromeInput = document.getElementById('palindrome-input').value;
    const copyButton = document.getElementById('copy-palindrome-output');
    if (palindromeInput === '') {
      document.getElementById('palindrome-error').innerText = 'Please enter a string.';
      return;
    }
    try {
      const palindromeOutput = window.palindromeChecker.isPalindrome(palindromeInput);
      document.getElementById('palindrome-output').innerText = palindromeOutput;
      copyButton.style.display = 'inline';
      copyButton.classList.remove('hidden');
      document.getElementById('palindrome-error').innerText = '';
      localStorage.setItem('palindromeOutput', palindromeOutput);
      localStorage.setItem('palindromeInput', palindromeInput);
    } catch (error) {
      document.getElementById('palindrome-error').innerText = error.message;
      copyButton.style.display = 'none';
      copyButton.classList.add('hidden');
    }
  }

  resetPalindrome() {
    document.getElementById('palindrome-input').value = '';
    document.getElementById('palindrome-output').innerText = '';
    const copyButton = document.getElementById('copy-palindrome-output');
    copyButton.style.display = 'none';
    copyButton.classList.add('hidden');
    document.getElementById('palindrome-error').innerText = '';
    localStorage.setItem('palindromeOutput', '');
    localStorage.setItem('palindromeInput', '');
  }

  // Getting a substring
  getSubstring() {
    const substringInput = document.getElementById('substring-input').value;
    const start = parseInt(document.getElementById('start-input').value);
    const copyButton = document.getElementById('copy-substring-output');
    
    if (substringInput === '') {
      document.getElementById('substring-error').innerText = 'Please enter a string.';
      return;
    }
    
    if (isNaN(start) || start < 0 || start >= substringInput.length) {
      document.getElementById('substring-error').innerText = 'Please enter a valid start position.';
      return;
    }
    
    try {
      const substringOutput = window.substringExtractor.getSubstring(substringInput, start);
      document.getElementById('substring-output').innerText = substringOutput;
      copyButton.style.display = 'inline';
      copyButton.classList.remove('hidden');
      document.getElementById('substring-error').innerText = '';
      localStorage.setItem('substringOutput', substringOutput);
      localStorage.setItem('substringInput', substringInput);
    } catch (error) {
      document.getElementById('substring-error').innerText = error.message;
      copyButton.style.display = 'none';
      copyButton.classList.add('hidden');
    }
  }

  resetSubstring() {
    document.getElementById('substring-input').value = '';
    document.getElementById('start-input').value = '';
    document.getElementById('substring-output').innerText = '';
    const copyButton = document.getElementById('copy-substring-output');
    copyButton.style.display = 'none';
    copyButton.classList.add('hidden');
    document.getElementById('substring-error').innerText = '';
    localStorage.setItem('substringOutput', '');
    localStorage.setItem('substringInput', '');
  }
}

export default ViewController;