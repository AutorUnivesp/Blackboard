
let urlsReact = [
  'https://unpkg.com/react@16/umd/react.development.js',
  'https://unpkg.com/react-dom@16/umd/react-dom.development.js'
]

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

const _AddingInput = function() {
  class InputField extends React.Component {
    render() {
      return React.createElement("input", {
        className: 'form-cx-curta',
        type: 'text',
        placeholder: 'Escreva aqui...'
      })
    }
  }
  let inputs = document.getElementsByClassName('inputfield');
  for (input of inputs) {
    ReactDOM.render(React.createElement(InputField), input)
  }
}

const _AddingInputTwo = function() {
  class InputFieldMenor extends React.Component {
    render() {
      return React.createElement("input", {
        className: 'form-cx-curta2',
        type: 'text',
        placeholder: 'Escreva aqui...'
      })
    }
  }
  let inputs2 = document.getElementsByClassName('inputfieldlinha');
  for (input of inputs2) {
    ReactDOM.render(React.createElement(InputFieldMenor), input)
  }
}

const _AddingTextArea = function() {
  class TextArea extends React.Component {
    render() {
      return React.createElement("textarea", {
        className: "form-cx-curta",
        rows: "10",
        cols: "70",
        placeholder: "Digite sua resposta..."
      })
    }
  }
  let textarea = document.getElementsByClassName('textarea');
  for (text of textarea) {
    ReactDOM.render(React.createElement(TextArea), text)
  }
}

const _AddingAudioTag = function(audio) {
  class Audio extends React.Component {
    render() {
      return (
        React.createElement(
          "div", {
            className: 'div-audio'
          },
          React.createElement('i', {
            className: 'fas fa-download'
          }),
          React.createElement('audio', {
            controls: 'controls',
            src: audio.href
          })
        )
      )
    }
  }
  ReactDOM.render(React.createElement(Audio), audio)
}

for (var i = 0; i < urlsReact.length; i++) {
  includeJS(urlsReact[i], function() {
    _AddingInput();
  })
}

for (var i = 0; i < urlsReact.length; i++) {
  includeJS(urlsReact[i], function() {
    _AddingInputTwo();
  })
}

for (var i = 0; i < urlsReact.length; i++) {
  includeJS(urlsReact[i], function() {
    _AddingTextArea()
  })
}

for (var i = 0; i < urlsReact.length; i++) {
  includeJS(urlsReact[i], function() {
    let audios = document.getElementsByClassName('insertAudio')
    for (var i = 0; i < audios.length; i++) {
      _AddingAudioTag(audios[i])
    }
  })
}
