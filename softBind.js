// 函数的bind方法是一种强绑定，使用过后会导致无法使用隐式绑定或者显示绑定(call/apply)修改函数的this
// 降低了函数的灵活性

if (!Function.prototype.softBind) {
    Function.prototype.softBind = function(obj) {
        var fn = this;
        // 获取softBind的参数
        var args = [].slice.call(arguments, 1);
        var bound = function() {
            return fn.apply((!this || this === (window || global) ? obj : this), args.concat.call(args, arguments))
        }
        bound.prototype = Object.create(fn.prototype);
        return bound
    }
}
