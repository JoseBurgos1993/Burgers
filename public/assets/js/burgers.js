// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var data = {
        devoured: true
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: data
      }).then(
        function() {
          console.log("Burger consumed");
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("A new burger was constructed");
          location.reload();
        }
      );
    });
  });
  