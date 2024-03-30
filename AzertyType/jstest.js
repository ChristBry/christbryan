//declaration de la variable du mot de l'utilisateur
let motUtilisateur
let score = 0
let nbreMotsProposes = 0
//fonction qui affiche le resultat
function afficheResultat(score, nbreMotsProposes) {
     
     /*affichage du resultat dans la page html*/
     let spanScore = document.querySelector(".zoneScore span")
     let affichageScore = `${score} / ${nbreMotsProposes}`
     spanScore.innerHTML = affichageScore
}

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerHTML = proposition
}

function Reset () {
    
}
//fonction qui permet de lancer le jeu
function lancerJeu() {
    
    initAddEventListenerPopup()
    let score = 0
    let nbreMotsProposes = 0
    let i = 0
    let listePropositions = listeMot

    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for (let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change", (event) => {
            console.log(event.target.value)
            if(event.target.value === "1") {
                listePropositions = listeMot
            } else {
                listePropositions = listePhrases
            }
            afficherProposition(listePropositions[i])
        })
    }

    let btnValideMot = document.getElementById("btnValideMot")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherProposition(listePropositions[i])
    btnValideMot.addEventListener("click", () => {
      console.log(inputEcriture.value)
      if (inputEcriture.value === listePropositions[i]) {
          score++
        }
      i++
      afficheResultat(score, i)
      inputEcriture.value = ""
      if(listePropositions[i] === undefined) {
           afficherProposition("Le jeu est fini")
           btnValideMot.disabled = true
        } else {
          afficherProposition(listePropositions[i])
        }
    
    })

    let btnReset = document.getElementById("btnReset")
    btnReset.addEventListener("click", () => {
        afficherProposition(listePropositions[0])
    })

    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value

        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value


        afficherEmail(nom, email, score)
    })

    afficheResultat(score, i)

}

 function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popupBackground.classList.add("active")
}

/**
 * Cette fonction cache la popup pour partager son score. 
 */
function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
}


/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */
function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "partager"
    btnPartage = document.getElementById("btnPartager")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton partagé, on affiche la popup
        afficherPopup()
    })
 
     // On écoute le click sur la div "popupBackground"
     let main = document.querySelector("body")
     main.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target.value === undefined) {
            // Alors on cache la popup
            cacherPopup()
        }
    })
 
} 
