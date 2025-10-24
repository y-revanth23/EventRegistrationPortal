$(document).ready(function(){
  $("#registrationForm input").focus(function(){
    $(this).css("background-color", "#e8f0fe");
  });
  $("#name").blur(function(){
    if($(this).val().length < 3){
      alert("Name must be at least 3 characters long.");
    }
  });
  $("#previewBtn").click(function(){
    let name = $("#name").val();
    let email = $("#email").val();
    let mobile = $("#mobile").val();
    let event = $("#event").val();
    let date = $("#date").val();

    if(name && email && mobile && event && date){
      $("#previewContent").html(`
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Event:</strong> ${event}</p>
        <p><strong>Date:</strong> ${date}</p>
      `);
      $("#previewSection").slideDown();
    } else {
      alert("Please fill all fields before previewing.");
    }
  });
  $("#registrationForm").submit(function(e){
    e.preventDefault();
    alert("Registration Submitted Successfully!");
  });
});
