if(document.getElementsByClassName('prismCanvas').length > 0){

  copyToClipboard = str => {
    let el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    el.style.display = "none";
  }

  copiar = function(){
    let teste = this;
    copyToClipboard(teste.querySelector('pre').innerHTML);
    teste.querySelector('span').innerHTML = 'Copiado'
    teste.style.backgroundColor = '#C01313';
    setTimeout(function() {
       teste.querySelector('span').innerHTML = "Copiar";
       teste.style.backgroundColor = "#e64560";
    }, 5e3)
  }

  divToda = document.getElementsByClassName('prismCanvas');

  for (var i = 0; i < divToda.length; i++) {
    //Guarda o conteudo do pre antes do prism construir as coisas.
    guarda = divToda[i].querySelector('pre').querySelector('code').innerHTML;
    //Guarda o conteudo no pre que está dentro do botão.
    divToda[i].querySelector('div').querySelector('pre').innerHTML = guarda;
    //Esconde o pre que está dentro do botão.
    divToda[i].querySelector('div').querySelector('pre').style.display = 'none';
  }

  //Adiciona a função de copiar a todos os botões do prism
  for (var i = 0; i < divToda.length; i++) {
    divToda[i].querySelector('div').addEventListener('click', copiar);
  }
}
