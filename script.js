import Sorter from './sorter.js';

new Vue({
  el: '#app',
  data: {
    inputText: '',
    selectedFont: 'Arial, sans-serif',
    sortDirection: 'desc', // Default to descending order
    fonts: ['Arial, sans-serif', 'Verdana, sans-serif', 'Times New Roman, serif', 'Calibri, sans-serif', 'Cambria, serif'],
    orders: [{
      id: 'asc',
      name: 'Ascending'
    }, {
      id: 'desc',
      name: 'Descending'
    }, 
    {
      id: 'hourglass',
      name: 'Hourglass'
    }, 
    {
      id: 'gaussian',
      name: 'Gaussian'
    }
  ],
    sortedLines: []
  },
  methods: {
    updateDisplay() {
      // Update the display with the input text
      
      this.$nextTick(() => {
        const lines = this.inputText.split('\n');
        const sorter = new Sorter(this.getLineLength, lines);
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
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert('Text copied to clipboard!');
        })
        .catch((error) => {
          console.error('Failed to copy text: ', error);
        });
    }
  }
});