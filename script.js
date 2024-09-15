var button = document.getElementById('btn');
button.innerHTML = 'Night';
var colorchnager =  document.getElementById('btn').addEventListener('click', function(){
    if(document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        button.innerHTML = 'Night';
    } else {
        document.body.style.backgroundColor = 'black';
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
        button.innerHTML = 'Day';
    }
})