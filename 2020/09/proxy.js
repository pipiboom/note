function observe(obj, callback) {
    const newObj = {};
    Object.keys(obj).forEach(key => {
        Object.defineProperty(newObj, key, {
            configurable: true,
            enumerable: true,
            get() {
                return obj[key]
            },
            set(newVal) {
                obj[key] = newVal;
                callback(key, newVal);
            }
        })
    })
    return newObj;
}


function observeProxy(obj, callback) {
    return new Proxy(obj, {
        get(target, key) {
            return target[key]
        },
        set(target, key, newValue) {
            target[key] = newValue;
            callback(key, newValue);
        }
    })
}
let obj = observeProxy({
    name: '张三',
    age: '18'
}, (key, value) => {
    console.log(`属性[${key}的值修改为${value}]`);
})

obj.name = '李'

obj.sex = 'nan'