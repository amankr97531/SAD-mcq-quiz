window.onload = function() {
	show(0);
}

let questions = [
		 {
			 
	 id:1,
		 question:"Q1:There are ..... steps in the Systems Development Life Cycle (SDLC) ",
		 answer: "6",
		 options:[
		   "4",
		   "5",
		   "6",
		   "10"]
	     },
{
	 id:2,
		question:"Q2:The first step in the System Development Life Cycle(SDLC) is",
		 answer: "Problem/Opportunity Identification",
		 options:[
		   "Analysis",
		   "Design",
		   "Problem/Opportunity Identification",
		   "Development and Documentations"]
	     },
		 {
	id:3,		 
		 question:"Q3: ........... determines whether the project shiuld go forward",
		 answer: "Feasibility Assessment",
		 options:[
		   "Feasibility Assessment",
		   "Opportunity Identification",
		   "System evaluation",
		   "Program Specification"]
	     },
		 {
	id:4,		 
		question:"Q4:......... is provided by Technical writers for the new system",
		 answer: "Documentation",
		 options:[
		   "Programs",
		   "Networks",
		   "Analysis",
		   "Documentation"]
	     },
		 { 
	id:5,		 
		question:"Q5: ........... is responsible for design and implementation of database structure",
		 answer: "Database Administrator",
		 options:[
		   "Programmer",
		   "Project Manager",
		   "Technical Writers",
		   "Database Administrator"]
	     },	
		 {		 
	id:6,		 
		question:"Q6:Debugging is ................................",
		 answer: "Finding and correcting errors in the program code",
		 options:[
		   "Creating program code",
		   "Finding and correcting errors in the program code",
		   "Identifying the task to be computerized",
		   "Creating the algorithm"]	
	     },	 
		 
	{
	id:7,		 
		question:"Q7:The largest precentage of total life cycle cost of software is",
		 answer: "Analysis Cost",
		 options:[
		   "Analysis Cost",
		   "Design Cost",
		   "Maintenance Cost",
		   "Coding Cost"]
	     },	 
		 
		 {
	id:8,		 
		question:"Q8:Traditionally the only phase of software development where a formal approach is used as",
		 answer: "Programming",
		 options:[
		   "Programming",
		   "Design",
		   "Planning",
		   "Testing"]
	     },	 
		 
		  {
	id:9,		 
		question:"Q9:............. may not be required by a System Analyst",
		 answer: "Programming language Skill",
		 options:[
		   "Programming language Skill",
		   "Technical Skill",
		   "Communication Skill",
		   "Management Skill"]
	     },	 
		 {
	id:10,		 
		question:"Q10:Economic feasibility is often reffered as ........ analysis",
		 answer: "Cost benefits",
		 options:[
		   "Target benefits",
		   "flexible benefits",
		   "Cost benefits",
		   "None of these"]
	     },	 
		 {
	id:11,		 
		question:"Q11:The first step in SDLC is",
		 answer: "Problem Identification",
		 options:[
		   "Design",
		   "Analysis",
		   "Development",
		   "Problem Identification"]
	     },	 	 
		 {
	id:12,		 
		question:"Q12:......... testing must precede system testing",
		 answer: "Module/Subsystem",
		 options:[
		   "Module/Subsystem",
		   "Process",
		   "program",
		   "None of these"]
	     },	 	 
		 
		  {
	id:13,		 
		question:"Q13:Circle represents ........ in Data flow diagram",
		 answer: "Process",
		 options:[
		   "Execution",
		   "Runtime",
		   "Process",
		   "True/False"]
	     },	 	 
		 
		 	  {
	id:14,		 
		question:"Q14:SDLC is understood as",
		 answer: "System development life cycle",
		 options:[
		   "System development life cycle",
		   "System development life communication",
		   "System development life computing",
		   "None of these"]
	     },	 	 
		 
		 
		 	  {
	id:15,		 
		question:"Q15:A ......... is a person with unique skills who plays a major role in business benefit from computer technology",
		 answer: "System Analyst",
		 options:[
		   "System Analyst",
		   "Developer",
		   "Tester",
		   "All of these"]
	     },	 	 
		 
		 	  {
	id:16,		 
		question:"Q16: ........... refers to the set of activities that ensure the correctly implementation of a software for a specific function",
		 answer: "Verification",
		 options:[
		   "Validation",
		   "Verification",
		   "Both Validation and Verification",
		   "None of these"]
	     },	 	 
		 
		  	  {
	id:17,		 
		question:"Q17:............ will ensure accuracy of input a computer",
		 answer: "Validation",
		 options:[
		   "Validation",
		   "Verification",
		   "Both Validation and Verification",
		   "None of these"]
	     },	 	 
		 
		   {
	id:18,		 
		question:"Q18:System boundary seperates the system from its .........",
		 answer: "Enviroment",
		 options:[
		   "without Enviroment",
		   "Enviroment",
		   "Both without Enviroment and Enviroment",
		   "None of these"]
	     },	 

  {
	id:19,		 
		question:"Q19:............. is the first phase of software development",
		 answer: "Preliminary Investigation",
		 options:[
		   "Preliminary Investigation",
		   "Planning",
		   "Development",
		   "Operations and Maintenance"]
	     },	 

{
	id:20,		 
		question:"Q20:CASE is understood as ",
		 answer: "Computer aided software engineering",
		 options:[
		   "Computer aided software enviorment",
		   "Computer aided software engineering",
		   "Computer aided system enviroment",
		   "None of these"]
	     },	 		 
 ];

function submitForm(e){
	e.preventDefault();
	let name = document.forms["welcome_form"]["name"].value;
	
	sessionStorage.setItem("name", name);
	
	location.href = "quiz.html";
	
}


let question_count = 0;

let point = 0;


function next() {
	
	let user_answer = document.querySelector("li.option.active").innerHTML;
	
     if(user_answer == questions[question_count].answer){
		point += 1;
		
		sessionStorage.setItem("points", point);
	 }
	 
	 
	if (question_count == questions.length - 1){
		sessionStorage.setItem("time", `${minutes} min ${seconds} sec`);
		clearInterval(mytime);
		location.href = "end.html";
		return;
	}
	
	
	

	

	
	question_count ++;
	show(question_count);
	
	
	
}
 function show(count) {
	 let question = document.getElementById("questions");
	 
	 
	 //question.innerHTML = "<h2>" + questions[count].question + "</h2>";
	 
	 
	 question.innerHTML = `
	 ${questions[count].question}
	 
	  <ul class="option_group">
				    <li class="option">${questions[count].options[0]}</li>
					<li class="option">${questions[count].options[1]}</li>
					<li class="option">${questions[count].options[2]}</li>
					<li class="option">${questions[count].options[3]}</li>
				</ul>
	 
	 `;
	 
	 toggleActive();
 
 }
 
 function toggleActive() {
	 let option = document.querySelectorAll("li.option");
	 
	 for(let i=0; i< option.length; i++) {
		 option[i].onclick = function() {
			 for(let j=0; j< option.length; j++){
				if(option[j].classList.contains("active")) {
					option[j].classList.remove("active");
				}
			 }
			 option[i].classList.add("active");
		 }
	 }
 }	 