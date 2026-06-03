const container = document.getElementById("array-container");
let array = [];
const ARRAY_SIZE = 40;
const ANIMATION_SPEED_MS = 30;

// Helper to create artificial rendering pauses
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Generates an unsorted distribution array
function generateNewArray() {
    container.innerHTML = "";
    array = [];
    
    for (let i = 0; i < ARRAY_SIZE; i++) {
        // Random heights scaled between 20px and 360px
        let value = Math.floor(Math.random() * 340) + 20;
        array.push(value);
        
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;
        container.appendChild(bar);
    }
}

// Visual Bubble Sort Implementation
async function startBubbleSort() {
    let bars = document.getElementsByClassName("bar");
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Accent the targets being actively compared
            bars[j].classList.add("bar-comparing");
            bars[j + 1].classList.add("bar-comparing");
            
            await sleep(ANIMATION_SPEED_MS);
            
            if (array[j] > array[j + 1]) {
                // Highlight that a value swap is executing
                bars[j].classList.add("bar-swapping");
                bars[j + 1].classList.add("bar-swapping");
                
                // Swap values in our logical tracking data array
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                
                // Mutate the heights visually in the DOM
                bars[j].style.height = `${array[j]}px`;
                bars[j + 1].style.style.height = `${array[j + 1]}px`;
                
                await sleep(ANIMATION_SPEED_MS);
                
                bars[j].classList.remove("bar-swapping");
                bars[j + 1].classList.remove("bar-swapping");
            }
            
            bars[j].classList.remove("bar-comparing");
            bars[j + 1].classList.remove("bar-comparing");
        }
        // Mark the largest element at the end of this pass as fully sorted
        bars[array.length - i - 1].classList.add("bar-sorted");
    }
}

// Visual Selection Sort Implementation
async function startSelectionSort() {
    let bars = document.getElementsByClassName("bar");
    
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        bars[minIndex].classList.add("bar-swapping"); // Current minimum anchor point
        
        for (let j = i + 1; j < array.length; j++) {
            bars[j].classList.add("bar-comparing");
            await sleep(ANIMATION_SPEED_MS);
            
            if (array[j] < array[minIndex]) {
                bars[minIndex].classList.remove("bar-swapping");
                minIndex = j;
                bars[minIndex].classList.add("bar-swapping");
            } else {
                bars[j].classList.remove("bar-comparing");
            }
        }
        
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
            
            bars[i].style.height = `${array[i]}px`;
            bars[minIndex].style.height = `${array[minIndex]}px`;
        }
        
        bars[minIndex].classList.remove("bar-swapping");
        bars[i].classList.add("bar-sorted");
    }
}

// Build initial canvas layout instantly on script load
generateNewArray();