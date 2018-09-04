let counter = 0;

$( document ).ready( onReady );

function onReady(){
    $( 'button' ).on('click', appendToDiv );
    $( '#toBeAppended' ).on('click','.swap', swapColor );
    $( '#toBeAppended' ).on('click','.delete', deleteDiv );
}

function appendToDiv(){
    counter++;
    //we give each appended div a different id so we can access it later
    //I can't get the swapColor function to work using the 'this' keyword,
    //so I decided to try adding a unique id to each div instead
    $( '#toBeAppended' ).append(`<div class="appendedDiv" id="` + counter + `">
            <p>` + counter + `</p>
            <button class="swap">Swap</button>
            <button class="delete">Delete</button>
        </div>`);
}

function swapColor(){
    //get ID of current div
    let number = $(this).parent().attr('id');
    //get div with that ID
    let el = document.getElementById(number);
    //toggle classes
    el.classList.toggle("swapDivBackground");   
}

function deleteDiv(){
    $( this ).parent().remove();
}