$(".txtb").on("keyup", function(e) {
  //13 means Enter button
  if (e.keyCode == 13 && $(".txtb").val() != "") {
    var task = $("<div class='task'></div>").text($(".txtb").val());
    var complete = $('<button class="comp">Compeleted</button>').click(
      function() {
        var p = $(this).parent();
        p.fadeOut(function() {
          $(".comp").append(p);
          p.fadeIn();
        });
        $(this).remove();
      }
    );
    var remove = $('<button class="remove">Remove</button>').click(function() {
      var p = $(this).parent();
      p.fadeOut(function() {
        p.remove();
      });
    });
    $(".notcomp").append(task);
    $(".txtb").val("");
    $(task).append(complete, remove);
  }
});
