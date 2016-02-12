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
                        var val = Number(c.charAt(3)) + this.op[j] + Number(c.charAt(2)) + this.op[k] + Number(c.charAt(1)) + this.op[l] + Number(c.charAt(0));
                        if (val.length > 4) {
                            if (i == eval(val)) {
                                console.log(c.reverse() + " → " + val + " = " + i);
                            }
                        }
                    }
                }
            }
        }
    }
};

ReversePolish.start();
