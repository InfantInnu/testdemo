// XMLHttpRequest
// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function(){
//     var data=JSON.parse(request.response);
//      console.log(data);
    // for (var i=0;i<data.length;i++){
    //     console.log(`name:${data[i].name} capital:${data[i].capital}`);
    // }
    // for (var i=0;i<10;i++){
    //     console.log(data[i].flag);
    // }
//     for (var i=0;i<data.length;i++){
//         console.log(`Name:${data[i].name}  Lat:${data[i].latlng[0]} Long:${data[i].latlng[1]}`);
//     }
// }


// var request=new XMLHttpRequest();
// request.open("GET","https://www.anapioficeandfire.com/api/books/1");
// request.send();
// request.onload=function(){
//     var data=JSON.parse(request.response);
//     //  for (var i=0;i<data.length;i++){
//         console.log(data);
//         console.log(`Authorname:${data.authors}  Bookname:'${data.name}'  ISBN no:${data.isbn} No of pages:${data.numberOfPages} Publisher:${data.publisher}`);
//     }

// Write a JavaScript function to find the most frequent item of an array.Sample array:var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];Sample Output: q ( 5 times )
// var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
// var a = 1;
// var b = 0;
// //var item;
// for (var i=0; i<arr1.length; i++){

//         for (var j=i; j<arr1.length; j++){
        
//                 if (arr1[i] == arr1[j])
//                  b++;
//                 if (a<b)
//                 {
//                   a=b; 
//                   item = arr1[i];
//                 }
//         }
//         b=0;
// }
// console.log(item+" ( " +a +" times ) ") ;




// var arr1=[3,'q','q','q',2,3,'q',3,'q',2,4,9,3];
// // assign the value res for most frequent
//  var res=1;
// // assign the value for maximum count
// var temp=0;
// var item;
// for(var i=0;i<arr1.length;i++){
//     for(var j=i;j<arr1.length;j++){
//         if(arr1[i]==arr1[j])
//         temp++;
//         if(res<temp){
//             res=temp;
//             item=arr1[i];
//         }
//     }
//     temp=0;
// }
// console.log(`${item} (${res} times)`);

// Adding the nth value of the operation

// var sum=0;
// function add(...remaining){
//     console.log(remaining);
//     for (var i=0;i<remaining.length;i++){
//         sum=sum+remaining[i];
//     }
//     return sum;
// }
// console.log(add(12,3,45,32,1,5,));

// // Q-2 Print the number from given value to the end value
// function range(n1,n2){
//     let temp=[];
//     for (var i=n1;i<=n2;i++){
//         temp.push(i);
//     }
//     return temp;
// }
// console.log(range(3,7));


let stu=[
    {
        name:"a",
        dept:"mech",
        mark:[1,2,3,4,5],
    },
    {
        name:"b",
        dept:"mech",
        mark:[1,24,43,14,45],

    },
    {
        name:"c",
        dept:"mech",
        mark:[81,82,3,84,85],
    }]
    let marks=[];
   for(let key in stu){
       mark=+stu[key].mark;
   }

