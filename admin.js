import { auth, db }

from "./firebase.js";

import {

signInWithEmailAndPassword

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

collection,
getDocs,
addDoc,
updateDoc,
doc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.login=function(){

let email=document.getElementById("email").value

let password=document.getElementById("password").value

signInWithEmailAndPassword(auth,email,password)

.then(()=>{

loadAdmin()

})

.catch(()=>{

alert("Login failed")

})

}

function loadAdmin(){

document.getElementById("content").innerHTML=`

<button onclick="orders()">Orders</button>

<button onclick="addItem()">Add Item</button>

<button onclick="addCoupon()">Add Coupon</button>

<button onclick="announcement()">Announcement</button>

<div id="adminContent"></div>

`

}

window.orders=async function(){

let snapshot=await getDocs(collection(db,"orders"))

let html=""

snapshot.forEach(d=>{

let o=d.data()

html+=`

<div class="card">

${o.orderID}<br>

${o.uid}<br>

${o.whatsapp}<br>

${o.package}<br>

${o.status}

<br>

<button onclick="approve('${d.id}')">Approve</button>

<button onclick="reject('${d.id}')">Reject</button>

</div>

`

})

document.getElementById("adminContent").innerHTML=html

}

window.approve=async function(id){

await updateDoc(doc(db,"orders",id),{

status:"Approved"

})

orders()

}

window.reject=async function(id){

await updateDoc(doc(db,"orders",id),{

status:"Rejected"

})

orders()

}

window.addItem=async function(){

let name=prompt("Item name")

let price=prompt("Price")

await addDoc(collection(db,"items"),{

name:name,

price:price

})

alert("Item added")

}

window.addCoupon=async function(){

let code=prompt("Coupon code")

let discount=prompt("Discount")

await addDoc(collection(db,"coupons"),{

code:code,

discount:discount

})

alert("Coupon created")

}

window.announcement=async function(){

let msg=prompt("Announcement")

await addDoc(collection(db,"announcements"),{

message:msg

})

alert("Announcement updated")

}
