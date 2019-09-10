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

////////////////////////////////////////////

// Exercise 2
const workers =[
    {name:'Ali', position: 'HRR'},
    {name:'Abu', position: 'IT'}
]

function C(callback){
    setTimeout(()=>{
        for(var i in workers){
            var abc = workers[i].name
            console.log(abc);
        }
        callback();
    },800)
}
function D(){
    setTimeout(() =>{
        for(var i in workers){
            var xyz = workers[i].position
            console.log(xyz);
        }
    }, 700)
}

C(D);
