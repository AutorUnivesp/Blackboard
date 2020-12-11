if (document.getElementsByClassName('botao-enviar-gabarito').length > 0) {

  if(!$('.botao-enviar-gabarito').hasClass('jaAdicionei')){
    $('.botao-enviar-gabarito').click(function() {
      console.log('Entrei aqui');
      let title = $(this).attr('id');
      let query = '.resposta.' + title;
      $(query).slideToggle('slow');

      // Troca o texto
      $(this).text(function(i, old) {
        return old == 'Esconder Gabarito' ? 'Mostrar Gabarito' : 'Esconder Gabarito';
      });

    });
  }

  $('.menuAncorasCanvas > :nth-child(2)').addClass( "jaAdicionei" );
}
