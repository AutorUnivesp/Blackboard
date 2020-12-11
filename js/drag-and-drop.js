//Número de acertos.
var acertos = 0;
//variável que informa se a correção pode ser feita.
var pode_corrigir = false;
//Array que guarda as respostas na ordem em que o aluno escolheu
var lacunas = [0, 0, 0, 0, 0, 0, 0];
//Gabarito
var gabarito = [1, 2, 3, 4, 5, 6, 7];
//Variável auxiliar para preencher o vetor lacunas.
var troca;
//Variável que indica quando um  campo é preenchido.
var called = false;
$(".respostas").find("div").click(function() {
  var confere = $(this).attr("id");
});
$(function weatherLondon() {
  $(".ui-widget-content").draggable({
    revert: "invalid"
  });
  $(".ui-widget-header").droppable({
    drop: function(event, ui) {
      //Campo que foi recebido.
      var campo = (this.id)
      //Botão que foi enviado.
      var botao = ui.draggable.attr("id");
      //Pega apenas o valor numérico do ID, tira a palavra "campo", para indicar qual posição
      campo = campo.substring(5, 7);
      //Transforma o campo em número inteiro.
      campo = parseInt(campo);
      //atualiza o vetor coluna com o valor que foi preenchido.
      lacunas[campo - 1] = parseInt(botao);
      //Troca o status da variavel informando que o campo foi preenchido.
      called = true;
      ui.draggable.position({
        of: $(this),
        my: 'left center',
        at: 'left center'
      }).addClass("ui-state-highlight")
      $('.drop').droppable({
        tolerance: 'fit'
      });
      $('.ui-widget-content').draggable({
        revert: 'invalid',
        stop: function() {
          $(this).draggable('option', 'revert', 'invalid');
          //Se um campo não foi preenchido ele atualiza o botão com cinza claro.
          if (!called) {
            $(this).removeClass("ui-state-highlight");
          }
          //Informa pra variável global que o campo não foi preenchido.
          called = false;
        }
      });
      $('.ui-widget-content, .ui-widget-header2').droppable({
        greedy: true,
        drop: function(event, ui) {
          ui.draggable.draggable('option', 'revert', false);
          $(this).removeClass("ui-state-highlight").animate({
            top: "0",
            left: "0"
          }, 1000);
        }
      });
    }
  })
  $("#campo1").droppable({
    accept: "#1, #2, #3, #4, #5, #6, #7"
  });
  $("#campo2").droppable({
    accept: "#1, #2, #3, #4, #5, #6, #7"
  });
  $("#campo3").droppable({
    accept: "#1, #2, #3, #4, #5, #6, #7"
  });
  $("#campo4").droppable({
    accept: "#1, #2, #3, #4, #5, #6, #7"
  });
  $("#campo5").droppable({
    accept: "#1, #2, #3, #4, #5, #6, #7"
  });
  $("#campo6").droppable({
    accept: "#1, #2, #3, #4, #5, #6, #7"
  });
  $("#campo7").droppable({
    accept: "#1, #2, #3, #4, #5, #6, #7"
  });
  $("#campo8").droppable({
    accept: "#1, #2, #3, #4, #5, #6, #7"
  });

});
$('.feedback').click(function() {
  //drawProgress(acertos*12.5/100)
}) //Aqui tem que colocar quantos % representa cada alternativas/100-->
//drawProgress(0/100)
$(document).ready(function() {
  $('.feedback').click(function() {
    //Variavel que indica se a correção pode ser feita.
    pode_corrigir = false;
    //Verifica se todos os campos foram preenchidos.
    for (var i = 1; i < 6; i++) {
      pode_corrigir = $("#" + i.toString()).hasClass("ui-state-highlight");
      if (!pode_corrigir)
        break;
    }
    //Só deixa corrigir se todos as opções estão preenchidas.
    if (!pode_corrigir) {
      $("#myModal").modal();
    } else {
      $(".gabarito").show();
      //$(".gabarito").css("background-color","#147BD4");
      $(".gabarito").css("background-color", "#17609f");
      $(".gabarito").hover(function() {
        $(".gabarito").css("background-color", "#17609f");
      }, function() {
        $(".gabarito").css("background-color", "#147BD4");
      });
      $(".reset").show();
      $(".feedback").hide();
      $(".ui-widget-content").draggable('disable');
      for (var i = 0; i < lacunas.length; i++) {
        var aux1 = i + 1;
        //Acerto.
        if (lacunas[i] == gabarito[i]) {
          $("#" + aux1).css({
            "border": "2px solid #9ECC63",
            "background-color": "white",
            "backgroundImage": "url('https://assets.univesp.br/canvas/img/certo.png')",
            "backgroundRepeat": "no-repeat"
          });
          acertos++;
        }
        //Erro.
        else
          $("#" + aux1).css({
            "border": "2px solid #ED3B47",
            "background-color": "white",
            "backgroundImage": "url('https://assets.univesp.br/canvas/img/errado.png')",
            "backgroundRepeat": "no-repeat"
          });
      }
    }
    $(".final").find("p").text('Você acertou ' + acertos + '/10');
  })
});

function init() {
  // Hide the success message
  $('#alerta').hide();
}

function init2() {
  // Hide the success message
  $('#alerta2').hide();
}

function myFunction() {
  location.reload();
}
$('.gabarito').click(function() {
  $('.gaba').show();
});
for (var $x = $(".respostas div"), i = $x.length - 1, j, temp; i >= 0; i--) {
  j = Math.floor(Math.random() * (i + 1));
  temp = $x[i];
  $x[i] = $x[j];
  $x[j] = temp;
}
$x.each(function(i, div) {
  $(".respostas").append(div);
});
