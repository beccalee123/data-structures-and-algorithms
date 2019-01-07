# Stacks and Queues
Using methods learned in class and in readings, create a Stack, a Queue, and their corresponding functionality


## Challenge
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
  - This object should be aware of a default empty value assigned to top when the stack is created.
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node.
- Define a method called peek that does not take an argument and returns the node located on the top of the stack.
---
- Create a Queue class that has a top property. It creates an empty queue when instantiated.
  - This object should be aware of a default empty value assigned to front when the queue is created.
- Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node.
- Define a method called peek that does not take an argument and returns the node located in the front of the stack.
---
- At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
- Be sure to follow your languages best practices for naming conventions.
- Write at least three test assertions for each method that you define.

## Approach & Efficiency
I began by reviewing my lecture notes and other resources to get a lay of the land for the concepts around stacks & queues, since they're a new concept. After that, I went through each item in the challenge and coded it, testing along the way to ensure things were working as expected, and updated my original code as needed based on my test assertions. During testing, I ran into a few issues with my functions(or possibly the way my tests are written), so I have a little more work to do once I'm able to get some help figuring out what the issues are.

I believe this code has an O(1) time performance

## API

### Stacks
- `push` allows you to push a value to the top of the stack
- `pop` allows you to remove an item from the top of the stack
- `peek` allows you to view the item at the top of the stack

### Queues
- `enqueue` allows you to push a value to the back of the queue
- `dequeue` allows you to remove an item from the front of the queue
- `peek` allows you to view the item at the front of the queue