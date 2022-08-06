//Current Date
$("#currentDay").text(moment().format('dddd, MMMM Do'));
//Current time hour
var currentHour= moment().format('h');
console.log(currentHour);
$(".saveBtn").on("click",function(){
    var userEntry = $(this).siblings("textarea").val()
    var hour = $(this).parent().attr("id")
    //console.log(userEntry);
    //console.log(hour);
    localStorage.setItem(hour,userEntry)
})



var currentHourBlock = moment().hours()
console.log(currentHourBlock,currentHour)
for (i=9;i<18;i++){
    var storedData = localStorage.getItem("hour-"+i) || ""
   // console.log(storedData)
    $("#hour-"+i).children("textarea").val(storedData)
    if(i<currentHourBlock){
        $("#hour-"+i).children("textarea").addClass("past")
    }else if( i == currentHourBlock){
        $("#hour-"+i).children("textarea").addClass("present")
    }else if( i>currentHourBlock){
        $("#hour-"+i).children("textarea").addClass("future") 
    }
}


















//need a variable to keep track of the current hour with momentjs
//variable holds the value of the spans id. 
//If statment to compare two varaible change classes for the current span area 


//date display 
//function need for color of time box depedning on time 
//function for saving the task then push to global array 
//eventlistner for button to save timebox
// function to get items from localstorage 


