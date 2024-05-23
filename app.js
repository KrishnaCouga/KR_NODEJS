// const http = require('http')

// // http.createServer(function (req, res) {
// //     res.write("server is running on port 3000")
// //     res.end()
// // }).listen(3000)
// http.createServer((req, res) => {
//     res.write("server is running on port 3000 , hello world")
//     res.end()
// }).listen(3000)

// const os = require('os')
// console.log(os.hostname());
// console.log(os.type());

// //file creating
// const fs = require('fs')

// fs.mkdir('folder', (err) => {
//     if (err) {
//         console.log("error", err);
//     }
//     else {
//         console.log("folder created successfully");
//     }
// })

// fs.mkdir('folder1', (err) => {
//     if (err) {
//         console.log("error", err);
//     }
//     else {
//         console.log("folder created successfully");
//     }
// })

// //remove file

// fs.rmdir('folder1', (err) => {
//     if (err) {
//         console.log("error while removing the file", err);
//     }
//     else {
//         console.log("file removed successfully");
//     }
// })

// //read file

// fs.readFile("democontent.txt", (err, data) => {
//     if (err) {
//         console.log("error while reading the data", err);
//     }
//     else {
//         console.log(data.toString(), "data read successfully");

//     }
// })

// //create file with 3 methods

// fs.appendFile('file1.txt', 'new file data', (err) => {
//     if (err) {
//         console.log("error while creating file", err);
//     }
//     else {
//         console.log("file successfully created");

//     }
// })

// fs.open('file2.txt', 'r', (err) => {
//     if (err) {
//         console.log("error while creating file", err);
//     }
//     else {
//         console.log("file successfully created");
//     }
// })

// fs.writeFile('file3.txt', 'My new data', (err) => {
//     if (err) {
//         console.log("error while creating file", err);
//     }
//     else {
//         console.log("file successfully created");
//     }
// })

// //delete file

// fs.unlink('file3.txt', (err) => {
//     if (err) {
//         console.log("error while deleting the file", err);
//     }
//     else {
//         console.log("file successfully deleted");
//     }
// })

// //rename file

// fs.rename('file2.txt', 'renamedfile.txt', (err) => {
//     if (err) {
//         console.log("error while renaming the file", err);
//     }
//     else {
//         console.log("file successfully renamed");
//     }
// })

const express = require('express')
const app = express()

const db = require('./KR_NODEJS/src/database/db')
db.on("open", () => {
    app.listen(3000, () => {
        console.log("server is running on port 3000");
    })
    db.on("error", () => {
        console.log("error while connecting to database");
    })
})
