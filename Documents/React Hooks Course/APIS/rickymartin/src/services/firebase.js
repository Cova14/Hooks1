// Initialize Firebase
import firebase from 'firebase/app'
import 'firebase/firestore'

let config = {
    apiKey: "AIzaSyCAhdPCyjMufzqYkBXiGahS1aODsNbKWYs",
    authDomain: "reacthooks-d5f18.firebaseapp.com",
    databaseURL: "https://reacthooks-d5f18.firebaseio.com",
    projectId: "reacthooks-d5f18",
    storageBucket: "reacthooks-d5f18.appspot.com",
    messagingSenderId: "780372387261"
};
firebase.initializeApp(config);

let firestore = firebase.firestore()
let charRef = firestore.collection('characters')

export default firebase

//get

export function getImages() {
    return charRef.get()
        .then(snap => {
            let images = []
            snap.docs.forEach(s => {
                images.push(s.data)
            })
            return images
        })
}

//post
export function saveImage(item) {
    let key = charRef.child().key
    item.key = key
    return charRef.child(key).set(item)
        .then(snap => {
            console.log(snap)
            console.log(snap.data())
        })
}