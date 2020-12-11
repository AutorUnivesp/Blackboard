function includeJS(filename, onload) {
  //Pega o head do HTML
  var head = document.getElementsByTagName('head')[0];
  //Cria uma tag script na página.
  var script = document.createElement('script');
  //Atribui ao parâmetro src o filename(parametro da funcao)
  script.src = filename;
  //Atributo "type" do script será javascript.
  script.type = 'text/javascript';
  script.onload = script.onreadystatechange = function() {
    if (script.readyState) {
      if (script.readyState === 'complete' || script.readyState === 'loaded') {
        script.onreadystatechange = null;
        onload();
      }
    } else {
      onload();
    }
  };
  //Appenda a tag script.
  head.appendChild(script);
}

includeJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js', function() {
  $(document).ready(function() {
    let docEstagio = document.getElementById('reg-estagio');
    console.log(docEstagio);
    if (docEstagio) {
      $('#fragmento-2').toggle(false);
      $('#fragmento-3').toggle(false);
      $('#fragmento-4').toggle(false);
      $('#fragmento-5').toggle(false);
      $('#reg-estagio').click( function() {
        $('#fragmento-1').toggle(true);
        $('#fragmento-2').toggle(false);
        $('#fragmento-3').toggle(false);
        $('#fragmento-4').toggle(false);
        $('#fragmento-5').toggle(false);
      });
      $('#plano-atividades').click( function() {
        $('#fragmento-1').toggle(false);
        $('#fragmento-2').toggle(true);
        $('#fragmento-3').toggle(false);
        $('#fragmento-4').toggle(false);
        $('#fragmento-5').toggle(false);
      });
      $('#apolice-seguro').click( function() {
        $('#fragmento-1').toggle(false);
        $('#fragmento-2').toggle(false);
        $('#fragmento-3').toggle(true);
        $('#fragmento-4').toggle(false);
        $('#fragmento-5').toggle(false);
      });
      $('#ficha-presenca').click( function() {
        $('#fragmento-1').toggle(false);
        $('#fragmento-2').toggle(false);
        $('#fragmento-3').toggle(false);
        $('#fragmento-4').toggle(true);
        $('#fragmento-5').toggle(false);
      });
      $('#modelo-relatorio').click( function() {
        $('#fragmento-1').toggle(false);
        $('#fragmento-2').toggle(false);
        $('#fragmento-3').toggle(false);
        $('#fragmento-4').toggle(false);
        $('#fragmento-5').toggle(true);
      });
    }
  })
})
