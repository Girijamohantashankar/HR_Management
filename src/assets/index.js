function show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("showing").src =
            "https://static.thenounproject.com/png/777494-200.png";
    } else {
        x.type = "password";
        document.getElementById("showing").src =
            "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
  }
  function show1() {
    var x = document.getElementById("pass1");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("showing1").src =
            "https://static.thenounproject.com/png/777494-200.png";
    } else {
        x.type = "password";
        document.getElementById("showing1").src =
            "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
  }