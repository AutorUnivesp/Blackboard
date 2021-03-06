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

function dosbloqueiaReferenciaQuinzena() {
  var st = srvTime04Bi();
  var dateReferencia = new Date(st);
  var diaRef = dateReferencia.getDate();
  var mesRef = dateReferencia.getMonth() + 1;
  var anoRef = dateReferencia.getFullYear();

  // Referencia Quinzena 1
  if (diaRef >= 15 && mesRef >= 3 && anoRef >= 2021) {
    $('#referencia-quinzena1').show();
  }else if (diaRef < 15 && mesRef > 3 && anoRef >= 2021) {
    $('#referencia-quinzena1').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-quinzena1').show();
  }else {
    $('#referencia-quinzena1').remove();
  }

  // Referencia Quinzena 2
  if (diaRef >= 29 && mesRef >= 3 && anoRef >= 2021) {
    $('#referencia-quinzena2').show();
  }else if (diaRef < 29 && mesRef > 3 && anoRef >= 2021) {
    $('#referencia-quinzena2').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-quinzena2').show();
  }else {
    $('#referencia-quinzena2').remove();
  }

  // Referencia Quinzena 3
  if (diaRef >= 12 && mesRef >= 4 && anoRef >= 2021) {
    $('#referencia-quinzena3').show();
  }else if (diaRef < 12 && mesRef > 4 && anoRef >= 2021) {
    $('#referencia-quinzena3').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-quinzena3').show();
  }else {
    $('#referencia-quinzena3').remove();
  }

  // Referencia Quinzena 4
  if (diaRef >= 26 && mesRef >= 4 && anoRef >= 2021) {
    $('#referencia-quinzena4').show();
  }else if (diaRef < 26 && mesRef > 4 && anoRef >= 2021) {
    $('#referencia-quinzena4').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-quinzena4').show();
  }else {
    $('#referencia-quinzena4').remove();
  }

  // Referencia Quinzena 5
  if (diaRef >= 10 && mesRef >= 5 && anoRef >= 2021) {
    $('#referencia-quinzena5').show();
  }else if (diaRef < 10 && mesRef > 5 && anoRef >= 2021) {
    $('#referencia-quinzena5').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-quinzena5').show();
  }else {
    $('#referencia-quinzena5').remove();
  }

  // Referencia Quinzena 6
  if (diaRef >= 24 && mesRef >= 5 && anoRef >= 2021) {
    $('#referencia-quinzena6').show();
  }else if (diaRef < 24 && mesRef > 5 && anoRef >= 2021) {
    $('#referencia-quinzena6').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-quinzena6').show();
  }else {
    $('#referencia-quinzena6').remove();
  }

  // Referencia Quinzena 7
  if (diaRef >= 7 && mesRef >= 6 && anoRef >= 2021) {
    $('#referencia-quinzena7').show();
  }else if (diaRef < 7 && mesRef > 6 && anoRef >= 2021) {
    $('#referencia-quinzena7').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-quinzena7').show();
  }else {
    $('#referencia-quinzena7').remove();
  }

  // Referencia Quinzena 8
  if (diaRef >= 21 && mesRef >= 6 && anoRef >= 2021) {
    $('#referencia-quinzena8').show();
  }else if (diaRef < 21 && mesRef > 6 && anoRef >= 2021) {
    $('#referencia-quinzena8').show();
  } else if (diaRef <= 31 && mesRef <= 12 && anoRef > 2021) {
    $('#referencia-quinzena8').show();
  }else {
    $('#referencia-quinzena8').remove();
  }

}

$(document).ready(function(){
  dosbloqueiaReferenciaQuinzena();
});
