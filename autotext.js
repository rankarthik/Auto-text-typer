const text='i will be their in minute ';
const container=document.getElementById('container');
let num=0;

function write(){
  
    container.innerText=text.slice(0,num);

    if(num > text.length )
    {
        num=0;
    }
    num++;
    
}

setInterval(write,200);