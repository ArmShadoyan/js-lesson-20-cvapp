"Use strict";

let count = 0;
const cv = {
	personalInfo:{
		name:{},
		surname:{},
		age:{},
	},
	studyInfo:{
		unit:{}
	},
	workExperience:{
		unit:{},
		profession:[],
		time:[]
	},
	computerKnowledges:[],
	ourOpinion:[],
	answer:{},


 getPersonalInfo(name,surname,age){
	cv.personalInfo.name = name.toUpperCase();
	cv.personalInfo.surname = surname.toUpperCase();
	cv.personalInfo.age = age;
},
 getStudyInfo(level){
	level = level.toLowerCase();
	if(level === "middle"){
		cv.ourOpinion.push("Ձեր ուսման մակարդակը բավարար է");
		count += 5;
		cv.studyInfo = level;
	}else if(level === "vocational"){
		cv.ourOpinion.push("Ձեր ուսման մակարդակը լավ է");
		count += 10;
		cv.studyInfo = level;
	}else if(level === "highest"){
		cv.ourOpinion.push("Ձեր ուսման մակարդակը գերազանց է");
		count += 15;
		cv.studyInfo = level;
	}
},
 getWorkExp(professionn,timee){
 cv.workExperience.profession.push(professionn.trim())
 cv.workExperience.time.push(`${timee} տարի`);
	 if(timee > 2 || timee == 3){
		cv.ourOpinion.push("Ձեր աշխատանքաին փորձը բավարար է");
		count += 5;
	}else if(timee > 3 && timee <= 5 ){
		cv.ourOpinion.push("Ձեր աշխատանքաին փորձը լավ է");
		count += 10;
	}else if(timee > 5){
		cv.ourOpinion.push("Ձեր աշխատանքաին փորձը գերազանց է");
		count += 15;
	}else{cv.ourOpinion.push("Շատ վատ է որ չունեք աշխատանքաին փորձ");}
},
 computerKnow(any){
let arr = any.split(',');
if(arr.length === 3 ){
	cv.computerKnowledges.push(arr);
	cv.ourOpinion.push("Ձեր համակարգչաին գիտելիքները բավարար են");
}
else if(arr.length > 3 && arr.length <= 5){ 
	cv.computerKnowledges.push(arr);
	cv.ourOpinion.push("Ձեր համակարգչաին գիտելիքները լավ են");
	count += 15;
}else if(arr.length > 5){
	cv.computerKnowledges.push(arr);
	cv.ourOpinion.push("Ձեր համակարգչաին գիտելիքները գերազանց են են");
	count += 25;
}else{
		cv.ourOpinion.push("Դուք չունեք բավարար քանակի համակարգչաին գիտելիքներ");
}
},
 yourAnswer(){
	if(count >= 20){
		cv.answer = "Շնորհավորում ենք դուք ընդունվել եք աշխատանքի";
	}else{
		cv.answer = "Ցավում ենք ձեր բալերը չեն հերիքել աշխատանքի անցնելու համար";
	}
},
};
cv.getPersonalInfo("Armen","Shadoyan",20);
cv.getStudyInfo("VOCATIONAL");
cv.getWorkExp("   programmer   ",5);
cv.computerKnow("html,css,js,php");
cv.yourAnswer();

console.log(cv,`Ձեր ընդհանուր միավորների քանակաը - ${count}`);
