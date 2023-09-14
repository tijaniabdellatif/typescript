"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
/**
 * type inference
 */
var date = new Date();
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logResult(id, title, finished);
}).catch(function (error) {
    console.log(error);
});
var logResult = function (id, title, completed) {
    console.log("\n      \n        la todo : ".concat(id, "\n        est : ").concat(title, "\n        and : ").concat(completed, "\n      \n      "));
};
