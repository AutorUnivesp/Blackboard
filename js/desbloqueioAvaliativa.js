function srvTime04Bi() {
  try {
    //FF, Opera, Safari, Chrome
    xmlHttps = new XMLHttpRequest();
  } catch (err1) {
    //IE
    try {
      xmlHttps = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (err2) {
      try {
        xmlHttps = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (eerr3) {
        //AJAX not supported, use CPU time.
        alert("AJAX not supported");
      }
    }
  }
  xmlHttps.open('HEAD', window.location.href.toString(), false);
  xmlHttps.setRequestHeader("Content-Type", "text/html");
  xmlHttps.send('');
  return xmlHttps.getResponseHeader("Date");
}

function desbloquiaAvaliativa(){


    var st = srvTime04Bi();
    var dateAvaliativa = new Date(st);
    var dia = dateAvaliativa.getDate();
    var mes = dateAvaliativa.getMonth() + 1;
    var ano = dateAvaliativa.getFullYear();

    // Avaliativa Semana 3
  if (dia >= 31 && mes >= 5 && ano >= 2021) {
    $('#libera-avaliativa1').remove();
    $('#atividade-avaliativa1').show();
  }else if (dia < 31 && mes > 5 && ano >= 2021) {
    $('#libera-avaliativa1').remove();
    $('#atividade-avaliativa1').show();
  } else if (dia <= 31 && mes <= 12 && ano > 2021) {
    $('#libera-avaliativa1').remove();
    $('#atividade-avaliativa1').show();
  }else {
    $('#libera-avaliativa1').show();
    $('#atividade-avaliativa1').remove();
  }

  // Avaliativa Semana 4
if (dia >= 7 && mes >= 6 && ano >= 2021) {
  $('#libera-avaliativa2').remove();
  $('#atividade-avaliativa2').show();
}else if (dia < 7 && mes > 6 && ano >= 2021) {
  $('#libera-avaliativa2').remove();
  $('#atividade-avaliativa2').show();
} else if (dia <= 31 && mes <= 12 && ano > 2021) {
  $('#libera-avaliativa2').remove();
  $('#atividade-avaliativa2').show();
}else {
  $('#libera-avaliativa2').show();
  $('#atividade-avaliativa2').remove();
}

// Avaliativa Semana 5
if (dia >= 14 && mes >= 6 && ano >= 2021) {
$('#libera-avaliativa3').remove();
$('#atividade-avaliativa3').show();
}else if (dia < 14 && mes > 6 && ano >= 2021) {
$('#libera-avaliativa3').remove();
$('#atividade-avaliativa3').show();
} else if (dia <= 31 && mes <= 12 && ano > 2021) {
$('#libera-avaliativa3').remove();
$('#atividade-avaliativa3').show();
}else {
$('#libera-avaliativa3').show();
$('#atividade-avaliativa3').remove();
}

// Avaliativa Semana 6
if (dia >= 21 && mes >= 6 && ano >= 2021) {
$('#libera-avaliativa4').remove();
$('#atividade-avaliativa4').show();
}else if (dia < 21 && mes > 6 && ano >= 2021) {
$('#libera-avaliativa4').remove();
$('#atividade-avaliativa4').show();
} else if (dia <= 31 && mes <= 12 && ano > 2021) {
$('#libera-avaliativa4').remove();
$('#atividade-avaliativa4').show();
}else {
$('#libera-avaliativa4').show();
$('#atividade-avaliativa4').remove();
}

}

$(document).ready(function(){
  desbloquiaAvaliativa();
});
