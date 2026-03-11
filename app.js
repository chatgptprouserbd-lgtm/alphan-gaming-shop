import { db } from "./firebase.js";

import { collection, addDoc }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.shop=function(){

document.getElementById("content").innerHTML=`

<h2>👑 ALPHAN SPECIAL OFFERS 👑</h2>

<div class="card">

🟢 ৪ লাখ গ্লোরি – ৭৫০ টাকা

<button onclick="order('4 Lakh Glory')">Order</button>

</div>

<div class="card">

🟢 ৬ লাখ গ্লোরি – ৯৫০ টাকা

<button onclick="order('6 Lakh Glory')">Order</button>

</div>

<div class="card">

🔶 ফুল গিল্ড ম্যাক্স ৭ – ১৩৫০ টাকা

<button onclick="order('Guild Max 7')">Order</button>

</div>

`

}

window.payment=function(){

document.getElementById("content").innerHTML=`

<h2>💳 Payment Method</h2>

<p>bKash: 01861316505</p>

<p>Nagad: 01861316505</p>

`

}

window.support=function(){

document.getElementById("content").innerHTML=`

<h2>📞 Customer Support</h2>

<p>WhatsApp: 01607254046</p>

`

}

window.order=async function(pkg){

let uid=prompt("Enter Clan UID")

let whatsapp=prompt("Enter WhatsApp Number")

let payment=prompt("Enter Payment Transaction ID")

let id="ORD"+Math.floor(Math.random()*999999)

await addDoc(collection(db,"orders"),{

orderID:id,
uid:uid,
whatsapp:whatsapp,
package:pkg,
payment:payment,
status:"Pending"

})

alert("Order submitted\nOrder ID: "+id)

}
