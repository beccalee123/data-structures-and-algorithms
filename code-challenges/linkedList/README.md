# Singly Linked List - Data Structures Lab
Using methods learned in class and in readings, create a linked list and corresponding functionality

## Challenge
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
- This object should be aware of a default empty value assigned to head when the linked list is instantiated.
- Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called print which takes in no arguments and outputs all of the current Node values in the Linked List.
- At no time should an exception or stack trace be shown to the end user. - Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
- Be sure to follow your language/frameworks standard naming conventions.
- Write at least three test assertions for each method that you define.


## Approach & Efficiency
I began by reviewing my lecture notes and other resources to get a lay of the land for the concepts around linked lists, since they're a new concept. After that, I went through each item in the challenge and coded it, console logging along the way to ensure things were working as expected. I then spent time writing tests for each method, and updated my original code as needed based on my test assertions. I ran into some issues with my print method after testing and was able to revisit my code and rewrite that method. So the testing paid off!

I believe this code has an O(1) time performance

## API
- `insert(value)` allows you to add a new item to the linked list
- `includes(value)` allows you to discover if an item exists in the linked list
- `print()` allows you to see each item included in the linked list


# Linked List Insertions - Code Challenge 8
Linked list insertions. Paired with Hannah Ingham and Brent Woodward.

## Challenge
Write the following methods for the Linked List class:

- `.append(value)` which adds a new node with the given value to the end of the list
- `.insertBefore(value, newVal)` which add a new node with the given newValue immediately before the first value node
- `.insertAfter(value, newVal)` which add a new node with the given newValue immediately after the first value node
- You have access to the Node class and all the properties on the Linked List class.

## Approach & Efficiency
- We started by outlining the problem domain and drawing visualizations of how the list would change with each method.
- Then we began to work on algorithms, but found we needed to do more psuedocoding than we originally thought, so we worked through psuedocoding and brainstorming, then wrote the algorithm and code in tandem
- Once that was done we coded things up, had a number of problems, but helped each other through it as a group.
- Once our methods were working we wrote our tests!

## Solution
![Linked Lists Insertions Whiteboard 1](../assets/ll_insertsions_1.jpg)
![Linked Lists Insertions Whiteboard 2](../assets/ll_insertsions_2.jpg)
