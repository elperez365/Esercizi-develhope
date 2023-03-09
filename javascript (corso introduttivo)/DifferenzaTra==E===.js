const firstYearCompleted = true;
const yearsCompleted = 2;

yearsCompleted == firstYearCompleted   // PRIMO CASO
yearsCompleted === firstYearCompleted  // SECONDO CASO

//Nel primo caso vengono messe a confronto 2 variabili per uguaglianza come valore.
//La risposta restituita sarà true perchè Javascript quando confronta un numero con un boleano
//considera zero o stringa vuota come false e true come qualsiasi altro numero diverso da zero.

//Nel secondo caso si utilizza il simbolo di strettamente uguale e la risposta sarà false.
//Quando si usa === viene confrontato sia il valore che il tipo, dunque per essere true le 
//variabili devono essere identiche.