 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
 import {
    getDatabase,
    ref,
    set,
    get,
    child,
 } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";


 document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
       event.preventDefault();



       if (
          document.getElementById("options").value === "selectplz" ||
          document.getElementById("projectName").value === "" ||
          document.getElementById("projectDescription").value === ""
       ) {
          event.preventDefault();
          alert("Please fill All Fields");
       } else {
          document.getElementById("left").style.display = "none";
          document.getElementById("right").style.display = "block";
       }


       // Get the value entered in the input element
       var inputData = document.getElementById("projectName").value;

       // Get the selected option value
       var selectedOption = document.getElementById("options").value;

       // Get the value entered in the textarea element
       var textareaData = document.getElementById("projectDescription").value;

       // Check if the input data is not empty
       if (inputData.trim() !== "") {
          // Store the input data in a variable
          var storedData = "<div class='displayedData'>Project Name: </div> <span style='font-size: 24px;'>" + inputData + "</span><br/>" +
             "<div class='displayedData'>Project Type: </div> <span style='font-size: 24px;'>" + selectedOption + "</span><br/>" +
             "<div class='displayedData'>Project Description: </div> <span style='font-size: 24px;'>" + textareaData + "</span>";

          // Print the stored data in the "right" div
          document.getElementById("inputedData").innerHTML = storedData;
       }

       // ------------------------------------------------------------------------------------------------------

       if (document.getElementById("options").value === "website") {
          console.log("Please select");
          // Paste the code from Firebase
          const firebaseConfig = {
             apiKey: "AIzaSyA-naCQkHZQy-bQqvzM4FWxCsm0f4FB0t4",
             authDomain: "website-6a1fe.firebaseapp.com",
             databaseURL: "https://website-6a1fe-default-rtdb.firebaseio.com",
             projectId: "website-6a1fe",
             storageBucket: "website-6a1fe.appspot.com",
             messagingSenderId: "990621371925",
             appId: "1:990621371925:web:ad8b2e40c229f4fe84081c",
          };
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);

          // Get a reference to the database service
          const db = getDatabase(app);
          const dbRef = ref(getDatabase(app));
          get(child(dbRef, "checklist/"))
             .then((snapshot) => {
                const data = snapshot.val();
                displayDataInElement(data);
                document.getElementById("saveData").style.display = "block";
                document.getElementById("changeData").style.display = "block";
             })
             .catch((error) => {
                console.error(error);
             });



          // Function to display the data in the specified element
          function displayDataInElement(data) {
             const rightElement = document.getElementById("checklist");
             let htmlContent = "";
             data.forEach((section) => {
                htmlContent += `<h3><label><input type="checkbox" class="title-checkbox"> ${section.title}</label></h3>`;
                htmlContent += "<ul>";
                section.items.forEach((item) => {
                   htmlContent += `<li><label><input type="checkbox" class="item-checkbox"> ${item}</label></li>`;
                });
                htmlContent += "</ul><br>"; // Add a line break after each list
             });
             rightElement.innerHTML = htmlContent;

             // Add event listeners to checkboxes
             const titleCheckboxes =
                document.querySelectorAll(".title-checkbox");
             const itemCheckboxes =
                document.querySelectorAll(".item-checkbox");

             titleCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener("click", function () {
                   const listItem = this.closest("h3").nextElementSibling;
                   const itemCheckboxes =
                      listItem.querySelectorAll(".item-checkbox");
                   itemCheckboxes.forEach((itemCheckbox) => {
                      itemCheckbox.checked = this.checked;
                   });
                });
             });

             itemCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener("click", function () {
                   const listItem = this.closest("ul");
                   const titleCheckbox =
                      listItem.previousElementSibling.querySelector(
                         ".title-checkbox"
                      );
                   const itemCheckboxes =
                      listItem.querySelectorAll(".item-checkbox");
                   let allItemsChecked = true;
                   itemCheckboxes.forEach((itemCheckbox) => {
                      if (!itemCheckbox.checked) {
                         allItemsChecked = false;
                      }
                   });
                   titleCheckbox.checked = allItemsChecked;
                });
             });
          }
       }
       // ------------------------------------------------------------------------------------------------------

       if (document.getElementById("options").value === "saas") {
          console.log("Please select");
          // Paste the code from Firebase
          const firebaseConfig = {
             apiKey: "AIzaSyAhNQSHamxkHbORGRbCWtSQOO1aBzs8yxs",
             authDomain: "saas-f6717.firebaseapp.com",
             databaseURL: "https://saas-f6717-default-rtdb.firebaseio.com",
             projectId: "saas-f6717",
             storageBucket: "saas-f6717.appspot.com",
             messagingSenderId: "483788601393",
             appId: "1:483788601393:web:93cb85be6157e4be313d10",
          };

          // Initialize Firebase
          const app = initializeApp(firebaseConfig);

          // Get a reference to the database service
          const db = getDatabase(app);
          const dbRef = ref(getDatabase(app));
          get(child(dbRef, "checklist/"))
             .then((snapshot) => {
                const data = snapshot.val();
                displayDataInElement(data);
                document.getElementById("saveData").style.display = "block";
                document.getElementById("changeData").style.display = "block";
             })
             .catch((error) => {
                console.error(error);
             });



          // Function to display the data in the specified element
          function displayDataInElement(data) {
             const rightElement = document.getElementById("checklist");
             let htmlContent = "";
             data.forEach((section) => {
                htmlContent += `<h3><label><input type="checkbox" class="title-checkbox"> ${section.title}</label></h3>`;
                htmlContent += "<ul>";
                section.items.forEach((item) => {
                   htmlContent += `<li><label><input type="checkbox" class="item-checkbox"> ${item}</label></li>`;
                });
                htmlContent += "</ul><br>"; // Add a line break after each list
             });
             rightElement.innerHTML = htmlContent;

             // Add event listeners to checkboxes
             const titleCheckboxes =
                document.querySelectorAll(".title-checkbox");
             const itemCheckboxes =
                document.querySelectorAll(".item-checkbox");

             titleCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener("click", function () {
                   const listItem = this.closest("h3").nextElementSibling;
                   const itemCheckboxes =
                      listItem.querySelectorAll(".item-checkbox");
                   itemCheckboxes.forEach((itemCheckbox) => {
                      itemCheckbox.checked = this.checked;
                   });
                });
             });

             itemCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener("click", function () {
                   const listItem = this.closest("ul");
                   const titleCheckbox =
                      listItem.previousElementSibling.querySelector(
                         ".title-checkbox"
                      );
                   const itemCheckboxes =
                      listItem.querySelectorAll(".item-checkbox");
                   let allItemsChecked = true;
                   itemCheckboxes.forEach((itemCheckbox) => {
                      if (!itemCheckbox.checked) {
                         allItemsChecked = false;
                      }
                   });
                   titleCheckbox.checked = allItemsChecked;
                });
             });
          }
       }

       // ------------------------------------------------------------------------------------------------------
       if (document.getElementById("options").value === "ecommerce") {
          console.log("Please select");
          // Paste the code from Firebase
          const firebaseConfig = {
             apiKey: "AIzaSyD8eK6RqAWXjM0Y9SWowsrByitReIoH8ig",
             authDomain: "ecommerce-94e14.firebaseapp.com",
             databaseURL:
                "https://ecommerce-94e14-default-rtdb.firebaseio.com",
             projectId: "ecommerce-94e14",
             storageBucket: "ecommerce-94e14.appspot.com",
             messagingSenderId: "90087628802",
             appId: "1:90087628802:web:c15cfed8cc0127640c071b",
          };

          // Initialize Firebase
          const app = initializeApp(firebaseConfig);

          // Get a reference to the database service
          const db = getDatabase(app);
          const dbRef = ref(getDatabase(app));
          get(child(dbRef, "checklist/"))
             .then((snapshot) => {
                const data = snapshot.val();
                displayDataInElement(data);
                document.getElementById("saveData").style.display = "block";
                document.getElementById("changeData").style.display = "block";

             })
             .catch((error) => {
                console.error(error);
             });



          // Function to display the data in the specified element
          function displayDataInElement(data) {
             const rightElement = document.getElementById("checklist");
             let htmlContent = "";
             data.forEach((section) => {
                htmlContent += `<h3><label><input type="checkbox" class="title-checkbox"> ${section.title}</label></h3>`;
                htmlContent += "<ul>";
                section.items.forEach((item) => {
                   htmlContent += `<li><label><input type="checkbox" class="item-checkbox"> ${item}</label></li>`;
                });
                htmlContent += "</ul><br>"; // Add a line break after each list
             });
             rightElement.innerHTML = htmlContent;

             // Add event listeners to checkboxes
             const titleCheckboxes =
                document.querySelectorAll(".title-checkbox");
             const itemCheckboxes =
                document.querySelectorAll(".item-checkbox");

             titleCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener("click", function () {
                   const listItem = this.closest("h3").nextElementSibling;
                   const itemCheckboxes =
                      listItem.querySelectorAll(".item-checkbox");
                   itemCheckboxes.forEach((itemCheckbox) => {
                      itemCheckbox.checked = this.checked;
                   });
                });
             });

             itemCheckboxes.forEach((checkbox) => {
                checkbox.addEventListener("click", function () {
                   const listItem = this.closest("ul");
                   const titleCheckbox =
                      listItem.previousElementSibling.querySelector(
                         ".title-checkbox"
                      );
                   const itemCheckboxes =
                      listItem.querySelectorAll(".item-checkbox");
                   let allItemsChecked = true;
                   itemCheckboxes.forEach((itemCheckbox) => {
                      if (!itemCheckbox.checked) {
                         allItemsChecked = false;
                      }
                   });
                   titleCheckbox.checked = allItemsChecked;
                });
             });
          }

       }
       // ------------------------------------------------------------------------------------------------------
    });      


   