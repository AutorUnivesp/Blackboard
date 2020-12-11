function _Modelo1() {
  // Modelo 1
  var maxErros = 2;
  var chances = [];

  $('.btn-challenge').click(function() {

    var position, questionPos, stringToInt, verifica;

    if ($(this).hasClass('certa')) {
      $(this).css('color', 'green');
      $(this).css('border', 'solid 2px green');
      $(this).parent(".alternativas").find(".feedback div:first-child").text("Certo!");
      $(this).siblings().prop('disabled', true);
    } else {
      $(this).css('color', 'red');
      $(this).css('border', 'solid 2px red');
      $(this).parent(".alternativas").find(".feedback div:first-child").text("Foi quase!");

      position = this.id;
      questionPos = position[0];
      stringToInt = parseInt(questionPos);
      chances.push(stringToInt);
      verifica = listaCheck(stringToInt, chances);
      if (verifica == maxErros) {
        $(this).siblings().prop('disabled', true);
        $(this).siblings('.certa').css('color', 'green');
        $(this).siblings('.certa').css('border', 'solid 2px green');
      }
    }
  });

  const listaCheck = function checkArray(num, lista) {
    let contaNum = 0;
    for (var j = 0; j < lista.length; j++) {
      if (lista[j] == num) {
        contaNum++;
      }
    }
    return contaNum;
  }
}


function _Modelo4() {
  let draggables = $('.draggable-modelo4');
  let droppables = $('.dropabble-modelo4');
  let respostas = $('.resposta-certa');
  let imagem_certa = "url('https://assets.univesp.br/canvas/img/certo.png')";
  let imagem_errada = "url('https://assets.univesp.br/canvas/img/errado.png')";

  (function() {
    $('#btn-enviar-modelo4').on('click', function() {
      if ($('.dropada').length === $(droppables).length) {
        checkAll();
        $('#btn-gabarito-modelo4').on('click', function() {
          setGabarito();
        })
      } else {
        alerta();
      }
    })
    $('#btn-refazer-modelo4').on('click', function() {
      location.reload(false);
    })
  })();

  (function() {
    draggables.each(function() {
      $(this).draggable({
        revert: function(event) {
          $(this).data("uiDraggable").originalPosition = {
            top: 0,
            left: 0,
            color: 'black',
            backgroundColor: '#DEE5E8'
          };
          return !event;
        },
        revertDuration: 650,
      })
    })
  })();

  (function() {
    droppables.each(function() {
      $(this).droppable({
        tolerance: 'intersect',
        out: function(event, ui) {
          $(this).css('border', '3px dashed #61788A');
          if ($(this).hasClass('dropada')) {
            $(this).removeClass('dropada');
          }
        },
        drop: function(event, ui) {
          $(ui.draggable).css('background', '#61788a');
          $(ui.draggable).css('color', '#70dbed');
          $(ui.draggable).css('paddingLeft', 'auto');
          $(ui.draggable).css('paddingRight', 'auto');
          $(ui.draggable).position({
            of: $(this),
            my: 'left center',
            at: 'left center'
          })
          $(this).html($(ui.draggable).html());
          $(this).addClass('dropada');
          $(this).css('color', 'transparent');
          $(this).css('border', '2px solid transparent');
          $(this).css('user-select', 'none');
        }
      })
    })
  })();

  function checkAll() {
    for (var i = 0; i < droppables.length; i++) {
      if ($(droppables[i]).html() === $(respostas[i]).html()) {
        $(draggables[i]).css('border', '2px solid green');
        $(draggables[i]).css('background', '#f7f7f7');
        $(draggables[i]).css('color', '#354451');
        $(draggables[i]).css('backgroundImage', imagem_certa);
        $(draggables[i]).css('backgroundRepeat', 'no-repeat');
        $(droppables[i]).addClass('changingBorder');
        $(draggables[i]).draggable("destroy");

      } else {
        $(draggables[i]).css('border', '2px solid red');
        $(draggables[i]).css('background', '#f7f7f7');
        $(draggables[i]).css('color', '#354451');
        $(draggables[i]).css('backgroundImage', imagem_errada);
        $(draggables[i]).css('backgroundRepeat', 'no-repeat');
        $(droppables[i]).addClass('changingBorder');
        $(draggables[i]).draggable("destroy");
      }
    }
  }

  function setGabarito() {
    for (var i = 0; i < draggables.length; i++) {
      $(respostas).css('border', '2px solid #70dbed');
      $(respostas).css('backgroundImage', 'none');
      $(respostas).css('background', '#f7f7f7');
      $(respostas).css('color', '#14aadb');
      $(respostas).css('font-weight', 'bold');
      $(respostas).css('margin-left', '-116%');
      $(respostas).addClass('draggable-modelo4');
      $(draggables[i]).replaceWith(
        $(respostas[i])
      );
    }
  }

  function alerta() {
    $('#alerta-modelo4').show();
    $('#alerta-modelo4').css('textAlign', 'center');
    $('#alerta-modelo4').css('marginLeft', '150px');
    $('#alerta-modelo4').css('width', '350px');
    $('#botaoOk-modelo4').on('click', function() {
      $('#alerta-modelo4').hide();
    })
  }
}

function _Modelo5() {
  let imagem_certa = "url('https://assets.univesp.br/canvas/img/certo.png')";
  let imagem_errada = "url('https://assets.univesp.br/canvas/img/errado.png')";
  let sizeBoxes = document.getElementsByClassName('gridItem-modelo5').length;
  let boxes = document.getElementsByClassName('gridItem-modelo5');
  let totalCliques = 0;
  let totalSelecionadas;
  let cliques = [];
  let element;
  let verificadas = false;

  (function setSelecionadas() {
    if (sizeBoxes === 14) {
      totalSelecionadas = 7;
    }
    if (sizeBoxes === 12) {
      totalSelecionadas = 5;
    }
    if (sizeBoxes === 9) {
      totalSelecionadas = 4;
    }
    if (sizeBoxes === 6) {
      totalSelecionadas = 3;
    }
    pushCliques();
    checkTodas();
  })();

  function checkSelecionadas() {
    let alternativasSelecionadas = 0;
    for (var i = 0; i < boxes.length; i++) {
      if ($(boxes[i]).hasClass('selecionada')) {
        alternativasSelecionadas += 1;
      }
    }
    if (alternativasSelecionadas <= 0) {
      alerta();
    }
    if (alternativasSelecionadas > totalSelecionadas) {
      verificadas = true;
      alert('Por favor, selecione até '+ totalSelecionadas + ' alternativas.');
    }
    if (alternativasSelecionadas <= totalSelecionadas) {
      checkCertas();
    }
  }

  function restart() {
    location.reload(false);
  }

  function pushCliques() {
    for (var i = 0; i < sizeBoxes; i++) {
      cliques.push(0);
    }
  }

  function checkClick(checkNumber) {
    $(boxes[checkNumber]).on('click', function() {
      element = $(boxes[checkNumber]);
      cliqueOn(element);
      if (cliques[checkNumber] % 2 !== 0) {
        cliqueOff(element);
      }
      cliques[checkNumber]++;
    })
  }

  function checkTodas() {
    for (var i = 0; i < sizeBoxes; i++) {
      checkClick(i);
    }
  }

  function cliqueOn(elClicado) {
    $(elClicado).css('background', '#FFE370');
    $(elClicado).addClass('selecionada');
  }

  function cliqueOff(elClicado) {
    $(elClicado).css('background', '#DEE5E8');
    if ($(elClicado).hasClass('selecionada')) {
      $(elClicado).removeClass('selecionada');
    }
  }

  // verifica se o total de selecionadas é menor que totalSelecionadas.

  (function botaoEnviar() {
    $('#btn-enviar-model5').on('click', function() {
      checkSelecionadas();
      if (verificadas === false) {
        checkCertas();
      }
    })
  })();

  (function botaoRestart() {
    $('#btn-recomecar-model5  ').on('click', function() {
      restart();
    })
  })();

  function checkCertas() {
    for (var i = 1; i < sizeBoxes + 1; i++) {
      let boxChar = '#box' + i;
      if ($(boxChar).hasClass('certa') && $(boxChar).hasClass('selecionada')) {
        let elemento = $(boxChar);
        elemento.css('border', '2px solid #9ecc63');
        elemento.css('background', '#f4fafc');
        elemento.css('backgroundImage', imagem_certa);
        elemento.css('backgroundRepeat', 'no-repeat');
      } else {
        if ($(boxChar).hasClass('selecionada')) {
          $(boxChar).css('border', '2px solid red');
          $(boxChar).css('background', '#f4fafc');
          $(boxChar).css('backgroundImage', imagem_errada);
          $(boxChar).css('backgroundRepeat', 'no-repeat');
        } else {
          $(boxChar).css('border', '2px solid transparent');
        }
      }
    }
  }

  function alerta() {
    $('#alerta-modelo5').show();
    $('#alerta-modelo5').css('textAlign', 'center');
    $('#alerta-modelo5').css('marginLeft', '150px');
    $('#alerta-modelo5').css('width', '350px');
    $('#botaoOk-modelo5').on('click', function() {
      $('#alerta-modelo5').hide();
    })
  }

}

function _Modelo6() {
  let imagem_certa = "url('https://assets.univesp.br/canvas/img/check.svg')";
  let imagem_errada = "url('https://assets.univesp.br/canvas/img/errado_icone.svg')";
  let numQuestoes = document.getElementsByClassName('caixa-checkbox').length;
  let questoes = document.getElementsByClassName('caixa-checkbox');
  let cliques = [];
  let element;

  (function() {
    pushCliques();
    checkTodas();
    $('#btn-enviar-modelo6').on('click', function() {
      showAlerta();
      checkCertas();
      $('#btn-gabarito-modelo6').on('click', function() {
        gabarito();
      })
      $('#btn-refazer-modelo6').on('click', function() {
        restart();
      })
    })
    $('#btn-enviar2-modelo6').on('click', function() {
      showAlerta();
      checkCertas();
      $('#btn-gabarito2-modelo6').on('click', function() {
        gabarito();
      })
      $('#btn-refazer2-modelo6').on('click', function() {
        restart();
      })
    })
  })();

  function pushCliques() {
    for (var i = 0; i < numQuestoes; i++) {
      cliques.push(0);
    }
  }

  function checkClick(checkNumber) {
    $(questoes[checkNumber]).on('click', function() {
      element = $(questoes[checkNumber]);
      cliqueOn(element);
      if (cliques[checkNumber] % 2 !== 0) {
        cliqueOff(element);
      }
      cliques[checkNumber]++;
    })
  }

  function checkTodas() {
    for (var i = 0; i < numQuestoes; i++) {
      checkClick(i);
    }
  }

  // #007BFF

  function cliqueOn(elClicado) {
    $(elClicado).css('background', '#354451');
    $(elClicado).css('backgroundImage', imagem_certa);
    $(elClicado).css('backgroundRepeat', 'no-repeat');
    $(elClicado).css('background-position', '-0.3px 2px');
  }

  function cliqueOff(elClicado) {
    $(elClicado).css('background', '#e0e0e0');
  }

  function showAlerta() {
    let questoesDesmarcadas = 0;

    for (var i = 0; i < cliques.length; i++) {
      if (cliques[i] % 2 === 0) {
        questoesDesmarcadas += 1;
      }
    }

    if (questoesDesmarcadas === numQuestoes) {
      alerta();
    }
  }

  function alerta() {
    $('#alerta-modelo6').show();
    $('#alerta-modelo6').css('textAlign', 'center');
    $('#alerta-modelo6').css('marginLeft', '150px');
    $('#alerta-modelo6').css('width', '350px');
    $('#botaoOk-modelo6').on('click', function() {
      $('#alerta-modelo6').hide();
    })
  }

  function restart() {
    location.reload(false);
  }

  function checkCertas() {
    for (var i = 0; i < numQuestoes; i++) {
      if (cliques[i] % 2 !== 0) {
        let checkboxChar = '#checkbox'+ (i + 1);
        let alternativaChar = '#alternativa'+ (i + 1);
        if ($(checkboxChar).hasClass('certa')) {
          $(checkboxChar).css('background', '#9ecc63');
          $(checkboxChar).css('backgroundImage', imagem_certa);
          $(checkboxChar).css('backgroundRepeat', 'no-repeat');
          $(checkboxChar).css('background-position', '-0.3px 2px');
          $(alternativaChar).css('color', '#9ecc63');
        } else {
          $(checkboxChar).css('background', '#ed3a47');
          $(checkboxChar).css('backgroundImage', imagem_errada);
          $(checkboxChar).css('backgroundRepeat', 'no-repeat');
          $(checkboxChar).css('background-position', '-0.3px 2px');
          $(alternativaChar).css('color', 'red');
        }
      }
    }
  }

  function gabarito() {
    for (var i = 0; i < numQuestoes; i++) {
      let checkboxChar = '#checkbox'+ (i + 1);
      let alternativaChar = '#alternativa'+ (i + 1);
      if ($(checkboxChar).hasClass('certa')) {
        $(checkboxChar).css('background', '#9ecc63');
        $(checkboxChar).css('backgroundImage', imagem_certa);
        $(checkboxChar).css('backgroundRepeat', 'no-repeat');
        $(checkboxChar).css('background-position', '-0.3px 2px');
        $(alternativaChar).css('color', '#9ecc63');
      } else {
        $(checkboxChar).css('background', '#ed3a47');
        $(checkboxChar).css('backgroundImage', imagem_errada);
        $(checkboxChar).css('backgroundRepeat', 'no-repeat');
        $(checkboxChar).css('background-position', '-0.3px 2px');
        $(alternativaChar).css('color', 'red');
      }
    }
  }
}

function _Modelo6Espanhol() {
  let imagem_certa = "url('https://assets.univesp.br/canvas/img/check.svg')";
  let imagem_errada = "url('https://assets.univesp.br/canvas/img/errado_icone.svg')";
  let numQuestoes = document.getElementsByClassName('caixa-checkbox').length;
  let questoes = document.getElementsByClassName('caixa-checkbox');
  let cliques = [];
  let element;

  (function() {
    pushCliques();
    checkTodas();
    $('#btn-enviar-modelo6').on('click', function() {
      showAlerta();
      checkCertas();
      $('#btn-gabarito-modelo6').on('click', function() {
        gabarito();
      })
      $('#btn-refazer-modelo6').on('click', function() {
        restart();
      })
    })
  })();

  function pushCliques() {
    for (var i = 0; i < numQuestoes; i++) {
      cliques.push(0);
    }
  }

  function checkClick(checkNumber) {
    $(questoes[checkNumber]).on('click', function() {
      element = $(questoes[checkNumber]);
      cliqueOn(element);
      if (cliques[checkNumber] % 2 !== 0) {
        cliqueOff(element);
      }
      cliques[checkNumber]++;
    })
  }

  function checkTodas() {
    for (var i = 0; i < numQuestoes; i++) {
      checkClick(i);
    }
  }

  // #007BFF

  function cliqueOn(elClicado) {
    $(elClicado).css('background', '#354451');
    $(elClicado).css('backgroundImage', imagem_certa);
    $(elClicado).css('backgroundRepeat', 'no-repeat');
    $(elClicado).css('background-position', '-0.3px 2px');
  }

  function cliqueOff(elClicado) {
    $(elClicado).css('background', '#e0e0e0');
  }

  function showAlerta() {
    let questoesDesmarcadas = 0;

    for (var i = 0; i < cliques.length; i++) {
      if (cliques[i] % 2 === 0) {
        questoesDesmarcadas += 1;
      }
    }

    if (questoesDesmarcadas === numQuestoes) {
      alerta();
    }
  }

  function alerta() {
    $('#alerta-modelo6').show();
    $('#alerta-modelo6').css('textAlign', 'center');
    $('#alerta-modelo6').css('marginLeft', '150px');
    $('#alerta-modelo6').css('width', '350px');
    $('#botaoOk-modelo6').on('click', function() {
      $('#alerta-modelo6').hide();
    })
  }

  function restart() {
    location.reload(false);
  }

  function checkCertas() {
    for (var i = 0; i < numQuestoes; i++) {
      if (cliques[i] % 2 !== 0) {
        let checkboxChar = '#checkbox'+ (i + 1);
        let alternativaChar = '#alternativa'+ (i + 1);
        if ($(checkboxChar).hasClass('certaModelo6')) {
          $(checkboxChar).css('background', '#9ecc63');
          $(checkboxChar).css('backgroundImage', imagem_certa);
          $(checkboxChar).css('backgroundRepeat', 'no-repeat');
          $(checkboxChar).css('background-position', '-0.3px 2px');
          $(alternativaChar).css('color', '#9ecc63');
        } else {
          $(checkboxChar).css('background', '#ed3a47');
          $(checkboxChar).css('backgroundImage', imagem_errada);
          $(checkboxChar).css('backgroundRepeat', 'no-repeat');
          $(checkboxChar).css('background-position', '-0.3px 2px');
          $(alternativaChar).css('color', 'red');
        }
      }
    }
  }

  function gabarito() {
    for (var i = 0; i < numQuestoes; i++) {
      let checkboxChar = '#checkbox'+ (i + 1);
      let alternativaChar = '#alternativa'+ (i + 1);
      if ($(checkboxChar).hasClass('certaModelo6')) {
        $(checkboxChar).css('background', '#9ecc63');
        $(checkboxChar).css('backgroundImage', imagem_certa);
        $(checkboxChar).css('backgroundRepeat', 'no-repeat');
        $(checkboxChar).css('background-position', '-0.3px 2px');
        $(alternativaChar).css('color', '#9ecc63');
      } else {
        $(checkboxChar).css('background', '#ed3a47');
        $(checkboxChar).css('backgroundImage', imagem_errada);
        $(checkboxChar).css('backgroundRepeat', 'no-repeat');
        $(checkboxChar).css('background-position', '-0.3px 2px');
        $(alternativaChar).css('color', 'red');
      }
    }
  }
}

function _Modelo7() {
  let numQuestoes = document.getElementsByClassName('caixa-checkbox-modelo7').length;
  let numSecoes = document.getElementsByClassName('gridContainer1-modelo7').length;
  let questoes = document.getElementsByClassName('caixa-checkbox-modelo7');
  let cliques = [];
  let element;

  (function() {
    pushCliques();
    checkTodas();
    $('#btn-enviar-modelo7').on('click', function() {
      if ($('.selecionada').length < numSecoes) {
        alerta();
      } else {
        checkCertas();
      }
    })
    $('#btn-refazer-modelo7').on("click", function() {
      restart();
    })
  })();

  function pushCliques() {
    for (var i = 0; i < numQuestoes; i++) {
      cliques.push(0);
    }
  }

  function checkClick(checkNumber) {
    $(questoes[checkNumber]).on('click', function() {
      element = $(questoes[checkNumber]);
      cliqueOn(element);
      cliqueOff(element.siblings());
      takeOffGrey();
      cliques[checkNumber]++;
    })
  }

  function checkTodas() {
    for (var i = 0; i < numQuestoes; i++) {
      checkClick(i);
    }
  }

  function cliqueOn(elClicado) {
    $(elClicado).css('background', 'white');
    $(elClicado).css('boxShadow', 'inset 0px 0px 0px 7px #007bff');
    $(elClicado).addClass('selecionada');
  }

  function cliqueOff(elClicado) {
    $(elClicado).css('background', '#e0e0e0');
    $(elClicado).css('boxShadow', 'inset 0px 0px 0px 7px #e0e0e0');
    if ($(elClicado).hasClass('selecionada')) {
      $(elClicado).removeClass('selecionada');
    }
  }

  function checkCertas() {
    for (var i=0; i < questoes.length; i++) {
      if ($(questoes[i]).hasClass('certa') && $(questoes[i]).hasClass('selecionada')) {
        $(questoes[i]).css('background', 'white');
        $(questoes[i]).css('boxShadow', 'inset 0px 0px 0px 7px #9ecc63');
        $(questoes[i]).next().css('color', '#9ecc63');
        $(questoes[i]).next().html($(questoes[i]).next().html() + "<span style='font-size: 17px; color: #009e49;'><strong> ✓</strong></span>");
      } else {
        if ($(questoes[i]).hasClass('selecionada')) {
          let questaoCerta = $('.certa');
          $(questaoCerta).css('background', 'white');
          $(questaoCerta).css('boxShadow', 'inset 0px 0px 0px 7px #9ecc63');
          $(questaoCerta).next().css('color', '#9ecc63');

          $(questoes[i]).css('background', 'white');
          $(questoes[i]).css('boxShadow', 'inset 0px 0px 0px 7px #ed3a47');
          $(questoes[i]).next().css('color', '#ed3a47');
          $(questoes[i]).next().html($(questoes[i]).next().html() + "<strong> X</strong>");
        }
      }
    }
  }

  function takeOffGrey() {
    $('.alternativa-checkbox-modelo7').css('background', 'transparent');
    $('.alternativa-checkbox-modelo7').css('boxShadow', 'inset 0px 0px 0px 7px transparent');
  }

  function alerta() {
    $('#alerta-modelo7').show();
    $('#alerta-modelo7').css('textAlign', 'center');
    $('#alerta-modelo7').css('marginLeft', '150px');
    $('#alerta-modelo7').css('width', '350px');
    $('#botaoOk-modelo7').on('click', function() {
      $('#alerta-modelo7').hide();
    })
  }

  function restart() {
    location.reload(false);
  }
}

function _Modelo7Espanhol() {
  let numQuestoes = document.getElementsByClassName('caixa-checkbox-modelo7').length;
  let numSecoes = document.getElementsByClassName('gridContainer1-modelo7').length;
  let questoes = document.getElementsByClassName('caixa-checkbox-modelo7');
  let cliques = [];
  let element;

  (function() {
    pushCliques();
    checkTodas();
    $('#btn-enviar-modelo7').on('click', function() {
      if ($('.selecionada').length < numSecoes) {
        alerta();
      } else {
        checkCertas();
      }
    })
    $('#btn-refazer-modelo7').on("click", function() {
      restart();
    })
  })();

  function pushCliques() {
    for (var i = 0; i < numQuestoes; i++) {
      cliques.push(0);
    }
  }

  function checkClick(checkNumber) {
    $(questoes[checkNumber]).on('click', function() {
      element = $(questoes[checkNumber]);
      cliqueOn(element);
      cliqueOff(element.siblings());
      takeOffGrey();
      cliques[checkNumber]++;
    })
  }

  function checkTodas() {
    for (var i = 0; i < numQuestoes; i++) {
      checkClick(i);
    }
  }

  function cliqueOn(elClicado) {
    $(elClicado).css('background', 'white');
    $(elClicado).css('boxShadow', 'inset 0px 0px 0px 7px #007bff');
    $(elClicado).addClass('selecionada');
  }

  function cliqueOff(elClicado) {
    $(elClicado).css('background', '#e0e0e0');
    $(elClicado).css('boxShadow', 'inset 0px 0px 0px 7px #e0e0e0');
    if ($(elClicado).hasClass('selecionada')) {
      $(elClicado).removeClass('selecionada');
    }
  }

  function checkCertas() {
    for (var i=0; i < questoes.length; i++) {
      if ($(questoes[i]).hasClass('certaModelo7') && $(questoes[i]).hasClass('selecionada')) {
        $(questoes[i]).css('background', 'white');
        $(questoes[i]).css('boxShadow', 'inset 0px 0px 0px 7px #9ecc63');
        $(questoes[i]).next().css('color', '#9ecc63');
        $(questoes[i]).next().html($(questoes[i]).next().html() + "<span style='font-size: 17px; color: #009e49;'><strong> ✓</strong></span>");
      } else {
        if ($(questoes[i]).hasClass('selecionada')) {
          let questaoCerta = $('.certaModelo7');
          $(questaoCerta).css('background', 'white');
          $(questaoCerta).css('boxShadow', 'inset 0px 0px 0px 7px #9ecc63');
          $(questaoCerta).next().css('color', '#9ecc63');

          $(questoes[i]).css('background', 'white');
          $(questoes[i]).css('boxShadow', 'inset 0px 0px 0px 7px #ed3a47');
          $(questoes[i]).next().css('color', '#ed3a47');
          $(questoes[i]).next().html($(questoes[i]).next().html() + "<strong> X</strong>");
        }
      }
    }
  }

  function takeOffGrey() {
    $('.alternativa-checkbox-modelo7').css('background', 'transparent');
    $('.alternativa-checkbox-modelo7').css('boxShadow', 'inset 0px 0px 0px 7px transparent');
  }

  function alerta() {
    $('#alerta-modelo7').show();
    $('#alerta-modelo7').css('textAlign', 'center');
    $('#alerta-modelo7').css('marginLeft', '150px');
    $('#alerta-modelo7').css('width', '350px');
    $('#botaoOk-modelo7').on('click', function() {
      $('#alerta-modelo7').hide();
    })
  }

  function restart() {
    location.reload(false);
  }
}

function _ImprimirButton() {
  $('#imprimir').click(function() {
    window.print()
  });
}

function _SaibaMais() {
  let cliquesSaiba = 0;
  $('#botao-saber-mais').on('click', function() {
    cliquesSaiba++
    cliquesSaiba % 2 === 0 ? $('#collapse-cx-curta-saber').hide() : $('#collapse-cx-curta-saber').show()
    $(this).text(function(i, old) {
      return old == 'Clique aqui e saiba mais!' ? 'Esconder' : 'Clique aqui e saiba mais!';
    });
  });
}

function _transcricaoAudio() {
  // para cada container de transcrição...
  $(".transcricao-audio-container").each(function(index, element) {

    // carrega dentro do collapse o conteúdo do txt UTF-8 linkado para download
    var transcricaoURL = $(this).find(".transcricao-audio-collapse a").attr('href')
    $(this).find(".transcricao-audio-conteudo").load(transcricaoURL);

    // habilita a função de collapse
    $(this).find(".transcricao-audio-botao").click(function() {
      $(this).siblings(".transcricao-audio-collapse").slideToggle('slow');
      $(this).text(function(i, old) {
        return old == 'Ver transcrição' ? 'Fechar transcrição' : 'Ver transcrição';
      });
    });
  });
}

function _transcricaoAudioTexto() {
  // para cada container de transcrição...
  $(".transcricao-audio-container-texto").each(function(index, element) {

    // carrega dentro do collapse o conteúdo do txt UTF-8 linkado para download
    var transcricaoURL = $(this).find(".transcricao-audio-collapse-texto a").attr('href')
    $(this).find(".transcricao-audio-conteudo-texto").load(transcricaoURL);

    // habilita a função de collapse
    $(this).find(".transcricao-audio-botao-texto").click(function() {
      $(this).siblings(".transcricao-audio-collapse-texto").slideToggle('slow');
      $(this).text(function(i, old) {
        return old == 'Acessar o texto' ? 'Fechar o texto' : 'Acessar o texto';
      });
    });
  });
}

function _ImprimirButton() {
  $('#imprimir').click(function() {
    window.print()
  });
}

function _SaibaMais() {
  let cliquesSaiba = 0;
  $('#botao-saber-mais').on('click', function() {
    cliquesSaiba++
    cliquesSaiba % 2 === 0 ? $('#collapse-cx-curta-saber').hide() : $('#collapse-cx-curta-saber').show()
    $(this).text(function(i, old) {
      return old == 'Clique aqui e saiba mais!' ? 'Esconder' : 'Clique aqui e saiba mais!';
    });
  });
}

const _ExecuteDiferenciados = function() {
  _Modelo1()
  _Modelo4()
  _Modelo5()
  _Modelo6()
  _Modelo6Espanhol()
  _Modelo7()
  _Modelo7Espanhol()
  _transcricaoAudio()
  _transcricaoAudioTexto()
  _ImprimirButton()
  _SaibaMais()
}

_ExecuteDiferenciados()
