const jsonString = '{"name": "Marchelle Atienza", "age": 20, "hobbies":["Watching Movies","Playing Games"]}'; 
const jsonObject = JSON.parse(jsonString); 
console.log(jsonObject.name);  
console.log(jsonObject.age);   
const newJsonString = JSON.stringify(jsonObject); 
console.log(newJsonString);  

document.getElementById("name").innerHTML=jsonObject.name;
document.getElementById("age").innerHTML=jsonObject.age;
for(let i=0;i<jsonObject.hobbies.length;i++){
    document.getElementById("hobbies").innerHTML+=`<li>${jsonObject.hobbies[i]}</li>`;
}