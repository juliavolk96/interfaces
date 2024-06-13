import DnaTranscriber from "./geneticConvertation.js";
import PalindromeChecker from "./palindrome.js";
import SubstringExtractor from "./substring.js";
import ViewController from "./viewController.js";

// Create instances of classes 
window.dnaTranscriber = new DnaTranscriber();
window.palindromeChecker = new PalindromeChecker();
window.substringExtractor = new SubstringExtractor();
window.viewController = new ViewController();

window.onload = function() {
  window.viewController.initialize();
};