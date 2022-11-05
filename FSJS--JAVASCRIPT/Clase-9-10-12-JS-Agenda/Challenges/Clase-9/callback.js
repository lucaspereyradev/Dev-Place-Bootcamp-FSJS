var primera = function (callback) {
    setTimeout(function () {
        console.log("estoy en primera");
        callback();
    });
};

var segunda = function () {
    console.log("estoy segunda");
};

primera(segunda);
