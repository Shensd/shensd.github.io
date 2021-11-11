// reopens the last opened tab
// let id = location.hash.split("#")[1];
// if(id != "") {
//     let ele = document.getElementById(`ng-${id}`);
//     if(ele) {
//         ele.getElementsByClassName("cv-section-body")[0].classList.toggle("cv-enabled");
//     }
// }

for(let section of document.getElementsByClassName("cv-section")) {
    let section_title = section.getElementsByClassName("cv-section-title")[0];
    let section_body = section.getElementsByClassName("cv-section-body")[0];

    section_title.addEventListener("click", (e) => {
        section_body.classList.toggle("cv-enabled");
    });
}

// window.onload = () => {
//     setTimeout(() => {
//         for(let section of document.getElementsByClassName("cv-section")) {
//             section.id = "";
//         }
//     }, 1000);
// }