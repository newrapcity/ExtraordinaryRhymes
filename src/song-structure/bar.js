class Bar {
  constructor(line) {
    if (typeof line === 'string') {
      this.line = line;
    } else {
      throw new BarException('Bar variable does not consist of a string.');
    }
  }
  getLine() {
    return this.line;
  }
}
