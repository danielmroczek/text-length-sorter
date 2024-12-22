export default class Sorter {
  constructor(fn, elements) {
    this.fn = fn;
    this.elements = elements;
  }

  #compare(a, b) {
    return this.computed.get(a) - this.computed.get(b);
  }


  #sortAsc() {
    return this.elements.sort((a, b) => this.#compare(a, b));
  }

  #sortDesc() {
    return this.elements.sort((a, b) => this.#compare(b, a));
  }

  #sortHourglass() {
    const sorted = this.#sortAsc();
    const [odd, even] = this.#splitArrayByIndex(sorted);
    return [...odd.reverse(), ...even];
  }

  #sortGaussian() {
    const sorted = this.#sortAsc();
    const [odd, even] = this.#splitArrayByIndex(sorted);
    return [...odd, ...even.reverse()];
  }

  #splitArrayByIndex(arr) {
    return arr.reduce((acc, val, index) => {
        acc[index % 2].push(val);
        return acc;
    }, [[], []]);
  }

  #precomputeValues() {
    this.computed = new Map();
    new Set(this.elements).forEach(element => {
      this.computed.set(element, this.fn(element));
    });
  }

  sort(direction = 'asc') {
    this.#precomputeValues();

    switch(direction) {
      case 'asc':
        return this.#sortAsc();
      case 'desc':
        return this.#sortDesc();
      case 'hourglass':
        return this.#sortHourglass();
      case 'gaussian':
        return this.#sortGaussian();
      
    }

  }
}