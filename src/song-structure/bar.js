class Bar {
  constructor(line) {
    try {
      if (typeof line === 'string') {
        this.line = line;
      } else {
        throw new BarException('Bar variable does not consist of a string.');
      }
    } catch (e) {
      console.error(e);
    }
  }
  getLine() {
    return this.line;
  }
}
