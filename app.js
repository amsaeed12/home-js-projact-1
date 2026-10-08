// function highlightNotices() {

//     let notice = document.getElementsByTagName("p");

//     for (let i = 0; i < notice.length; i++) {
//         console.log(notice[i].innerHTML);

//         notice[i].className = "notice";

//     }
// }

function highlightRules() {
    let rules = document.getElementById("studentRules");

    let peregraphs = rules.getElementsByTagName("p");

    for (let i = 0; i < peregraphs.length; i++) {
        console.log(peregraphs[i].innerHTML);
        

        peregraphs[i].className = "rule";
    }
}

function highlightCourse() {
    let courseInfo = document.getElementById("courseInfo");

    let peregraphs = courseInfo.getElementsByTagName("p");

    for (let i = 0; i < peregraphs.length; i++) {
        console.log(peregraphs[i].innerHTML);

        peregraphs[i].className = "course";
    }
}