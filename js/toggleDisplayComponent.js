const toggleKnees = document.querySelector(".mainChoice");
const toggleFeet = document.querySelector(".toggleOne");
const toggleLiners = document.querySelector(".toggleTwo");
const toggleComponents = document.querySelector(".toggleThree");


toggleKnees.addEventListener("click", () => toggleProgram(".toggle"));
toggleFeet.addEventListener("click", () => toggleProgram(".toggleOne"));
toggleLiners.addEventListener("click", () => toggleProgram(".toggleTwo"));
toggleComponents.addEventListener("click", () => toggleProgram(".toggleThree"));





function toggleProgram(name){

  let e = document.querySelectorAll(name);

console.log(e,"e")

function actualToggle(){
  e.forEach(item => {

    console.log(item,"item");

    let toggleTgt = item.nextElementSibling;
    
    console.log(toggleTgt, "nextElementSibling");

    toggleTgt.classList.toggle('noShow');

  });
} 
    actualToggle(name);

    console.log(actualToggle,"Toggle Successful!");
  }
























// toggleBtn.forEach(item => {
//   item.addEventListener('click', event => {
//     let toggleTgt = item.nextElementSibling;
//     toggleTgt.classList.toggle('noShow');
//   })
// });
// console.log("Toggle Successful!");
// }

    // export {toggleProgram};


// function toggleProgram(name) {















// const toggleHeading = document.querySelector(".toggle");

// toggleHeading.addEventListener("click", () => toggleSelectionsBlock("noShow"));

//   function toggleSelectionsBlock(name) {
//     console.log("Show 2");
//     let e = document.getElementsByClassName(name);
//        Array.from(e).forEach((x) => {
  // let toggleTgt = item.nextElementSibling;

  // toggleTgt.classList.toggle('noShow');
  //           x.style.display = "block";
//         } else {
//           x.style.display = "none";
//         }
//       })
//     };





// const toggleBtn = document.querySelectorAll('.toggle');





// toggleBtn.forEach(item => {
//   item.addEventListener('click', event => {
//     let toggleTgt = item.nextElementSibling;
//     if (toggleTgt.classList === 'noShow'); {
//       toggleTgt.classList = 'show'; 
//     } else {
//       toggleTgt.classList = "noShow";
//       }
//     }
//   })
// });
// console.log("Toggle Successful!");
// }





// export {toggleProgram};


// function toggleProgramTwo (){

//   const toggleBtn = document.querySelectorAll('.toggle-one');
  
//   toggleBtn.forEach(item => {
//     item.addEventListener('click', event => {
//       let toggleTgt = item.nextElementSibling;
//       toggleTgt.classList.toggle('noShowOne');
//     })
//   });
//   console.log("Toggle Successful!");
//   }

//   export {toggleProgramTwo};








// const toggleBtn = document.querySelectorAll('.toggle-heading');

// toggleBtn.forEach(item => {
//   item.addEventListener('click', event => {
//     let toggleTgt = item.nextElementSibling;
//     toggleTgt.classList.toggle('noShow');
//   })
// });
// console.log("Toggle Successful!");





// let classChange = function(elementId) {
//   let button = document.getElementById(elementId)
//       console.log(button,"button");
//   let box = document.getElementById(elementId).nextElementSibling.id
//       console.log(box,"box");
// // let toggleTgt = document.querySelector('.toggle-heading').nextSibling;


//  button.addEventListener("click", function() {
//    box.classList.toggle("show");
//  });
// }

  // const call = function(elementId)
  // {

  //   console.log("Inside Function");
  //   let valueOfInput = document.getElementById(elementId).id
  //   console.log(valueOfInput, "Value of Input");
  //   console.log(typeof valueOfInput, "Value of Input");

  //   let displayObject = JSON.stringify(valueOfInput);
  //   console.log(displayObject, "displayObject");
  //   console.log(typeof displayObject, "type of display");

  //   let stringDisplayObject = JSON.parse(displayObject);
  //   console.log(stringDisplayObject, "stringDisplayObject");
  //   console.log(typeof stringDisplayObject, "type of display");


  //   changeDisplayToggle();


  // }

  // function changeDisplayToggle(){

  //   console.log(call, "call value");

  //   if (call.style.display === "block") {
  //     call.style.display = "none";
  //     } else { 
  //       call.style.display = "block";
  //     };
  //     console.log(call.style.display);
  // }
  
  
//   var call = function(elementId)

// {
//  var valueOfInput = document.getElementById(elementId).id
//     alert(valueOfInput);
// }


















// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

// function toggleItemDisplay(){
//   function blatchNav(){

//   const blatchfordNavigator = document.getElementById("BlatchfordFeet");

//   if (blatchfordNavigator.style.display === "block") {
//     blatchfordNavigator.style.display = "none";
//   } else { 
//     blatchfordNavigator.style.display = "block";
//   };
//   console.log(blatchfordNavigator.style.display);
//   };


// function proteorNav(){
  
//   const proteorNavigator = document.getElementById("ProteorFeet");

//   if (proteorNavigator.style.display === "block") {
//     proteorNavigator.style.display = "none";
//   } else { 
//     proteorNavigator.style.display = "block";
//   };
//   console.log(proteorNavigator.style.display);

// };

// blatchNav();
// proteorNav();


// }

// function toggleItemDisplay(){




  // const blatchfordNavigator = document.getElementById("BlatchfordFeet");

// console.log("Start");

//   const call = function(elementId)
//   {
//     console.log("Inside Function");
//    let valueOfInput = document.getElementById(elementId).id
//       alert(valueOfInput);

//       if (valueOfInput.style.display === "block") {
//         valueOfInput.style.display = "none";
//       } else { 
//         valueOfInput.style.display = "block";
//       };
//       console.log(valueOfInput.style.display);


//   }


// }

// var call = function(id){
//   var x = document.getElementById(id).value;
//   alert(x);
// }



 

   






















// function feetChoices (){

// let blatchfordFeetChoices = document.getElementById('allFeetShow');

// if (blatchfordFeetChoices.style.display === "none") {
    
//     const allFeet = 
//     `
//     <nav id="BlatchfordFeet>
       
//         <a id="AllBlatch" class=" indivChoice feet"  >
//         All Blatchford Feet
//         </a>
       
         
//             <a id="BlatchKTwoHydrau" class=" indivChoice feet"  >
//               K2 Flexible Keel with Hydraulic multiaxial ankle:     L5968,  L5972                  </a>
         
         
//             <a id="BlatchKThreeHydrauMultiax"class="indivChoice  feet"  >
//               K3 Flexwalk with Hydraulic Multiaxial ankle:     L5968,  L5981
//             </a>
         
         
//             <a class="indivChoice  feet" id="BlatchKThreeHydrauMultiVert"  >
//               K3 Flexwalk with Hydraulic Multiaxial ankle and Vertical Shock:     L5968,  L5981, L5988
//             </a>
         
           
//               <a id="BlatchKTwoFlexHeel" class=" indivChoice feet"  >
//                 K2 Flexible Heel:     L5972
               
           
//               <a id="BlatchK2KeelMultiax"class="indivChoice  feet"  >
//                 K2 Flexible Keel with Multiaxial Rotation:     L5972, L5986
//               </a>
           

           
//               <a id="BlatchMPK" class="indivChoice  feet"  >
//                 Microprocessor Feet:     L5973
//               </a>
           
         
//             <a class="indivChoice  feet" id="BlatchFlex"  >
//               Flexfoot:     L5980
//             </a>
         
           
//               <a id="BlatchFlex" class=" indivChoice feet"  >
//                 Flexwalk:     L5981
               
           
//               <a id="BlatchHydraulicMultiax"class="indivChoice  feet"  >
//                 Flexwalk with Multiaxial Ankle:     L5981 L5986
//               </a>
           
           
//               <a id="BlatchVertAx" class="indivChoice  feet"  >
//                 Vertical Shock with Axial Rotation:     L5984,  L5987
//               </a>
           
         
//             <a class="indivChoice  feet" id="BlatchMisc"  >
//               Coding Group:     Miscellaneous
//             </a>
         
     
//   </nav>
//     `;
//     document.getElementById("allFeetShow").innerHTML = allFeet;
// } else {
    
// }

// }