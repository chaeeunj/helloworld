const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
 if (h1.className === "active") {
   h1.className = "";
 } else {
   h1.className = "active";
 }
} 
/* 만약 h1태그의 className이 active라면 className을 없애주고 
   그렇지 않다면 className을 active로 지정하는 함수 */

h1.addEventListener("click", handleTitleClick); // title.onclick = handleTitleClick


