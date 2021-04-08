
const toAdd = document.createDocumentFragment();
const b = document.querySelector('body');
b.style.margin = '0';

function etchSketch(){
  const div = document.createElement('div');
  div.className = 'div';

  div.style.display= 'grid'; div.style.gridTemplateColumns = 'repeat(16, 20px)'; div.style.gridAutoRows = '20px';
  div.style.margin = "2%";
  for(let i=0; i<16*16 ; i++){
    const divs = document.createElement('div'); divs.className = 'divs'; divs.style.border = '1px solid black';


    div.appendChild(divs);
  }

  return toAdd.appendChild(div);
}
document.body.append(etchSketch());
