//  write a function to solve the knapsack problem using dynamic programming .log the maximum value that can be obtained

function knapsack(weights, values, capacity) {
    const n = values.length;
    // Create a 2D array to store the maximum values
    const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));
  
    // Build the dp array
    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          // Include the item
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
        } else {
          // Exclude the item
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    // The maximum value is found in dp[n][capacity]
    return dp[n][capacity];
  }
  
  // Example usage
  const weights = [2, 3, 4, 5]; // Weights of the items
  const values = [3, 4, 5, 6];  // Values of the items
  const capacity = 5;            // Maximum weight capacity of the knapsack
  
  const maxValue = knapsack(weights, values, capacity);
  console.log(`Maximum value that can be obtained: ${maxValue}`); // Output: Maximum value that can be obtained: 7