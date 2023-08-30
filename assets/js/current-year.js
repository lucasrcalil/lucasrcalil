function renderizarAnoEmTexto() {
  const now = new Date();
  const ano = now.getFullYear();
  return ano.toString();
}

document.addEventListener("DOMContentLoaded", function () {
  const spanElement = document.getElementById("year-result");
  const anoEmTexto = renderizarAnoEmTexto();
  spanElement.textContent = anoEmTexto;
});
