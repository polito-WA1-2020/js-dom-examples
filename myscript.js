"use strict" ;

window.addEventListener('load', event => {

    let rows = document.querySelectorAll('tbody tr') ;

    for( let row of rows ) {
        row.addEventListener('click', event => {
            // console.log(event.target, row) ;
            let score = row.children[1].innerText ;
            // console.log(score);
    
            let comments = document.getElementById('comments') ;
            comments.insertAdjacentHTML('beforeend', `<p>The score is: ${score}</p>`) ;
        }) ;
    }

}) ;

