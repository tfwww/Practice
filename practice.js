// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	let result = []
	for (let i = 0; i < nums.length; i++) {
		const item = nums[i]
		let minus = target - item
		for (let j = 0; j < nums.length; j++) {
			const element = nums[j]
			if (minus === element && i != j) {
				result.push(i)
				break
			}
		}
	}
	return result
}