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
}

export default DnaTranscriber;