const { ipcRenderer } = require('electron');
const fs = require('fs');

function clickme() {
    var newname = document.getElementById("name").value;
    ipcRenderer.send('call-mainjsfunction', newname);
}

function clickme1() {
    var newann = document.getElementById("announcement").value;
    ipcRenderer.send('call-mainjsfunction1', newann);
}

function clickme2() {
    var newvbx = document.getElementById("featured1").value;
    ipcRenderer.send('call-mainjsfunction2', newvbx);
}

function clickme3() {
    var newvbx = document.getElementById("featured2").value;
    ipcRenderer.send('call-mainjsfunction3', newvbx);
}

function clickme4() {
    var newvbx = document.getElementById("season").value;
    ipcRenderer.send('call-mainjsfunction4', newvbx);
}

function clickme5() {
    var newvbx = document.getElementById("daily1").value;
    ipcRenderer.send('call-mainjsfunction5', newvbx);
}

function clickme6() {
    var newvbx = document.getElementById("daily2").value;
    ipcRenderer.send('call-mainjsfunction6', newvbx);
}

function clickme7() {
    var newvbx = document.getElementById("daily3").value;
    ipcRenderer.send('call-mainjsfunction7', newvbx);
}

function clickme8() {
    var newvbx = document.getElementById("daily4").value;
    ipcRenderer.send('call-mainjsfunction8', newvbx);
}

function clickme9() {
    var newvbx = document.getElementById("daily5").value;
    ipcRenderer.send('call-mainjsfunction9', newvbx);
}

function clickme10() {
    var newvbx = document.getElementById("daily6").value;
    ipcRenderer.send('call-mainjsfunction10', newvbx);
}

function clickme11() {
    var newvbx = document.getElementById("item").value;
    ipcRenderer.send('call-mainjsfunction11', newvbx);
}

function gift1() {
    var newvbx = document.getElementById("giftitem").value;
    ipcRenderer.send('call-mainjsfunction13', newvbx);
}

function gift2() {
    var newvbx = document.getElementById("giftname").value;
    ipcRenderer.send('call-mainjsfunction12', newvbx);
}

function gift3() {
    var newvbx = document.getElementById("giftbox").value;
    ipcRenderer.send('call-mainjsfunction14', newvbx);
}
function vbx() {
    var newvbx = document.getElementById("vbx").value;
    ipcRenderer.send('call-mainjsfunction15', newvbx);
}