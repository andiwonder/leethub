/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(a) {
    let res = [];
    a.sort((x, y) => x[0] - y[0]);
    let prevEnd;

    for (const [start, end] of a) {
        if (prevEnd != undefined) {
            if (start > prevEnd) { 
                res.push([start, end]);
                prevEnd = end;
            } else {
                let prev = res.pop();
                let right = Math.max(prev[1], end);
                res.push([prev[0], right]);
                prevEnd = right;
            }
        } else { 
            res.push([start, end]);
            prevEnd = end;
        }
    }
    return res;
};