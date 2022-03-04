// MRF
// Map


// var student=[{name:"john",marks:30},{name:"alice",marks:40}];
// var res= student.map((mark)=>{
// mark.marks=mark.marks+20;
// return mark;
// });
// console.log(res);

// Filter
var arr=[11,12,13,14];
var odd=arr.filter((score)=>score%2===1);
console.log(odd);

var student=[{name:"john",marks:30},{name:"alice",marks:40},{name:"bob",marks:50}];
var res=student.filter((mark)=>{
    mark.marks=mark.marks>30;
    return mark;
});
console.log(res);
// print the student name greater than 30 marks namew must be printed

var student=[{name:"john",marks:30},{name:"alice",marks:40},{name:"bob",marks:50}];
var res=student.filter((mark)=>mark.marks>30);
    
var output=res.map((mk)=>mk.name);
console.log(output);


// Filter

var num=[11,12,13,14];
var OP=num.reduce((sum,cv)=>sum+cv);
console.log(OP);


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
 request.onload=function(){
   var data=JSON.parse(request.response);
    console.log(data);
//     for (var i=0;i<data.length;i++){
//         console.log(`name:${data[i].name} capital:${data[i].capital}`);
//     }
//     for (var i=0;i<10;i++){
//         console.log(data[i].flag);
//     }
//     for (var i=0;i<data.length;i++){
//         console.log(`Name:${data[i].name}  Lat:${data[i].latlng[0]} Long:${data[i].latlng[1]}`);
//     }
// }
// let countryName=data.filter((country)=>country.region==="Asia")
                    //    .map((country)=>country.name);

// console.log(countryName,);
// for (var i=0;i<countryName.length;i++){
//     console.log(countryName[i].name);
let countryName=data.filter((country)=>country.region==="Asia")
                    .map((country)=>country.population);
console.log(countryName);
var total=countryName.reduce((sum,cv)=>sum+cv);
console.log(`Total Population:${total}`);

}
 