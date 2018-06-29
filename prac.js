function inserting(){
	if(inp.length!==0){
		var l=document.createElement("li");
		l.className="listele";
		var c=document.createElement("input");
		c.type="checkbox";
		c.className="checking";
		c.name="item";
		l.appendChild(document.createTextNode(inp.value));
		l.appendChild(c);
		u.appendChild(l);
		inp.value="";
	}
	return;

}

function dell(){

	for(var i=0;i<lists.length;i++){
		if(lists[i].lastChild.checked){
			u.removeChild(lists[i]);
		}
	}
}





var u=document.querySelector("ul"); //parent Element of li
var inp=document.getElementById("take"); //childNode of li
var b=document.getElementById("one"); //button Add Me
b.addEventListener("click",inserting);  //event of Button after clicking
var checked = document.querySelectorAll('[name="item"]:checked'); //all selected checkboxes
var lists=document.getElementsByClassName("listele");
var b2=document.getElementById("two");
b2.addEventListener("click",dell);

