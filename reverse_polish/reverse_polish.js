String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

var ReversePolish = {
    op: ["*", ""],
    start: function() {
        for (var i = 1000; i < 10000; i++) {
            var c = String(i);
            for (var j = 0, len = this.op.length; j < len; j++) {
                for (var k = 0; k < len; k++) {
                    for (var l = 0; l < len; l++) {
                        var val = Number(c.charAt(0)) + this.op[j] + Number(c.charAt(1)) + this.op[k] + Number(c.charAt(2)) + this.op[l] + Number(c.charAt(3));
                        if (val.length > 4) {
                            var result = eval(val);
                            if (result == c.reverse()) {
                                console.log(c + " → " + val + " = " + result);
                            }
                        }
                    }
                }
            }
        }
    }
};

ReversePolish.start();
