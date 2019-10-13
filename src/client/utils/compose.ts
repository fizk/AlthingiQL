function flow(...funcs: any[]) {
    const length = funcs ? funcs.length : 0;
    let index = length;
    while (index--) {
        if (typeof funcs[index] !== 'function') {
            throw new TypeError('Expected a function')
        }
    }
    return function(...args: any[]) {
        let index = 0;
        // @ts-ignore
        let result = length ? funcs[index].apply(this, args) : args[0];
        while (++index < length) {
            // @ts-ignore
            result = funcs[index].call(this, result)
        }
        return result
    }
}


function compose(...funcs: any[]) {
    return flow(...funcs.reverse())
}

export default compose
