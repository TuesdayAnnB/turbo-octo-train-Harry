$(() => {
  console.log("document ready!");
  const form = document.getElementById("myForm");
  let adjList = [$("#huge"), $("#pink"), $("#sticky"), $("#funky"), $("#tiny")];

  function checkform(form) {
    // get all the inputs within the submitted form
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      // only validate the inputs that have the required attribute
      if (inputs[i].hasAttribute("required")) {
        if (inputs[i].value == "") {
          // found an empty field that is required
          alert("Please fill all required fields");
          return false;
        }
      }
    }
    return true;
  }

  $("#formSubmit").on("click", (e) => {
    //print the mad libs sentence.
    //(name) the (animal) (verbed on) the (adjective[s]) (noun)
    e.preventDefault();
    if (
      $("#name").val() == "" ||
      $("#noun").val() == "" ||
      $("input[type=radio]:checked").val() == undefined
    ) {
      alert("Oops, you're missing values.");
    } else {
      $("#output")
        .empty()
        .append(
          $("#name").val() + " the " + $("input[type=radio]:checked").val()
        )
        .append($("#verb").val() + $("#pronoun").val());

      adjList.forEach(function (item) {
        if (item.is(":checked")) {
          $("#output").append(item.val());
        }
      });
      $("#output").append($("#noun").val() + ".");
    }
  });

  $("#formReset").on("click", (e) => {
    $("input[name=animal]").attr("checked", false);
    // Reset the form
    form.reset();
    $("#output").empty();
    $("#verb")
      .empty()
      .append(`<option selected disabled>Pick an animal first!</option>`);
  });

  $("input[type=radio]").on("change", function () {
    let radioChoice = $("input[type=radio]:checked").val();
    if (radioChoice === "elephant ") {
      $("#verb")
        .empty()
        .append(`<option value="stomped on ">Stomped</option>`)
        .append(`<option value="trumpeted at ">Trumpeted</option>`)
        .append(`<option value="sneezed on ">Sneezed</option>`);
    } else if (radioChoice === "pigeon ") {
      $("#verb")
        .empty()
        .append(`<option value="pecked at ">Pecked</option>`)
        .append(`<option value="flapped over ">Flapped</option>`)
        .append(`<option value="pooped on ">Pooped</option>`);
    } else if (radioChoice === "rabbit ") {
      $("#verb")
        .empty()
        .append(`<option value="bounced over ">Bounced</option>`)
        .append(`<option value="chewed on ">Chewed </option>`)
        .append(`<option value="stared at ">Stared</option>`);
    } else {
      $("#verb")
        .empty()
        .append(`<option value="did something to ">Pick an animal!</option>`);
    }
  });
});
