let urlsReact = [
  'https://unpkg.com/react@16/umd/react.development.js',
  'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
]

function includeJSReact(filename, onload) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.src = filename;
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
  head.appendChild(script);
}


// --------------------------------------------------------------------------------------------------------------------------
const _AddingTextArea = () => {
  class TextArea_Novotec extends React.Component {
    render() {
      return React.createElement(
        "textarea", {
          className: "form-cx-curta",
          rows: "10",
          cols: "70",
          placeholder: "Você pode desenvolver sua resposta neste espaço e posteriormente registrar em seu caderno. O sistema não registrará a resposta da sua reflexão, mas ela será importante para sua contribuição no fórum!"
        }
      );
    }
  }
  let textarea = document.getElementsByClassName('textarea_Novotec');
  for (text of textarea) {
    ReactDOM.render(React.createElement(TextArea_Novotec), text)
  }
}


// --------------------------------------------------------------------------------------------------------------------------
const _AddingInput = () => {
  class InputField extends React.Component {
    render() {
      return React.createElement(
        'input', {
          className: "form-cx-curta",
          type: 'text',
          placeholder: 'Escreva aqui...'
        }
      )
    }
  }
  let inputs = document.getElementsByClassName('inputfield');
  for (input of inputs) {
    ReactDOM.render(React.createElement(InputField), input)
  }
}


// --------------------------------------------------------------------------------------------------------------------------
for (var i = 0; i < urlsReact.length; i++) {
  includeJSReact(urlsReact[i], function() {
    _AddingInput();
  })
}

// --------------------------------------------------------------------------------------------------------------------------

for (var i = 0; i < urlsReact.length; i++) {
  includeJSReact(urlsReact[i], function() {
    _AddingTextArea()
  })
}
