import fs from "fs";

function sum_n_last_values(arr: number[], n: number) {
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += arr[arr.length - 1 - i]
    }
    return sum
}

function bubble_sort(inp: number[]) {
    let nums = inp
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let tmp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = tmp
            }
        }
    }
    return nums
}


fs.readFile('./adventofcode.com_2022_day_1_input.txt', (err, inputId) => {
    let nums: number[] = []
    let num = 0
    let tmp = ""
    for (let i of inputId.toString()) {
        if (i == '\n') {
            if (tmp != "") {
                num += (Number(tmp))
                tmp = ""
            } else {
                nums.push(num)
                num = 0
            }
        } else {
            tmp += i
        }
    }
    let max = nums[0]
    let sum = 0;
    console.log(sum_n_last_values(bubble_sort(nums), 3));
})
