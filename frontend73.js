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