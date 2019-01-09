# Implement a Queue using two Stacks.
Multi-bracket Validation. Paired by Becca Lee and Fletcher LaRue

## Challenge
JavaScript: a function called multiBracketValidation(input). 
Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

- Round Brackets : ()
- Square Brackets : []
- Curly Brackets : {}

Write at least three test assertions for each method that you define.


Ensure your tests are passing before you submit your solution.

## Approach & Efficiency
- We started by writing out the problem domain and identifying the inputs and outputs
- Then we started on the algorithm and drew some visuals, which clarified our approach, and finished up our algorithm. This was an interesting code challenge because there were a TON of edge cases to account for so a lot of our intial solutions didn't end up covering the bases. We also were striving to keep our Big O to minimal space and time, but weren't able to get 100% of the way there.
- We ended up going with a less efficient solution, coded that out roughly on the board, and then started coding things up.
- I got mine coded, but encountered an infinite loop. I tried a couple of things to fix it, but didn't have luck. For time's sake, I'm moving on without writing tests, but I'd like to revisit if I have time and get things working properly.

## Solution
![bracket validation](../assets/multi-bracket-validation.JPG)