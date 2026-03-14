// const arr1 = [18,10,12,5,9,11]

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1.length - i - 1; j++) {
//         if (arr1[j] > arr1[j + 1]) {
//             // Swap arr1[j] and arr1[j + 1]
//             let temp = arr1[j];
//             arr1[j] = arr1[j + 1];
//             arr1[j + 1] = temp;
//         }
//     }
// }

// console.log(arr1)

// splice vs slice?
// splice() is used to add or remove elements from an array, modifying the original array.
// slice() is used to create a new array by copying a portion of an existing array, without modifying the original array.

// call stack vs event loop?
// The call stack is a data structure that keeps track of the function calls in a program. It operates in a last-in, first-out (LIFO) manner.
// The event loop is a mechanism that allows JavaScript to perform non-blocking operations by handling asynchronous events.
// It continuously checks the call stack and the task queue, executing tasks from the queue when the call stack is empty.

// What is promise chaining?
// Promise chaining is a technique in JavaScript where multiple asynchronous operations are performed 
// sequentially using Promises.

// Promise vs async/await?
// Promises use .then() chaining to handle asynchronous operations, while async/await provides a cleaner
// syntax that looks like synchronous code. Async/await is built on top of Promises and improves readability 
// and error handling using try/catch.

// what is function expression?
// A function expression is a way to define a function in JavaScript by assigning it to a variable. 
// It can be anonymous (without a name) or named. Function expressions are not hoisted, meaning they 
// cannot be called before they are defined in the code.

// meter tag vs progress tag?
// The <meter> tag is used to represent a scalar measurement within a known range, such as disk usage or battery level. 
// It displays a gauge that indicates the value relative to the minimum and maximum values.
// The <progress> tag is used to represent the completion progress of a task, such as file upload or download. 
// It displays a progress bar that fills up as the task progresses towards completion.

// HTML VS XHTML?
// HTML is the standard markup language for building web pages, 
// while XHTML is a stricter version of HTML that follows XML rules such as mandatory closing tags, 
// lowercase elements, and properly quoted attributes.

// What is marquee tag?
// The <marquee> tag is an HTML element that creates a scrolling text or image effect. 

// Overlapping elements in CSS?
// Overlapping elements in CSS can be achieved using the position property (relative, absolute, fixed) and z-index to control the stacking order of elements. 
// Elements with a higher z-index will appear on top of those with a lower z-index when they overlap.