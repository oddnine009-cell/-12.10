const validIDs = ["2023001","2023002","2023003"]; 
function login(){
  const sid = document.getElementById("sid").value.trim();
  if(validIDs.includes(sid)){
    window.location.href = "select.html";
  } else {
    document.getElementById("msg").textContent = "学号不在名单中";
  }
}