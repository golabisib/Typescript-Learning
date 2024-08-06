function addHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandler(10, 20, function (result) { return console.log(result); });
