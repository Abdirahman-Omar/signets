import './ListeDossiers.scss';
import Dossier from './Dossier';
import {firestore} from '../firebase';
import { useEffect, useState } from 'react';

export default function ListeDossiers({utilisateur}) {
let [dossiers, setDossiers] = useState([]);

  useEffect(
    () => {
      async function chercherDossiers(){ 
      let dossTab = [];
     const reponse = await firestore.collection('utilisateurs').doc(utilisateur.uid).collection('dossiers').get();
          reponse.forEach(
            doc => 
            dossTab.push({id: doc.id, ...doc.data()}));
         setDossiers(dossTab);
        }
     chercherDossiers()
    },[]
  )
 

  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}
