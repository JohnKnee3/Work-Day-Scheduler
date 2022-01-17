//variable I want to save into tasks
var tasks = [];

//saves the tasks variable to the local storage
var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//gets items from local storage
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    //local storage is empty this creates an empty array
    if (!tasks) {
        tasks = [];
    }

    //loop over object properties and sends then to updateTask
    $.each(tasks, function (list, arr) {
        updateTask(arr.time, arr.text);
    });
};

//updates tasks when loaded from local storage and applies them to the HTML
var updateTask = function (arrTime, arrText) {
    var findId = "#" + arrTime;
    $(findId).val(arrText);
};

//when I click a description box I can then modify the text area
$(".time-block").on("focus", ".description", function () {
    $(this).text().trim();
});

//when clicked away or on the save button it saves the new value
$(".time-block").on("blur", ".description", function () {
    var taskTime = $(this).attr("id").trim();
    console.log(taskTime);

    var taskText = $(this).val();
    console.log(taskText);
    //and pushes it into the array
    tasks.push({
        time: taskTime,
        text: taskText
    });
    //and saves it    
    saveTasks();
});

//assigns colors to the times if the are in the past, present or future
var auditTask = function () {
    $(".description").each(function () {
        var hour = $(this).attr("id")

        var time = moment().hour(hour);


        if (moment().isBefore(time)) {
            $(this).addClass("future");
        }
        else if (moment().isSame(time)) {
            $(this).addClass("present");
        }
        else if (moment().isAfter(time)) {
            $(this).addClass("past");
        }
    });
};




//curent day display with moment
var dayDisplay = document.querySelector("#currentDay");
var currentDay = moment();
dayDisplay.textContent = currentDay.format("MMM DD, YYYY");

//call the func that checks the local storage
loadTasks();

//calls the func to assign colors 
auditTask();

// audit task time every 30 seconds
setInterval('auditTask()',30000);


//NOTES------------------------------------------------------

// Implement third-party libraries such as Bootstrap, jQuery, and Moment.js---

// Perform DOM traversals and manipulations with jQuery---

// Use jQuery to save user input in local storage---

// Work with the Bootstrap grid layout in HTML---

// Work with Bootstrap components---

// Add custom color styles to an existing CSS framework---

// Work with custom fonts and icons via a content delivery network (CDN)---



// Explain the difference between jQuery and JavaScript

// Explain the difference between CSS and Bootstrap

// Explain and implement libraries with content delivery networks and static files

// Perform DOM traversals and manipulations with jQuery

// Explain how to resolve issues related to dynamically generated HTML using jQuery

// Explain and implement the Bootstrap grid layout in HTML

// Integrate Bootstrap components in HTML files to quickly build user interfaces

// Add custom styling to a CSS framework

// Implement custom fonts and icons via CDNs

//5.1.5 Intorduced a ton of Jquery ideas.  More just broadstrokes.
//5.1.6 Lots of stuff using $(this)
//5.1.7 attr("attributeName, value") as opposed to 5.1.6 just using attr(attributeName)
//5.2.4 Bootstrap Row/Col/Media size scaling.
//5.2.5 Bootstrap focusing on card, modal and form style.
//5.2.6 Bootstrap for Sticky Top, mt-auto, d-flex, flex-column and d-none.
//5.3.4 Added JQueryUI links to the top and bottom of the page.
//5.3.5 Exlored the .sortable and how to save things to the array.  Pretty dense stuff here.
//5.3.6 Focuses on dropable and in this case removing a targeted draggable item being dragged.
//5.3.7 Jquery-ui-touch-punch makes your exsisting Jquery code work on phones
//5.4.4 Added datepicker widget and cleaned up some issues when we changed a "blur" to a "change"
//5.4.5 Added the link to moment.js and got a general overview
//5.4.6 Used moment.js to create a function that converts the date to a date/time it reads and checks it against the current date/time and applies a class to the <li> to show past due or near due.
//5.5.4 Used set interval to call the previously created function once overy 30 minutes
//5.5.5 Got some fonts from google that was then linked into our HTML at the top before out style.css
//5.5.6 Started using iconic to add icons to the doc.  Link goes above our CSS.
//5.5.7  called it 5.5.8 byt mistake in the taskmaster.  Tons of CSS styles and used html, css and js to make it work.