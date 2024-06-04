class DnaTranscriber {
  constructor() {
    this.dnaToRnaMap = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' };
  }

  convertDnaToRna(dna) {
    this.#validateInput(dna);
    return dna.toUpperCase().split('').map(nucleotide => this.dnaToRnaMap[nucleotide]).join('');
  }

  #validateInput(dna) {
    if (dna === null) {
      throw new Error('Invalid input: input cannot be null');
    }
    if (dna === '') {
      return '';
    }
    if (typeof dna !== 'string') {
      throw new Error('Invalid input: input must be a string');
    }
    if (/[^ACGT]/.test(dna.toUpperCase())) {
      throw new Error('Invalid input: only ACGT are allowed');
    }
  }

  processInput() {
    const dnaInput = document.getElementById('dna-input').value;
    const copyButton = document.getElementById('copy-rna-output');
    if (dnaInput === '') {
      document.getElementById('dna-error').innerText = 'Please enter a DNA sequence.';
      return;
    }
    try {
      const rnaOutput = this.convertDnaToRna(dnaInput);
      document.getElementById('rna-output').innerText = rnaOutput;
      copyButton.style.display = 'inline';
      document.getElementById('copy-rna-output').classList.remove('hidden');
      document.getElementById('dna-error').innerText = '';
      localStorage.setItem('rnaOutput', rnaOutput);
      localStorage.setItem('dnaInput', dnaInput);
    } catch (error) {
      document.getElementById('dna-error').innerText = error.message;
      copyButton.style.display = 'none';
    }
  }

  reset() {
    document.getElementById('dna-input').value = '';
    document.getElementById('rna-output').innerText = '';
    document.getElementById('copy-rna-output').classList.add('hidden');
    document.getElementById('dna-error').innerText = '';
    localStorage.setItem('rnaOutput', '');
    localStorage.setItem('dnaInput', '');
  }
}

export default DnaTranscriber;