

// document.addEventListener('DOMContentLoaded', function() {
    //     // your code here
    //     // if (document.body.style.backgroundColor == "#191919") {
        //     //     document.getElementById("moon").style.display = "none";
        //     //     document.getElementById("sun").style.display = "block";
        //     // } else {
            //     //     document.getElementById("sun").style.display = "none";
            //     //     document.getElementById("moon").style.display = "block";
            //     // }
            //     console.log("DOM entièrement chargé et analysé");
            //  }, false);
            
            // window.addEventListener("DOMContentLoaded", (event) => {
                //     console.log("DOM entièrement chargé et analysé");
                // });
                
document.getElementById("buttonLightMode").onclick = changeLight();
function changeLight() {
    // Change background color of body
    document.body.style.backgroundColor = "red";
}