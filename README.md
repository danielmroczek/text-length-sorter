# Text Length Sorter

A web application that sorts text lines based on their visual length. Built with Vue.js and Bootstrap.

## Demo
Try it online: [Text Length Sorter](https://danielmroczek.github.io/text-length-sorter/)

## Project Origin
I once printed and hung a few lists of "important things" on my wall, like "albums I want to listen to" or "New Year’s resolutions". They looked flat and boring. Since they were on display, I figured I could make them more interesting by sorting the lines by length to form little "triangles". Doing that in Word turned out to be harder than I expected (or I just didn’t know how), so I built this tool to sort lists by line length instead. It works great for the formatting, but keeping those resolutions is a different story. 

## Features

- Sort text lines by visual length considering the selected font
- Multiple sorting options:
  - Ascending (shortest to longest)
  - Descending (longest to shortest)
  - Hourglass (alternating from outside in)
  - Gaussian (alternating from inside out)
- Font selection for accurate length measurement
- Dark mode support
- Copy sorted text to clipboard
- Responsive design

## Setup

1. Clone the repository
2. Open `index.html` in a web browser

## Usage

1. Select your desired font from the dropdown menu
2. Choose a sorting direction
3. Enter or paste your text in the left textarea
4. The sorted text will appear in the right panel
5. Click "Copy Text" to copy the sorted result to clipboard

## Technologies

- Vue.js 2
- Bootstrap 5
- ES6 Modules
