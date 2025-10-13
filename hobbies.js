
/***************
    FUNZIONE 
***************/

/*  Funzione che riceve in ingresso tre hobby 
    e restituisce un array con gli hobby inseriti */
function createHobbies(hobbyOne, hobbyTwo, hobbyThree) {
    return [hobbyOne, hobbyTwo, hobbyThree];
}

/* Debug */
// console.log(createHobbies("danza", "palestra", "musica"));

/*********************
    EXPORT FUNZIONE 
*********************/
module.exports = createHobbies;