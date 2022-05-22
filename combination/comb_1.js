function combinations(numArr, choose, callback) {
    var n = numArr.length;
    var c = [];
    var inner = function(start, choose_) {
        if (choose_ == 0) {
            callback(c);
        } else {
            for (var i = start; i <= n - choose_; ++i) {
                c.push(numArr[i]);
                inner(i + 1, choose_ - 1);
                c.pop();
            }
        }
    }
    inner(0, choose);
}

function product(arr) {
    p = 1;
    for (var i in arr) {
        p *= arr[i];
    }
    return p;
}

var ansArr = [];

combinations(
    [1, 3, 5, 7, 9, 11], 2,
    function output(arr) {
        ansArr.push(product(arr));
    });

console.log(ansArr);