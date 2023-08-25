// TASK -1

let main = document.getElementById("main");
let show = document.getElementById("show-images");

const api = "https://fakestoreapi.com/products";

fetch(api)
  .then((res) =>
    res.json().then((data) => {
      console.log(data);
      //   console.log(data.title);

      data.forEach((element) => {
        let showImage = document.createElement("img");
        showImage.src = element.image;
        show.append(showImage);
        main.appendChild(show);
      });
    })
  )
  .catch((err) => {
    console.log("Fetch error", err);
  });

// TASK - 2
let counter = document.getElementById("counter");

let btn = document.getElementById("count-btn");
let para = document.getElementById("para");

let count = 0;

function increment() {
  //   let value = document.createElement("p");
  para.innerText = count++;
  counter.append(para);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  increment();
});

// TASK - 4

let task_4_btn = document.getElementById("button-task");

let toggle_btn = document.getElementById("toggle-btn");

toggle_btn.addEventListener("click", (e) => {
  //   toggle_btn.innerText = "Cliked";

  if (toggle_btn.innerHTML === "Click Me") {
    toggle_btn.innerHTML = "Clicked!";
  } else {
    toggle_btn.innerHTML = "Click Me";
  }
});

// TASK - 5

let mouse_track = document.getElementById("mouse-track");

window.addEventListener("mousemove", (event) => {
  let x_position = event.pageX;
  let y_posotion = event.pageY;

  mouse_track.innerText = `X:${x_position}, Y:${y_posotion}`;
});

// TASK -7
let input_box = document.getElementById("input-box");
let char_count = document.getElementById("char-count");
let char_count_2 = document.getElementById("char-count-2");

input_box.addEventListener("keydown", () => {
  char_count.innerText = "CHARACTERS : " + input_box.value;

  char_count_2.innerText = "TOTAL CHARACTERS :" + input_box.value.length;
});

// TASK -8

// let form = document.getElementById("form-task");

// let name = document.getElementById("userName-input");
// let age = document.getElementById("age-input");
// let addData = document.getElementById("submit");
// let dataArray = [{ name: userName, age: age }];

// addData.addEventListener("click", () => {
//   dataArray.forEach((item) => {
//     let userName = document.createElement("p");
//     let userAge = document.createElement("p");

//     userName.innerHTML = item.name;
//     userAge.innerHTML = item.age;

//     form.append(userName, userAge);
//   });
// });
