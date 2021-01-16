const ul = document.querySelector('ul');
// const itemValue = document.getElementById('item_value');
// const vItemValue = document.getElementById('v_item_value');

//バーの数値を数字で表示する
// vItemValue.addEventListener('input' , ()=>{
//   itemValue.innerText = vItemValue.value;
// })


let items = ["コリアンダー","カイエンペッパー","ターメリック","ガラムマサラ","クミン","ガーリック"]


//文字列をノードに変換する
function htmlToNode(html) {
  let tmpElm = document.createElement('div');
  tmpElm.innerHTML = html;
  return tmpElm.firstElementChild;
}


function createItems () {
  for(let i = 0 ; i < items.length ; i++) {
    const liElm =  `<li class="item_list${i}">` +
      `<label id="item${i}">${items[i]}</label>` +
        `<input type="range" name="" id="item${i}">` +
      `<span id="item_value${i}">50</span>` +
    `</li>` ;
    let node = htmlToNode(liElm);
    ul.appendChild(node);

  }
}

createItems();

//それぞれのバーにイベントを設定>数値とバーの入力値を同期
for(let i = 0 ; i <items.length ; i++){
  const li = document.querySelectorAll("li")[i]
  
  const input =document.querySelectorAll('input')[i];
  
  const span =document.querySelectorAll('span')[i];
  
  
  //バーの数値を数字で表示する
  input.addEventListener('input' , ()=>{
  span.innerText = input.value;
  }) 
  
}

