
// const kneeButton = document.querySelector("#kneeButton");

// const feetButton = document.querySelector("#feetButton");

// const linerButton = document.querySelector("#linerButton");
// const componentButton = document.querySelector("#compButton");
// Main Buttons above
// const kOnekTwoButton = document.querySelector("#kOneTwo");
// const singleAxisButton = document.querySelector("#singleAxis");
// const safeKneeButton = document.querySelector("#safeKnee");
// const polyKneeButton = document.querySelector("#polyKnee");
// const MPKButton = document.querySelector("#MPK");


// second choice buttons above
// const secondaryChoices = document.querySelectorAll('.toggle-heading');
// console.log("querySelectors", secondaryChoices);


// const clearSelect = document.querySelector("#resPage");
// abvoe is my attempt at creating a togglable selection


// kneeButton.addEventListener("click", () => showKnees());
// kneeButton.addEventListener("click", () => toggleSelectionsFlex("secButtons"));
// kneeButton.addEventListener("click", () => toggleSelectionsBlock("nav"));


// noShowOne

// feetButton.addEventListener("click", () => showExtFriction());
// linerButton.addEventListener("click", () => showExtFricManChoice());
// componentButton.addEventListener("click", () => showComponents());
// Main event handlers above



// kOnekTwoButton.addEventListener("click", () => showkOnekTwo());
// kOnekTwoButton.addEventListener("click", () => toggleSelectionsFlex("kOne"));


// singleAxisButton.addEventListener("click", () => showSingleAxis());
// singleAxisButton.addEventListener("click", () => toggleSelectionsBlock("singleAxis"));


// safeKneeButton.addEventListener("click", () => showSafetyKnee());
// safeKneeButton.addEventListener("click", () => toggleSelectionsBlock("safety"));


// polyKneeButton.addEventListener("click", () => showPolycentricKnee());
// polyKneeButton.addEventListener("click", () => toggleSelectionsBlock("polycentric"));

// MPKButton.addEventListener("click", () => showMPK());
// MPKButton.addEventListener("click", () => toggleSelectionsBlock("mpkKnee"));

// console.log("EventHandlers");

// secondary event handlers buttons above



// The above event handler will remove the selected section, reverting the sections to initial values, without reloading.



// function toggleSelectionsFlex(name) {
//   console.log("Show 1");
//   let e = document.getElementsByClassName(name);
//      Array.from(e).forEach((x) => {
//       if (x.style.display === "flex") {
//         x.style.display = "none";
//       } else {
//         x.style.display = "flex";
//       }
//     })
//   }

//   function toggleSelectionsBlock(name) {
//     console.log("Show 2");
//     let e = document.getElementsByClassName(name);
//        Array.from(e).forEach((x) => {
//         if (x.style.display === "block") {
//           x.style.display = "none";
//         } else {
//           x.style.display = "block";
//         }
//       })
//     }





  function showkOnekTwo() {
    console.log("Show K1/K2");

  }

  function showSingleAxis() {
    console.log("Show Single Axis Knees");

  }

  function showSafetyKnee() {
    console.log("Show Safety Knees");

  }

  function showPolycentricKnee() {
    console.log("Show Polycentric Knees");

  }

  // function showMPK() {

  //   console.log("Show MPK's");

  // }


































// function showKnees() {
//   console.log("Show 1")
  // document.getElementById("kOneTwo").classList.add('secButtons');
  // document.getElementById("singleAxis").classList.add('secButtons');
  // document.getElementById("safeKnee").classList.add('secButtons');
  // document.getElementById("polyKnee").classList.add('secButtons');
  // document.getElementById("MPK").classList.add('secButtons');
  // document.getElementById("kneeButton").classList.add('clear');


  // const clearKneesButton = document.querySelector(".clear");
  // clearKneesButton.addEventListener("click", () => clearKnees());

  //       function clearKnees() {
  //           console.log("Clear Knee Cards");
  //           document.getElementById("kOneTwo").style.cssText = "display: inherited;"
  //           document.getElementById("singleAxis").style.cssText = "display: inherited;"
  //           document.getElementById("safeKnee").style.cssText = "display: inherited;"
  //           document.getElementById("polyKnee").style.cssText = "display: inherited;"
  //           document.getElementById("MPK").style.cssText = "display: inherited;"
  //           document.getElementById("kneeButton").classList.add('nextClass');
  //           document.getElementById("kneeButton").classList.remove('clear');


  //           const newClass = document.querySelector(".nextClass");
  //           newClass.addEventListener("click", () => nextClassFun());

  //           function nextClassFun() {
  //               document.getElementById("kOneTwo").classList.add('secButtons');
  //               document.getElementById("singleAxis").classList.add('secButtons');
  //               document.getElementById("safeKnee").classList.add('secButtons');
  //               document.getElementById("polyKnee").classList.add('secButtons');
  //               document.getElementById("MPK").classList.add('secButtons');
  //               document.getElementById("kneeButton").classList.add('clear');

  //               console.log("Show Knee Cards Inner");
  //               document.getElementById("kOneTwo").style.cssText = "display: flex;";
  //               document.getElementById("singleAxis").style.cssText = "display: flex;";
  //               document.getElementById("safeKnee").style.cssText = "display: flex;";
  //               document.getElementById("polyKnee").style.cssText = "display: flex;";
  //               document.getElementById("MPK").style.cssText = "display: flex;";
  //               showKneesOne();
  //           }



  //       }

  // console.log("Show Knee Cards");
  // document.getElementById("kOneTwo").style.cssText = "display: flex;"
  // document.getElementById("singleAxis").style.cssText = "display: flex;"
  // document.getElementById("safeKnee").style.cssText = "display: flex;"
  // document.getElementById("polyKnee").style.cssText = "display: flex;"
  // document.getElementById("MPK").style.cssText = "display: flex;"

  // }

  // function showKneesOne() {
  //   console.log("Show 2")
  //     document.getElementById("kOneTwo").classList.add('secButtons');
  //     document.getElementById("singleAxis").classList.add('secButtons');
  //     document.getElementById("safeKnee").classList.add('secButtons');
  //     document.getElementById("polyKnee").classList.add('secButtons');
  //     document.getElementById("MPK").classList.add('secButtons');
  //     document.getElementById("kneeButton").classList.add('clear');
  //     document.getElementById("kneeButton").classList.remove('clear');
  //     document.getElementById("kneeButton").classList.remove('nextClass');

    


  //     console.log("Show Knee One Cards");
  //     document.getElementById("kOneTwo").style.cssText = "display: flex;"
  //     document.getElementById("singleAxis").style.cssText = "display: flex;"
  //     document.getElementById("safeKnee").style.cssText = "display: flex;"
  //     document.getElementById("polyKnee").style.cssText = "display: flex;"
  //     document.getElementById("MPK").style.cssText = "display: flex;"

  // }


//   $(document).ready(function(){
//     $(".mainChoice").click(function(){
//       $(".collapse").collapse('toggle');
//     });
//     });

    // $('.mainChoice').each(function(){
    //     if ($(this).hasClass('secButtons')) {
    //         $(this).collapse('toggle');
    //     }
    // });

// function clearKnees() {
//     console.log("Clear Knee Cards");
//     document.getElementById("kOneTwo").style.cssText = "display: none;"
//     document.getElementById("singleAxis").style.cssText = "display: none;"
//     document.getElementById("safeKnee").style.cssText = "display: none;"
//     document.getElementById("polyKnee").style.cssText = "display: none;"
//     document.getElementById("MPK").style.cssText = "display: none;"
// }



  

    // secondaryChoices.forEach((btn) => {
    //   btn.addEventListener('click', (e) => {
    //     descriptionBox = btn.nextElementSibling;
    //     descriptionBox.style.display === "flex" ? descriptionBox.style.display = 'none' :
    //       descriptionBox.style.display = 'flex'
    //   });
    // });
  



//   document.getElementById("fricExt").style.cssText = "display: flex; padding: 25px; margin: 25px;"
//   document.getElementById("fricExtMan").style.cssText = "display: flex; padding: 25px; margin: 25px;"
//   document.getElementById("fricExtStan").style.cssText = "display: flex; padding: 25px; margin: 25px;"
//   document.getElementById("fricExtStanLock").style.cssText = "display: flex; padding: 25px; margin: 25px;"