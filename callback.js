// Exercise 1
function B(){
    setTimeout(() => {
        console.log('world');
    },200);
}
function A(callback){
    setTimeout(() =>{
        console.log('hello');
        callback();
    }, 500)
}
A(B);

///////////////////////////////////////////

// Exercise 2
const workers =
    {name:'Ali', position: 'HR'};

function C(callback){
    setTimeout(()=>{
        var abc = workers.name
        console.log(abc);
        callback();
    },800)
}
function D(){
    setTimeout(() =>{
        var xyz = workers.position
        console.log(xyz);
    }, 700)
}

C(D);
