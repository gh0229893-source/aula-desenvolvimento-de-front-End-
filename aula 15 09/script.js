function trocarFoto(src) {
  const foto = document.getElementById("foto");
  foto.classList.remove("animar");
  void foto.offsetWidth;
  foto.src = src;
  foto.classList.add("animar");
}