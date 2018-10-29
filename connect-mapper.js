


// une variable pour se connecter
function verif() {

firebase.auth().onAuthStateChanged(function (user) {
if (user) {

        let userProfil = firebase.auth().currentUser;

if (userProfil != null) {
        // on recupere les infos du user qui s'est connecte
        let name, email, photoUrl, uid, emailVerified;
        name = userProfil.displayName;
        usermail = userProfil.email;
        photoUrl = userProfil.photoURL;
        uid = userProfil.uid;

 $('.btnnav').html('<p>Déconnection</p>');

        // Fait apparaitre les infos de l'user
        $('.profil').html('<p class="contact"> Félicitation <strong>' + name + ' !</strong><br> Vous êtes désormais pré-inscrit sur Split.</p>');
        // Fait apparaitre la photo de l'user
        $('.photoshow').html('<img class="photosize" src="' + photoUrl + '"/>');
        // Fait apparaitre l'email
        $('.usermail').html('<p>' + usermail + '</p>');
        // Fait disparaitre le btn préinscription
        $('.btnjs').css('visibility','hidden');

        $('.uid').html('<p>' + uid + '</p>');

}


        console.log('l\'utilisateur est connecté');

        var rootRef = firebase.database().ref();
        rootRef.once("value")
          .then(function(snapshot) {
            var key = snapshot.key; // null
            var childKey = snapshot.child("users").key; // "ada"
          });

//

//

//

//

//





    }

else
    {
         $('.btnnav').html('<p>Connection</p>');
        // Fait disparaitre les infos de l'user
        $('.profil').html('');
        // Fait disparaitre la photo de l'user
        $('.photoshow').html('');
        console.log('l\'utilisateur n\'est pas connecté');
         // Fait disparaitre l'email
        $('.usermail').html('');
  window.location.href = "index.html";

}


    });


}


function connexion() {
    let user = firebase.auth().currentUser;

    if (user) {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            $('.co').css('visibility','hidden');
            $('.profilout').css('visibility','hidden');
            $('.google-btn').css('visibility','visible');
            console.log('l\'utilisateur vient de se déconnecter');
             window.location.href = "index.html";
        });

    } else {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
        }).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
        });
    }
}
verif();
$('.google-btn').on('click', function () {
    connexion();


});





/**
 * Created by yeahright on 15/06/2017.
 */
