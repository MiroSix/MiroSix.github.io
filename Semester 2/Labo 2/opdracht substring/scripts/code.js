
const setup = () => {
    let btnSubstring=document.getElementById("btnSubstring");

    btnSubstring.addEventListener("click", substring);
}

substring = () => {
    let txtOutput=document.getElementById("txtOutput");
    let txtLinks=document.getElementById("txtLinks");
    let txtSubstring1=document.getElementById("txtSubstring1");
    let txtSubstring2=document.getElementById("txtSubstring2");

    txtOutput.innerHTML = txtLinks.value.substring(txtSubstring1.value, txtSubstring2.value);
}


window.addEventListener('load',setup); 
