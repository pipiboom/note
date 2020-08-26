var obj = {
    a: 1,
    b: 2
}

Object.defineProperty(obj, Symbol.iterator, {
    enumerable: false,
    writeable: false,
    configurable: true,
    value: function() {
        
    }
})