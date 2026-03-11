import { db }

from "./firebase.js";

import {

collection,
getDocs,
addDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.loadShop = async function(){

let snapshot = await getDocs(collection(db,"items"))

let html="<h2>Shop Items</h2>"

snapshot.forEach(doc=>{

let i=doc.data()

html+=`

<div class="card">

${i.name} – ${i.price} Tk

<br>

<button onclick="order('${i.name}')">
Order
</button>

</div>

`

})

document.getElementById("content").innerHTML=html

}

window.order = async function(pkg){

let uid=prompt("Clan UID")

let whatsapp=prompt("WhatsApp Number")

let payment=prompt("Transaction ID")

let coupon=prompt("Coupon (optional)")

let id="ORD"+Math.floor(Math.random()*999999)

await addDoc(collection(db,"orders"),{

orderID:id,

uid:uid,

whatsapp:whatsapp,

package:pkg,

payment:payment,

coupon:coupon,

status:"Pending"

})

alert("Order submitted\nOrder ID: "+id)

}

window.payment=function(){

document.getElementById("content").innerHTML=`

<h2>Payment</h2>

bKash: 01861316505<br>

Nagad: 01861316505

`

}

window.support=function(){

document.getElementById("content").innerHTML=`

<h2>Support</h2>

WhatsApp: 01607254046

`

}
