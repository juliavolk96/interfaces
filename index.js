import DnaTranscriber from "./geneticConvertation.js";
import PalindromeChecker from "./palindrome.js";
import SubstringExtractor from "./substring.js";

window.dnaTranscriber = new DnaTranscriber();
window.palindromeChecker = new PalindromeChecker();
window.substringExtractor = new SubstringExtractor();

window.onload = function() {
  document.getElementById('dna-input').value = localStorage.getItem('dnaInput') || '';
  document.getElementById('palindrome-input').value = localStorage.getItem('palindromeInput') || '';
  document.getElementById('substring-input').value = localStorage.getItem('substringInput') || '';

  document.getElementById('copy-rna-output').style.display = 'none';
  document.getElementById('copy-palindrome-output').style.display = 'none';
  document.getElementById('copy-substring-output').style.display = 'none';
};

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Copying to clipboard was successful!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}

document.getElementById('copy-rna-output').addEventListener('click', function() {
  const rnaOutput = document.getElementById('rna-output').innerText;
  copyToClipboard(rnaOutput);
});

document.getElementById('copy-palindrome-output').addEventListener('click', function() {
  const palindromeOutput = document.getElementById('palindrome-output').innerText;
  copyToClipboard(palindromeOutput);
});

document.getElementById('copy-substring-output').addEventListener('click', function() {
  const substringOutput = document.getElementById('substring-output').innerText;
  copyToClipboard(substringOutput);
});