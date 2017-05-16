function chgbkg() {
  var dvcal = document.getElementById('callst');
    dvcal.className = "mtdv";
  }

function chgtxt() {
  var dvcal = document.getElementById('callst');
    dvcal.innerHTML = "<h3> Hoover's  Favorite California Walks</h3> no walks today!";
}
function chgbuttxt() {
  var dvbut = document.getElementById('last_list');
    dvbut.value = "change color";
}
function chgclrtxt() {
  var dvlst = document.getElementById('callst');
    dvlst.style.color = "cyan";
}