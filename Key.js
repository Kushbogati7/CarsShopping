//document.queryselector("section").getattribute("id");
//ans= "expensive cars".

//document.queryselector("html").style.backgroundcolor="#FFAAAA";
//ans=change background color



//get........by... gives  the result in array form.

var hancy = document.getElementsByTagName("button")[0];

hancy.addEventListener("click" , function(){
	console.log("press");
})

var hancy=document.getElementsByTagName("button")[1];
 
hancy.addEventListener("click" , function(){
	console.log("click and clicks");
});






var cart = document.getElementById("nepal");
var cars = document.getElementById("kathmandu");
var ul = document.querySelector("ul");

function saynewcars(){

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(cars.value));
    
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("cancel"));														
													
    ul.appendChild(li);
	li.appendChild(deleteButton);

	deleteButton.onclick = saydelete;//here is the saydelete.

						
	cars.value="";
}

function saycars(){

	 return cars.value.length; 
}

function addlistafterclick(){
		if ( saycars() > 0){
		saynewcars();	
}
}

function addlistafterkeypress(){
     	if (saycars() > 0 && event.which === 13){
		saynewcars();
	}   
}

function saydelete(hello){
	hello.target.parentNode.remove();//1.here target returns the,
					                 //element that triggered the "saydelete".
}
//2.parentNode select the parent of Node/element
//in this case the element that triggered "saydelete" is "deleteButton.onclick" and parent element of the element that triggered (saydelete)
//is function "saynewcars". 




cart.addEventListener("click" , addlistafterclick);
cars.addEventListener("keypress" , addlistafterkeypress);

//<input class="hancy" type="text">
//here input is element and class,type is attribute.