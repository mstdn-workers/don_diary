var diary;

document.addEventListener("DOMContentLoaded", function(event) {
  diary = new Diary(document.getElementById("input_area"));
  var button = document.getElementById("add_status");
  button.addEventListener("click", function(event) {
    if (sample_statuses.length > 0) {
      diary.appendStatus(sample_statuses.pop());
    };
  });
});
