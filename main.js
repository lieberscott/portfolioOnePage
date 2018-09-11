const openPort = (evt, projectCategory) => {

  let i;
  let tabcontent;
  let tablinks;
  let tabdetail;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  tabdetail = document.getElementsByClassName("tabdetail");
  for (i = 0; i < tabdetail.length; i++) {
    tabdetail[i].style.display = "none";
  }
  
  document.getElementById(projectCategory).style.display = "block";
  
  evt.currentTarget.className += " active";

}


const openDetail = (evt, projectName) => {
  let i;
  let tabdetail;
  tabdetail = document.getElementsByClassName("tabdetail");
  for (i = 0; i < tabdetail.length; i++) {
    tabdetail[i].style.display = "none";
  }
  document.getElementById(projectName).style.display = "block";
}