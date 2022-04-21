const merge = (left, right) => {
    let sorted = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    return [...sorted, ...left, ...right]
}

export const mergeSort = (arr) => {
    const half = arr.length / 2;

    if (arr.length <= 1) {
        return arr
    }

    const left = arr.splice(0, half);
    const right = arr;

    return merge(mergeSort(left), mergeSort(right));
}