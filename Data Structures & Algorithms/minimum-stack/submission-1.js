class MinStack {
    constructor() {
        this.stack = [];
        this.minimums = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length == 0) {
           this.minimums.push(val);
        } else {
            if (val < this.minimums[this.minimums.length - 1]) {
                this.minimums.push(val);
            } else {
                this.minimums.push(this.minimums[this.minimums.length - 1])
            }
        }
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        let popped = this.stack.pop();
        this.minimums.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minimums[this.minimums.length - 1];
    }
}
