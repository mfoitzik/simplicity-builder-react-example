(function() {
    function init() {
      //You need to add a window message listener
      //This gets triggered by the Simplicity Builder(TM) Attribute Editor
      //The Attribute Editor sends the following object in the event data parameter
      // {
      //    command: "run",
      //    function: "callback Name", //this is the value you entered in the callback field of the Attribute Editor setup in the config file
      //    id: abc123 //this is the id of the element that has the data-sbsettings data attribute in it
      // }
      // depending on whether the attributeEditor's mode is set to "constant" or "once", this gets triggered either whenever a parameter in the attribute editor changes or when the OK button is clicked
      window.addEventListener('message', (event) => {
        const getCommand = event.data.command;
        if (getCommand == "run") {
          switch(event.data.function) {
            case 'circleFunction':
              const main = document.getElementById(event.data.id);
              const obj = JSON.parse(main.getAttribute('data-settingsobj'));
              const obj_circle = JSON.parse(main.getAttribute('data-circle'));
              const circle_wrapper = main.querySelector(".cwrap");
              const textHolder = main.querySelector("h1");
              const circle = main.querySelector(".circle");
              const bottomText = main.querySelector("p");
              textHolder.innerText = obj["displaytext"];
              bottomText.innerText = obj["bottomtext"];
              circle_wrapper.classList.remove("left", "center", "right");
              circle_wrapper.classList.add(obj_circle["align"]);
              circle.style.backgroundColor = obj_circle["circlecolor"];
              circle.classList.remove("borderoff", "borderon");
              if (obj_circle["border"] == true) {
                circle.classList.add("borderon");
              } else {
                circle.classList.add("borderoff");
              }
              if (obj["background"] != "") {
                main.style.backgroundImage = "url('" + obj["background"] + "')";
              } else {
                main.style.backgroundImage = "unset";
              }
              main.style.borderWidth = obj["cborder"];
              main.classList.remove("rounded", "shadow");
              if (obj["options"].includes("rounded")) {
                main.classList.add("rounded");
              }
              if (obj["options"].includes("shadow")) {
                main.classList.add("shadow");
              }
              break;
          }
        }
      });
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();

