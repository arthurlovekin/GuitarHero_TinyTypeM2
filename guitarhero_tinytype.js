//////////////////////////////////////////////////////////////////////////////
//
//  Guitar Hero TinyType
//
//  main backend js, v0.0
//  by arthurlovekin@ucla.edu 04-09-2022
//  for ECE188 with professor Xiang Chen at UCLA
//
//////////////////////////////////////////////////////////////////////////////

//// TODO: namespace

// Every dt milliseconds, scroll the alphabet down a letter
setInterval(scrollAlphabet, 750);

// move the bottom row of the table to the top row to simulate scrolling
function scrollAlphabet() {
    $("#alphabet tr:nth-child(7)").insertBefore("#alphabet tr:nth-child(1)");
}

function typeLetter(col) {
    letter = document.getElementById('alphabet').rows[5].cells[col].innerHTML;
    if(letter === "~" && $("#message").text().length > 0) {
        document.getElementById('message').innerHTML = document.getElementById('message').innerHTML.slice(0, -1);
    } else if(letter === '_') {
        document.getElementById('message').append(' ');
    } else {
        document.getElementById('message').append(letter);
    }
}