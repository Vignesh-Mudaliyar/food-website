// console.log("helo");

let welcomeNav = document.getElementById('welcomenav');
let eventsNav = document.getElementById('eventsnav');
let menuNav = document.getElementById('menunav');
let contactsNav = document.getElementById('contactsnav');
let Data =[];
let home = document.getElementById('welcomePage');
let events = document.getElementById('eventsPage');
let menu = document.getElementById('menuPage');
let contact = document.getElementById('contactPage');


 const function1 = (id,nbar) => {
	
	welcomeNav.style.backgroundColor= "";
	
	eventsNav.style.backgroundColor= "";
	menuNav.style.backgroundColor= "";
	contactsNav.style.backgroundColor= "";
	contactsNav.style.color= "";
	eventsNav.style.color= "";
	menuNav.style.color= "";
	welcomeNav.style.color= "";
	nbar.style.backgroundColor="rgba(255,255,255,.8)";
	nbar.style.color="black";
	id.scrollIntoView();
}

welcomeNav.addEventListener("click",() => function1(home,welcomeNav));
eventsNav.addEventListener("click",() => function1(events,eventsNav));
menuNav.addEventListener("click",() => function1(menu,menuNav));
contactsNav.addEventListener("click",() => function1(contact,contactsNav));

	
	
	// hamburger menu
	let hambug = document.getElementById('hambug');
	let subnav2 = document.getElementById('subnav2');

	hambug.addEventListener('click',() =>{
		
			subnav2.classList.toggle("subnav2");
	});


	// validations
	let form = document.getElementById('form');

	form.addEventListener('submit',(e) =>{
		
		e.preventDefault();
		
		if(form.elements['name'].value.length == 0)
			document.getElementById('valiname').innerHTML = "Name is required *";
		else{
			if(form.elements['name'].value.length >= 5)
				document.getElementById('valiname').innerHTML ="";
			else
				document.getElementById('valiname').innerHTML ="Please Enter Atleast 5 Characters *";	
		}
		
		
		if(form.elements['email'].value.length == 0)
			document.getElementById('valiEmail').innerHTML = "Email is required *";
		else
			document.getElementById('valiEmail').innerHTML ="";
		
		
		if(form.elements['number'].value.length == 0)
			document.getElementById('valiNumber').innerHTML = "Phone Number is required *";
		else{
			
			let num = 0;
			for(let i=0;i<=9;i++){
				if(form.elements["number"].value.charCodeAt(i) >= 48 && form.elements["number"].value.charCodeAt(i) <= 57)
					num++;	
			}
			
			if(form.elements['number'].value.length == 10 && num == 10)
				document.getElementById('valiNumber').innerHTML ="";
			else
				document.getElementById('valiNumber').innerHTML ="Please Enter a valid phone number *";	
		}
		
		if(form.elements['date'].value.length == 0)
			document.getElementById('valiDate').innerHTML = "Date is required *";
		else
			document.getElementById('valiDate').innerHTML ="";

		
		if(form.elements['time'].value.length == 0)
			document.getElementById('valiTime').innerHTML = "Time is required *";
		else
			document.getElementById('valiTime').innerHTML ="";
		
		
		let flag=0;
		for(let i=0;i<=4;i++){
			
			if(document.getElementsByClassName('validation')[i].innerHTML != ""){
				flag=1;
			}
		}
		
		if(flag==0){
			
			Data = [...Data,{
				Name:form.elements['name'].value,
				Email:form.elements['email'].value,
				Phone_number:form.elements['number'].value,
				No_of_People:form.elements['people'].value,
				date:form.elements['date'].value,
				Time:form.elements['time'].value,
				}];
				
			let toast = document.getElementById('toast');
			
			toast.className = "showToast";
			console.log(toast);
			
			setTimeout(() => {
				toast.className = toast.className.replace("showToast","");
			},2900)
			
			console.log("Form Data :-", Data);
		
			form.elements['name'].value = "";
			form.elements['email'].value = "";
			form.elements['number'].value = "";
			form.elements['date'].value = "";
			form.elements['time'].value = "";
		}
	})
	
	

	
	// for scrollspy
	let sections = document.querySelectorAll('section');
	const navLink = document.querySelectorAll('#subnav2 ul li');
	let navbar= document.getElementById('navbar');
	
     window.onscroll = () => {
		 
	navbar.style.backgroundColor= "rgba(255,255,255,0.4)";
	 navbar.style.color = "black";
		
		
		sections.forEach((section) => {
		
		
		const height = section.offsetHeight;
		const Tops = section.offsetTop;
	
		
		if(window.scrollY >= Tops-100 && window.scrollY <= Tops + height)
		 {
			
			
			navLink.forEach((li) =>{
				
				if(li.title == section.id){
					
					li.style.backgroundColor = "rgba(255,255,255,0.8)";
					li.style.color= "black";
				}
				else{
					li.style.color= "";
					li.style.backgroundColor="";
				}
				
			})
		}
		
	})
	
	}
	
	
	// for carousel
	let cards = document.getElementById('cards');
	let slideBtnLeft = document.getElementById('slideBtnLeft');
	let slideBtnRight = document.getElementById('slideBtnRight');
	
	
	
	
	
	
	
	slideBtnLeft.addEventListener("click",() => {
		 
		 
		 // cards.scrollLeft -= 400;
		 let card = document.getElementsByClassName('card')[6];
			
			cards.prepend(card);
		
	
	})
	  
	slideBtnRight.addEventListener("click",() => {
		
		
			
			 // cards.scrollLeft += 400;
			 let card = document.getElementsByClassName('card')[0];
			
			cards.append(card);
			 // autoSccroll();
			 
	})
	

	
	 // const autoSccroll = () => {
		 // console.log('hello')
		 // cards.scrollBy(50,0);
		  // // let cr = document.getElementById('card');
		 
		  // // cards.append(cr);
		 // scrollLate = setTimeout(() =>{autoSccroll()},80)
	 // }
	
	
	 
	 
	
