// **************************************** start code for about me section ****************************************

// Get all elements with the class "tab-links" and store them in the variable "tablinks"
var tablinks = document.getElementsByClassName("tab-links");

// Get all elements with the class "tab-contents" and store them in the variable "tabcontents"
var tabcontents = document.getElementsByClassName("tab-contents");

// Define a function named "opentab" that takes a parameter "tabname"
function opentab(tabname) {

    // Loop through each "tablink" element in the "tablinks" collection
    for (tablink of tablinks) {
        // Remove the class "active-link" from the current "tablink" element
        tablink.classList.remove("active-link");
    }

    // Loop through each "tabcontent" element in the "tabcontents" collection
    for (tabcontent of tabcontents) {
        // Remove the class "active-tab" from the current "tabcontent" element
        tabcontent.classList.remove("active-tab");
    }

    // Add the class "active-link" to the clicked element (event.currentTarget) which triggered the function
    event.currentTarget.classList.add("active-link");

    // Get the element with the ID matching the "tabname" parameter and add the class "active-tab" to it
    document.getElementById(tabname).classList.add("active-tab");
}

// **************************************** start code for about me section ****************************************



// **************************************** start code for pen menu and close menu ****************************************

var sidemeu = document.getElementById("sidemenu");

function openmenu(){
sidemeu.style.right = "0";
}

function closemenu() {
sidemeu.style.right = "-200px";
}

// **************************************** end code for pen menu and close menu  ****************************************