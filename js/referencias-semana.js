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

function dosbloqueiaReferencia() {
  var st = srvTime04Bi();
  var dateReferencia = new Date(st);
  var diaRef = dateReferencia.getDate();
  var mesRef = dateReferencia.getMonth() + 1;
  var anoRef = dateReferencia.getFullYear();

  // Referencia Semana 1
  if (diaRef >= 26 && mesRef >= 4 && anoRef >= 2021) {
    $('#referencia-semana1').show();
  }else if (diaRef < 26 && mesRef > 4 && anoRef >= 2021) {
    $('#referencia-semana1').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-semana1').show();
  }else {
    $('#referencia-semana1').remove();
  }

  // Referencia Semana 2
  if (diaRef >= 3 && mesRef >= 5 && anoRef >= 2021) {
    $('#referencia-semana2').show();
  }else if (diaRef < 3 && mesRef > 5 && anoRef >= 2021) {
    $('#referencia-semana2').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-semana2').show();
  }else {
    $('#referencia-semana2').remove();
  }

  // Referencia Semana 3
  if (diaRef >= 10 && mesRef >= 5 && anoRef >= 2021) {
    $('#referencia-semana3').show();
  }else if (diaRef < 10 && mesRef > 5 && anoRef >= 2021) {
    $('#referencia-semana3').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-semana3').show();
  }else {
    $('#referencia-semana3').remove();
  }

  // Referencia Semana 4
  if (diaRef >= 17 && mesRef >= 5 && anoRef >= 2021) {
    $('#referencia-semana4').show();
  }else if (diaRef < 17 && mesRef > 5 && anoRef >= 2021) {
    $('#referencia-semana4').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-semana4').show();
  }else {
    $('#referencia-semana4').remove();
  }

  // Referencia Semana 5
  if (diaRef >= 24 && mesRef >= 5 && anoRef >= 2021) {
    $('#referencia-semana5').show();
  }else if (diaRef < 24 && mesRef > 5 && anoRef >= 2021) {
    $('#referencia-semana5').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-semana5').show();
  }else {
    $('#referencia-semana5').remove();
  }

  // Referencia Semana 6
  if (diaRef >= 31 && mesRef >= 5 && anoRef >= 2021) {
    $('#referencia-semana6').show();
  }else if (diaRef < 31 && mesRef > 5 && anoRef >= 2021) {
    $('#referencia-semana6').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-semana6').show();
  }else {
    $('#referencia-semana6').remove();
  }

  // Referencia Semana 7
  if (diaRef >= 7 && mesRef >= 6 && anoRef >= 2021) {
    $('#referencia-semana7').show();
  }else if (diaRef < 7 && mesRef > 6 && anoRef >= 2021) {
    $('#referencia-semana7').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-semana7').show();
  }else {
    $('#referencia-semana7').remove();
  }

  // Referencia Semana 8
  if (diaRef >= 14 && mesRef >= 6 && anoRef >= 2021) {
    $('#referencia-semana8').show();
  }else if (diaRef < 14 && mesRef > 6 && anoRef >= 2021) {
    $('#referencia-semana8').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-semana8').show();
  }else {
    $('#referencia-semana8').remove();
  }

}

$(document).ready(function(){
  dosbloqueiaReferencia();
});
