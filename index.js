document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const closeId = document.getElementById("close");
const windowId = document.getElementById("window");
const desktopBtn_Text = document.getElementById("desktopbtn-text");
const desktopBtn = document.getElementById("desktop-btn");
const maxId = document.getElementById("max");
const start = document.getElementById("start");
const taskbar_program = document.getElementById("taskbar-program");
const taskbar_program_icon = document.getElementById("taskbarprogram-icon");
closeId.onclick = () => {
    windowId.style.visibility = "hidden";
    taskbar_program.style.visibility = "hidden";
    taskbar_program_icon.style.visibility = "hidden";
}
desktopBtn.onclick = (e) => {
    desktopBtn_Text.style.backgroundColor = "rgb(0,89,255)";
    e.stopPropagation();
}
desktopBtn.ondblclick = () => {
    windowId.style.visibility = "visible";
    taskbar_program.style.visibility = "visible";
    taskbar_program_icon.style.visibility = "visible";
}                          
windowId.onclick = (e) => {
    windowId.style.backgroundColor = "rgb(0, 17, 253)";
    e.stopPropagation();
}
window.onclick = () => {
    desktopBtn_Text.style.backgroundColor = "rgb(0,102,63)";
    windowId.style.backgroundColor = "rgb(130, 130, 130)";
}
maxId.onclick = () => {
    if (windowId.classList.contains("windowmax")) {
        windowId.classList.remove("windowmax");
        maxId.innerText = "1";
    }
    else {
        windowId.classList.add("windowmax");
        maxId.innerText = "2";
    }
}
start.onclick = () => {
    if (start.style.borderStyle === "inset") {
        start.style.borderStyle = "outset";
    }
    else {
        start.style.borderStyle = "inset";
    }
}
taskbar_program.onclick = (e) => {
    if (windowId.style.visibility === "hidden") {
        windowId.style.visibility = "visible";
        windowId.style.backgroundColor = "rgb(0, 17, 253)";
        taskbar_program.style.borderStyle = "outset";
        e.stopPropagation();
    }
    else {
        windowId.style.visibility = "hidden";
        taskbar_program.style.borderStyle = "inset";
    }
}