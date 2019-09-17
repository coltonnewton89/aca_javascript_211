function othername() {
  var input = document.getElementById("userInput").value;
  if (input == "4 > 3;") {
    alert(
      "True! Good job! You see, a boolean checks if certain things are true or false! 4 is greater than 3!"
    );
  } else {
    alert(
      "hmm...seems like something went wrong. Try typing 4 > 3; in the space next to boo! Remember, punctuation and spacing makes a difference!"
    );
  }
}

function nullIt() {
  var innull = document.getElementById("nullInput").value;
  if (innull == "null") {
    alert(
      "Yep, you're getting it. Null is a funny way of saying nothing. I know this sounds confusing but we'll cover it later!"
    );
  } else {
    alert(
      "Lol, rules are rules. Type null in the box next to the button that says nothing, then click the nothing button"
    );
  }
}

function undefineIt() {
  var indefine = document.getElementById("undefinedInput").value;
  if (indefine == "undefined") {
    alert("empty is undefined! Good job.");
  } else {
    alert(
      "Let's try that again. Just type undefined in the box next to the empty button. Then click it!"
    );
  }
}
function ageIt() {
  var inage = document.getElementById("ageInput").value;
  if (inage == "123") {
    alert("Age is now 123! It's that easy");
  } else {
    alert(
      "Let's try that again. Just type 123 in the box next to the that would be old button. Then click it!"
    );
  }
}

function nanIt() {
  var inage = document.getElementById("nanInput").value;
  if (inage == "i'm not real") {
    alert(
      "Awesome. Our math is now broken! Any time the computer doesn't agree with something, it'll throw us a null. It doesn't say thats impossible... it just says i strongly disagree!"
    );
  } else {
    alert(
      "Let's try that again. Just type i'm not real in the box next to the WHAT?! button. Then click it!"
    );
  }
}

function nameIt() {
  var inname = document.getElementById("nameInput").value;
  if (inname == "'jack'") {
    alert("Great job! name is now valued as jack!");
  } else {
    alert(
      "Don't feel bad. Keep trying! type 'jack' in the box next to the name it button. Remember, everything is case sensitive and punctuation matters. In this case it's okay to be PUNctual!!!"
    );
  }
}
