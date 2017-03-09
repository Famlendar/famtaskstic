

// Date and Time Display

// create var for section element
var dateTime = document.getElementById('js-dateTime');
// Append Date Time class to Date Time section element by id
dateTime.className += 'dateTime';

// function to add a zero in front of the number if the number is less than 10
function checkTime(i) {
    // check if number is less than 10
    if (i < 10) {
        // adds zero in front of number
        i = "0" + i;
    }

    // send back new value
    return i;
}

// runs on page load 
function startTime() {
    // store the time in a variable
    var currentTime = new Date();

    // store the current hours, minutes and seconds in variables
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
 
    //change military time to standard time if hours is greater than 12
    if (hour > 12) {
        // remove 12 from hour
        hour = hour - 12;
    }

    // update variables minute and second using checkTime function from line 1
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);

    //select element with id="js-dateTime" and change the text to the current time
    dateTime.textContent = month + '/' + day + '/' + year + '  ' + hour + ":" + minute + ":" + second;

    //recalls the function every second, time becomes dynamic
    setTimeout(function () {
        startTime();
    }, 1000)
}

// add event listener to start function so finally time will be displayed
dateTime.addEventListener('onload', startTime(), false);

// Task Section
var task = document.getElementById('js-task');
var taskHeader = document.createElement('h3')
//Create a form
var form = document.createElement('form');
var input = document.createElement('input');
var submit = document.createElement('input');
// create orderedlist
var list = document.createElement('ol');

//Text Nodes
var  headerText = document.createTextNode('Task Bar');

// create attributes
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Have a Task?');
input.setAttribute('id', 'js-userInput');
submit.setAttribute('type', 'button');
submit.setAttribute('value', 'Task It!');
submit.setAttribute('onclick', 'store()');
list.setAttribute('id', 'js-list');

// Class Names
task.className = 'task';
taskHeader.className = 'taskHeader';

// Append var
taskHeader.appendChild(headerText);
task.appendChild(taskHeader);
task.appendChild(form);
form.appendChild(input);
form.appendChild(submit);
task.appendChild(list);

// onclick function
function store() {
    var item = document.getElementById('js-userInput').value;
    var text = document.createTextNode(item);
    var newItem = document.createElement('li');
    newItem.appendChild(text);
    list.appendChild(newItem);
}
