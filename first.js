var nombre=Math.floor(Math.random()*100)+1;

var votre_reponse=document.querySelector('.rep');
var indic=document.querySelector('.indic');
var anciennes=document.querySelector('old');

var reponse=document.querySelector('.reponse');



function fait()
{
  if(Number(reponse.value)===Number(nombre))
  {
    indic.textContent="Yeahhhhh";
  }else if(Number(reponse.value)>Number(nombre))
  {
    indic.textContent="Nombre trop grand, moli Pablo !";
  }else
  {
    indic.textContent="Trop petit boug mwen, baille chabon !";
  }
}
