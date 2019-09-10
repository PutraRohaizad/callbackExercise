function B(){
    setTimeout(() => {
        console.log('world');
    },200);
}
function A(post,callback){
    setTimeout(() =>{
        console.log('hello');
        callback();
    }, 500)
}

A('post',B);

// const workers =
//     {name:'Ali', position: 'HR'};

// function A(){
        
//     console.log(workers) 
//         return this.name;
// }

// A();