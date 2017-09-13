var ejs = require('express/myblog/test/ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});

console.log(people);
console.log(html);