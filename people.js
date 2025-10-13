
/*********************
    IMPORT FUNZIONI 
*********************/
const createFullName = require("./names.js");
const createHobbies = require("./hobbies.js");

/***************
    FUNZIONE 
***************/

/*  Funzione che restituisce un oggetto con le proprietà fullName e Hobbies
    utilizzando le funzioni createFullName e createHobbies importate da altri moduli */
    function createPeople() {
        return { 
                    fullname: createFullName("Damiana", "Arangio"),           // nome completo
                    hobbies: createHobbies("danza", "palestra", "musica")     // lista hobby
                }
    }

/* Debug */
// console.log(createPeople());

