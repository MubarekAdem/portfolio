$(document).ready(function() {
  // Function to add a new list item
  function addToList() {
      let inputText = $(".notes").val();
      let addedLists = "<li class='inner-Lists'>";
      $(".lists").append(addedLists + inputText + "<span>\u00d7</span>" + "</li>");
      $(".notes").val("");
  }

  // Click event listener for adding list item
  $(".btn-add").click(addToList);

  // Click event listener to remove list item
  $("ul.lists").on("click", "li span", function() {
      $(this).parent("li").remove();
  });

  // Click event listener to toggle class "checked" on list items
  $("ul.lists").on("click", "li", function() {
      $(this).toggleClass("checked");
  });
});
