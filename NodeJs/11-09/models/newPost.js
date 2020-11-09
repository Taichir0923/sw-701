const fs = require('fs');
const path = require('path');

const pth = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'posts.json'
);

const getPostfromFile = postInfos => {
    fs.readFile(pth, (err, fileContent) => {
        if(err){
            postInfos([]);
            console.log(err);
        } else {
            postInfos(JSON.parse(fileContent));
        }
    })
}

module.exports = class Posts {
    constructor(title, body, image, publisher){
        this.title = title;
        this.body = body;
        this.image = image;
        this.publisher = publisher;
    }
    save(){
        getPostfromFile(posts => {
            posts.push(this);
            fs.writeFile(pth, JSON.stringify(posts), err => {
                console.log(err);
            });
        });
    };
    static fetchAll(postInfos){
        getPostfromFile(postInfos)
    };
}