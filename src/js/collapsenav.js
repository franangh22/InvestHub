function Menu(e) {
  let s = document.querySelector("ul");
  "menu" === e.name
    ? ((e.name = "close"),
      s.classList.add("top-[80px]"),
      s.classList.add("opacity-100"))
    : ((e.name = "menu"),
      s.classList.remove("top-[80px]"),
      s.classList.remove("opacity-100"));
}
