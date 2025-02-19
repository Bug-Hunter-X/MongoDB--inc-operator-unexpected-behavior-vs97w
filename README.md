# MongoDB $inc operator unexpected behavior
This repository demonstrates a common error when using MongoDB's `$inc` operator within an update query. The issue arises when attempting to increment a field that doesn't exist, leading to unexpected behavior and potential data inconsistencies.

The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version that handles the missing field scenario gracefully.

## Bug Description
The primary issue lies in using `$inc` without first verifying the existence of the target field. If the field is absent, `$inc` will not create it, leading to no change in the document.

## Solution
The solution involves using the `$inc` operator in conjunction with a conditional statement or other techniques (like the use of the `$setOnInsert` operator) to ensure proper field handling before incrementing.