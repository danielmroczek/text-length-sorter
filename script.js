import { default as Alpine } from 'https://cdn.jsdelivr.net/npm/alpinejs@3.15.3/+esm';
import Sorter from './sorter.js';

// Expose Alpine globally for devtools (optional but handy) and register component.
window.Alpine = Alpine;

Alpine.data('textSorter', () => ({
    inputText: '',
    selectedFont: 'Arial, sans-serif',
    sortDirection: 'desc', // Default to descending order
    fonts: ['Arial, sans-serif', 'Verdana, sans-serif', 'Times New Roman, serif', 'Calibri, sans-serif', 'Cambria, serif'],
    orders: [
      { id: 'asc', name: 'Ascending' },
      { id: 'desc', name: 'Descending' },
      { id: 'hourglass', name: 'Hourglass' },
      { id: 'gaussian', name: 'Gaussian' }
    ],
    sortedLines: [],

    init() {
      this.updateDisplay();
    },

    updateDisplay() {
      // Defer until DOM updates finish so measurements are accurate.
      this.$nextTick(() => {
        const lines = this.inputText.split('\n');
        const sorter = new Sorter(line => this.getLineLength(line), lines);
        this.sortedLines = sorter.sort(this.sortDirection);
      });
    },

    getLineLength(line) {
      const displayElement = this.$refs.display;
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.whiteSpace = 'nowrap';
      tempSpan.style.position = 'absolute';
      tempSpan.textContent = line;
      displayElement.appendChild(tempSpan);
      const width = tempSpan.offsetWidth;
      tempSpan.remove();
      return width;
    },

    async copyText() {
      const textToCopy = this.sortedLines.join('\n');
      return navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert('Text copied to clipboard!');
        })
        .catch((error) => {
          console.error('Failed to copy text: ', error);
        });
    }
  }));

Alpine.start();