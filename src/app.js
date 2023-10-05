/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let generateExcuse = () => {
    let who = ["The cow", "A sheep", "Some old lady", "My dog"];
    let verb = ["ate", "destroyed", "burned", "threw away"];
    let what = ["my phone", "my keys", "my homework", "my laptop"];
    let when = ["this morning.", "before coming to work", "last night"];

    let whoIndex = 0;
    let verbIndex = 0;
    let whatIndex = 0;
    let whenIndex = 0;

    return (
      who[whoIndex] +
      "" +
      verb[verbIndex] +
      "" +
      what[whatIndex] +
      "" +
      when[whenIndex]
    );
  };
};

console.log("Hello Rodrigo");
