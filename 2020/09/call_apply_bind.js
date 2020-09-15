// call
var name = 'window'
const person = {
    name: 'xiaoMing',
    say() {
        console.log(this.name);
    },
    customSay(win) {
        console.log(win.name);
    }
}
person.say.call();
// person.customSay(global);
// delete person.customSay
// console.log(person)
// console.log(global)