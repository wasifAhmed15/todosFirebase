// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,ref,set,push,onValue,remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ_gDICFWEMRigt2PCL6F4vLPXJ3dqhaM",
  authDomain: "blub-4720f.firebaseapp.com",
  databaseURL: "https://blub-4720f-default-rtdb.firebaseio.com",
  projectId: "blub-4720f",
  storageBucket: "blub-4720f.appspot.com",
  messagingSenderId: "583907749617",
  appId: "1:583907749617:web:a632506238915bc6f28350",
  measurementId: "G-YGQFGNEMT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database  = getDatabase(app);










var inp = document.getElementById('inp')
var ul = document.getElementById('ul')
            window.addTask = function () {
            var id = push(ref(database,"Todos/")).key
            var obj = {
                input: inp.value,
                id : id
            }
            var todoref = ref(database,`Todos/${obj.id}/`)
            set(todoref,obj)    
            inp.value = "";    
        }
function nowValue (){

    var todoref = ref(database,"Todos/")
    onValue(todoref,function(pushDataGet){
        var arry = Object.values(pushDataGet.val())
        showData(arry);        
    })
}
nowValue()
function showData(arry){
    ul.innerHTML= ""
    for(var i = 0 ; i < arry.length;i++){
        ul.innerHTML += `
        <li class = "li">${arry[i].input}
        <button onclick="clearVal('${arry[i].id}')" class = "del">Delete</button>
        <button onclick="editVal('${arry[i].input}','${arry[i].id}')" class = "edit">Edit</button>
        </li>`       
    }
}
window.clearVal = function(del) {
    remove(ref(database,`Todos/${del}`))
    nowValue()
    
    
}
window.delAll = function (){
    remove(ref(database,"Todos"))
    ul.innerHTML = ""
}
window.editVal = function (input ,del) {   
    inp.value = input  
    remove(ref(database,`Todos/${del}`))
    nowValue()
}









// var inp = document.getElementById('inp')
// var ul = document.getElementById('ul')

//             window.addTask = function () {
//                 var id = push(ref(database,"Todos/")).key
               

//           var obj= {
//             inp:inp.value,
//             id:id

//           }
//           var refrence = ref(database,`Todos/${obj.id}/`)
//           set(refrence,obj)    
//           inp.value = "";

            

           
//         }

//         function getDAta (){

//             var refrence = ref(database,"Todos/")
//             onValue(refrence,function(a){
//                 var arry = Object.values(a.val())
//                 showData(arry);        
//             })
//         }
//         getDAta()

//         function showData(arry){
//             ul.innerHTML= ""
//             ul.innerHTML+= ""
//             for(var i = 0 ; i < arry.length;i++){
//                 ul.innerHTML += 
//                 `
//                 <button onclick="clearVal('${arry[i].id}')" class = "del">Delete</button


//                 `       
//             }
//         }
// window.clearVal=function(){
//     remove(ref(database,`Todos/${del}`))
//     getDAta()
// } 

    