var flow = require('nimble');

// flow.series([
//     function (callback)
//     {
//         setTimeout(function()
//         {
//             console.log('I execute first.');
//             callback();
//             newfunc();
//         }, 1000)
//     },
//     function (callback)
//     {
//         setTimeout(function()
//         {
//             console.log('I execute next.');
//             callback();
//         }, 2000)
//     },
//     function (callback)
//     {
//         setTimeout(function()
//         {
//             console.log('I execute last.');
//             callback();
//         }, 100)
//     }
// ]);


// flow.series([
//     function (callback)
//     {
//         callback();
//         newfunc();
//     },
//     function (callback)
//     {
//         callback();
//         newfunc();
//     },
//     function (callback)
//     {
//         callback();
//         newfunc();
//     }
// ]);

flow.parallel([
    function (callback) {
        setTimeout(function () {
            console.log('one');
            callback();
        }, 25);
    },
    function (callback) {
        setTimeout(function () {
            console.log('two');
            callback();
        }, 0);
    }
]);


// flow.map([1, 2, 3], function (val) {
//     console.log(val * 2);
// });

function newfunc(){ console.log('this is a new function!'); }