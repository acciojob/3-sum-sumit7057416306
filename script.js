  function threeSum(S, target) {
    S.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < S.length - 2; i++) {
        let left = i + 1, right = S.length - 1;
        while (left < right) {
            let currentSum = S[i] + S[left] + S[right];
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return currentSum;
            }
        }
    }
    return closestSum;
}

//}

module.exports = threeSum;
