# 🎨 Aesthetic Algorithm Visualizer

A beautiful, interactive web-based visualizer for sorting algorithms. Watch as bubble sort and selection sort algorithms animate in real-time with color-coded visual feedback.

## Features

- 🎯 **Real-time Algorithm Visualization** - Watch sorting algorithms execute step-by-step with smooth animations
- 🎨 **Color-Coded States** - Visual indicators show what each bar is doing:
  - **Cyan** - Default/unsorted
  - **Red** - Comparing elements
  - **Yellow** - Swapping elements
  - **Green** - Sorted/finalized
- 🔄 **Multiple Sorting Algorithms** - Bubble Sort and Selection Sort implementations
- 📊 **Dynamic Array Generation** - Generate new random arrays on demand
- 💫 **Smooth Animations** - 30ms frame rate for fluid transitions

## How to Use

1. Open `index.html` in your web browser
2. Click **"Generate New Array"** to create a new random array of bars
3. Click **"Bubble Sort"** or **"Selection Sort"** to visualize the algorithm
4. Watch as the bars animate through the sorting process:
   - Red bars show comparisons
   - Yellow bars show swaps
   - Green bars show completed, sorted elements

## Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Algorithm implementations and DOM manipulation

## Algorithm Explanations

### Bubble Sort
Repeatedly steps through the array, compares adjacent elements, and swaps them if they're in the wrong order. This process continues until the array is sorted. Time complexity: O(n²)

**Visual Process:**
- Red highlighting shows which elements are being compared
- Yellow highlighting indicates when a swap occurs
- Green marking shows elements that have "bubbled" to their final position

### Selection Sort
Divides the array into sorted and unsorted portions. Repeatedly finds the minimum element from the unsorted portion and places it at the beginning. Time complexity: O(n²)

**Visual Process:**
- Yellow marks the current minimum element being tracked
- Red shows elements being compared against the current minimum
- Green marks elements once they're placed in their final sorted position

## Configuration

You can customize the visualizer by modifying these constants in `app.js`:

```javascript
const ARRAY_SIZE = 40;              // Number of bars to display
const ANIMATION_SPEED_MS = 30;      // Milliseconds between animation frames
```

## Project Structure

```
├── index.html      # Main HTML file with page structure
├── app.js          # JavaScript with sorting algorithm implementations
├── style.css       # Styling and animation definitions
└── README.md       # This file
```

## Browser Compatibility

Works in all modern browsers that support ES6 (async/await, Promise, etc.):
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Future Enhancements

Potential improvements could include:
- Additional algorithms (Merge Sort, Quick Sort, Heap Sort, etc.)
- Adjustable animation speed slider
- Array size customization
- Comparison and swap counters
- Algorithm comparison mode
- Sound effects for swaps and comparisons

## License

Open source - feel free to modify and use for educational purposes.

---

**Made for learning and understanding sorting algorithms visually!** 📚
