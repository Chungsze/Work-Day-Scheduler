$(document).ready(function() {
    //listen for save button clicks
    $(".saveButton").on("click", function(){
       console.log("Save");

       let timeID = $(this).parent().attr("id")
       let value = $(this).siblings(".description").val();  
       
       console.log(timeID, value);

       localStorage.setItem(timeID, value);

       $(".notification").addClass('show');

       setTimeout(function(){

        $(".notification").removeClass('show');
       },5000)


    })
})