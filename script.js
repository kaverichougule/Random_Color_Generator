let container_1=document.querySelector(".container");

for(let i=0;i<30;i++){
    let div1=document.createElement("div");
    // Adding class named div_container to the div
    div1.classList.add('div_container');
    container_1.appendChild(div1)

}

let color_divs=document.querySelectorAll('.div_container');
// console.log(color_div)

color_divs.forEach((single_color_div)=>{
    let color_code_generated=RandomColorGenerator();
    single_color_div.style.backgroundColor="#"+color_code_generated;
})
function RandomColorGenerator(){
    let hexCode="0123456789abcdef"
    let ColorStringGenerated="";
    let lengthOfColorCode=6  //length of the hexCode 
    for(let i=0;i<lengthOfColorCode;i++){
        let randomIndex=Math.floor(Math.random()*16)
        // console.log(randomIndex)
        ColorStringGenerated+=hexCode[randomIndex]
        // console.log(ColorStringGenerated)
    }
    return ColorStringGenerated;
}