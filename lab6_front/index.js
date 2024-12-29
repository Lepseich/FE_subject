const userInfo = {
    name: 'Daniil',
    age: 19,

    logThis: function () {
        console.log(this)
    }
}
 userInfo.logThis()