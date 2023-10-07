/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let generateExcuse = () => {
    let who = [
      "A deerbra",
      "My uncle",
      "A racoon",
      "Your president",
      "My dog",
      "The lady at starbucks"
    ];
    let verb = [
      "ate",
      "burned",
      "destroyed",
      "threw in the garbage",
      "smoked",
      "turned into a paper plane",
      "wiped bun"
    ];
    let what = [
      "the project",
      "my homework",
      "my code",
      "my codespaces",
      "the laptop",
      "my lunsh"
    ];
    let when = [
      "as i was leaving",
      "before class",
      "after eating",
      "when i woke up",
      "before work",
      "this morning"
    ];

    let whoIndex = Math.floor(Math.random() * who.length);
    let verbIndex = Math.floor(Math.random() * verb.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return (
      who[whoIndex] +
      " " +
      verb[verbIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex]
    );
  };

  console.log(generateExcuse());
  const pexcuse = document.getElementsByTagName("p");

  pexcuse[0].innerText = generateExcuse();
};
