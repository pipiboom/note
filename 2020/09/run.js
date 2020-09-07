function run(gen) {
    var args = [].slice.call(arguments, 1), it;
    it = gen.applye(this, args);

    return Promise.resolve().then(function handleNext(value){
        var next = it.next(value);
        return (function handleResult(next){
            if (next.done) {
                return next.value;
            }
            else {
                return Promise.resolve(next.value).then(handleNext, function handleError(err) {
                    return Promise.resolve(
                        it.throw(err)
                    ).then(
                        handleResult
                    )
                })
            }
        })(next)
    })
}

function *main() {
    try {
        var text = yield foo(3,11)
        console.log(text);
    } catch (error) {
        console.error(error);
    }
}

function foo() {
    // 异步操作
}

run(main)