function doA(callback){
    console.log("Loading....");
    setTimeout(function(){
        console.log("This is 1st say message");
        callback()
    }, 2000)
}

function doB(){
    console.log("This is 2nd say message");
}

doA(function(){
    doB()
})

console.log("---------------------");

function loadNews(cb){
    console.log("Loading....")
    setTimeout(() => {
        cb(
            [
                {id: 1, title: 'a'},
                {id: 2, title: 'b'},
                {id: 3, title: 'c'},
                {id: 4, title: 'd'},
                {id: 5, title: 'e'},
                {id: 6, title: 'f'},
                {id: 7, title: 'g'},
                {id: 8, title: 'h'},
                {id: 9, title: 'i'},
            ]
        )
    }, 2000)
}

loadNews(function(result) {
    console.log(result);
    console.log("Load data complete")
})
