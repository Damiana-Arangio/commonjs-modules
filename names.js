/***************
    FUNZIONE 
***************/

/*  Funzione che riceve in ingresso il nome e il cognome dell’utente 
    e restituisce un oggetto con le proprietà firstName e lastName. */
function createFullName(nome, cognome) {
    
    return { firstName: nome, lastName: cognome };
}

/* Debug */
// console.log(createFullName("Damiana", "Arangio"));

/*********************
    EXPORT FUNZIONE 
*********************/
module.exports = createFullName;