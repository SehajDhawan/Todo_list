$(() => {
  // alert('hi')
  var taskdetail;
  var randomNum;
  function random() {
    randomNum = Math.floor(Math.random() * 255);
    return randomNum;
  }
  function color() {
    return `rgb(${random()}, ${random()}, ${random()})`;
  }
  function template(task) {
    const temp = `<div class="card" style="--color:${color()}">
        <p>${task}</p>
        <div class='donebtn'>
          <i class="fa-solid fa-check"></i>
        </div>
        <div class="buttongroup">
          <img src="./delete.png" alt="delete" style="width: 24px;" class="delete"/>
          <img src="./trash.png" alt="delete" style="width: 27px;" class="undo"/>
        </div>
      </div>`;
    return temp;
  }

  $(".addtaskbtn").click((e) => {
    taskdetail = $('input[name="new_task"]').val();
  });

  $(".addicon").click((e) => {
    $(".add_task").addClass("show");
  });

  $(".addtaskbtn").click(() => {
    $(".list").append(template(taskdetail));
    $('input[name="new_task"]').val('')
    $(".add_task").removeClass("show");
  });

  $(".list").click((e) => {
    if (
      e.target.className === "fa-solid fa-check" ||
      e.target.className === "donebtn"
    ) {
      var btn = e.target;
      $(btn).closest(".card").addClass("active");
    } else if (e.target.className === "undo") {
      var btn = e.target;
      $(btn).closest(".card").removeClass("active");
    } else if (e.target.className === "delete") {
      var btn = e.target;
      $(btn).closest(".card").remove();
    } else {
      console.log("nothig found");
    }
  });
});
