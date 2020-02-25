function dislexia(){
    var text = document.getElementsByName("textoCambiar")[0];
    text.id = 'dislexiaText';

}


function comprobarCodigo(){
    var codigo = document.getElementById("codigo");

    if(codigo.value == 'Este es el primer regalo secreto'){
        var element = document.createElement('a');

        element.setAttribute('href', "./images/Premio1.png");
        element.setAttribute('hidden','true');
        element.setAttribute('target','_blank');
        element.click();
    }else if(codigo.value == 'kasd98j123nmasd'){
        var element = document.createElement('a');

        element.setAttribute('href', "./images/Premio2.png");
        element.setAttribute('hidden','true');
        element.setAttribute('target','_blank');
        element.click();
    }else if(codigo.value == 'Estas hecha una hacker Leire'){
        var element = document.createElement('a');

        element.setAttribute('href', "./images/Premio3.png");
        element.setAttribute('hidden','true');
        element.setAttribute('target','_blank');
        element.click();
    }
}



function download(filename,text) {
    var element = document.createElement('a');
  element.setAttribute('href', 'data:image/png');
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}