//Affcihe le résultat
function affciherResultat(resultat,nbrMots){
    let affichageScore = document.querySelector(".zoneScore span")
    affichageScore.innerText = `${resultat} | ${nbrMots}`
}

function afficherProposition(motafficher){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = motafficher
}

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function lancerJeu(){
   initAddEventListenerPopup()

    let i=0
    let score = 0
    let nbrMotsPrposé = 0
    let listeProposition = listeMots
    let btnValiderMot = document.getElementById("btnValiderMot")
    let baliseOptionSource = document.querySelectorAll(".optionSource input")
    let form = document.querySelector("form")

    for(let u=0; u < baliseOptionSource.length; u++) {

        baliseOptionSource[u].addEventListener("change",(event) => {

                if(event.target.value == 2){
                    listeProposition = listePhrases
                }else {
                    listeProposition = listeMots
               }

                afficherProposition(listeProposition[i])
            }
        )
    }


    afficherProposition(listeProposition[i])

    btnValiderMot.addEventListener("click",() => {  
        console.log(document.getElementById("inputEcriture").value)

        if(document.getElementById("inputEcriture").value === listeProposition[i]){
            score ++
        }
        document.getElementById("inputEcriture").value = ""
        i++
        console.log(i)
        afficherProposition(listeProposition[i])
        if (listeProposition[i] === undefined){
            afficherProposition("Le jeu est fini !")
            btnValiderMot.disabled = true}
        
        affciherResultat(score,[i])
    })

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            let sujet = document.getElementById("nom").value
            let message = document.getElementById("email").value

            console.log(sujet)
            console.log(message)
            scoreEmail = `${score} / ${[i]}`
            afficherEmail(sujet, message, scoreEmail)

        })
}
