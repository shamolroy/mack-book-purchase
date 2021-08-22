const free = document.getElementById("free");
const express = document.getElementById("express");
const shippingcharge = document.getElementById("shipping");
const productPrice = document.getElementById("product").text;
const total = document.getElementById("total");


free.addEventListener("click",function(){
	shippingcharge.innerText = "5";
	update();
});
express.addEventListener("click",function(){
	shippingcharge.innerText = "20";
	update();
});
function update(){
	const shiphingCharge = Number(shippingcharge.innerText);
	const product = 300;
	const totalPrice = shiphingCharge + product;
	total.innerText = totalPrice;
	//total.innerText = (totalPrice / 100) * 80;
}
document.getElementById('coupon-submit').addEventListener('click',function(){
	const couponField = document.getElementById('coupon-input');
	const couponInput = couponField.value;
	if(couponInput == 'stevekaku'){
		total.innerText = (totalPrice / 100) * 80;
	}
	else{
		alert("Invalid Promo Code");
	}
});