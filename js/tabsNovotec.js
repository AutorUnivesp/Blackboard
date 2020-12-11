
const tabLinks = document.querySelectorAll("a.aba");
const tabelas = $(".tabs-container");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    console.log('teste');
    e.preventDefault();

    for (tabela of tabelas) {
      tabela.classList.remove("active");
    }

    var containerAtual = e.target.parentElement.parentElement.parentElement; //tabs-container

    containerAtual.classList.add("active");

    var tabelaAtiva = $(".tabs-container.active");
    var tabPanels = tabelaAtiva[0].querySelectorAll(".tabs-panel");

    tabelaAtiva[0].querySelector(".tabs li.active").classList.remove("active");
    tabelaAtiva[0].querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
  });
}
