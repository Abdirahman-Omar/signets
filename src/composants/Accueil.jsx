import './Accueil.scss';
import firebase from 'firebase/app';
import { instanceFirebaseUI } from '../firebase'
import { useEffect } from 'react';
import'firebaseui/dist/firebaseui.css';


export default function Accueil(props) {

 useEffect(
   () => instanceFirebaseUI.start("#firebaseui-widget", {
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ]
   },[])
 )

  return (
    <div className="Accueil">
<h3 className="logo">Signets <span>beta</span></h3>
<h2 className="amorce">Organiser vos signets Web,<br />Simple comme bonjour</h2>
<h4 className="connexion-etiquette">Connexion à Signets</h4>
<div id="firebaseui-widget"></div>
    </div>
  );
}
