var CutBar = {
    cutBar: function(m, n, current) {
        if (current >= n) {
            return 0;
        } else if (current < m) {
            return 1 + this.cutBar(m, n, current * 2);
        } else {
            return 1 + this.cutBar(m, n, current + m);
        }
    }
};
var result1 = CutBar.cutBar(3, 20, 1);
var result2 = CutBar.cutBar(5, 100, 1);

console.log(result1);
console.log(result2);
