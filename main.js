const ul = document.querySelector('ul');

let items = [
  "コリアンダー",
  "カイエンペッパー",
  "ターメリック",
  "クミン",
  "ガーリック",
];

function createItems() {
 
//エレメント生成、クラスとIDを設定
// appendChildで要素を追加
for(let i = 0 ; i < items.length ; i++) {
    const liElm = document.createElement('li')
    liElm.className = `item_list${i}`

    const labelElm = document.createElement('label');
    labelElm.id = `item${i}`
    labelElm.innerText = `${items[i]}`
    
    const imputElm = document.createElement('input')
    imputElm.id = `item${i}`
    imputElm.type = "range"

    const spanElm = document.createElement('span')
    spanElm.id = `item_value${i}`
    spanElm.innerText =50;

    liElm.appendChild(labelElm);
    liElm.appendChild(imputElm);
    liElm.appendChild(spanElm);

    ul.appendChild(liElm);
    
  }
}

createItems();

//それぞれのバーにイベントを設定>数値とバーの入力値を同期
for (let i = 0; i < items.length; i++) {
  const li = document.querySelectorAll("li")[i]

  const input = document.querySelectorAll('input')[i];

  const span = document.querySelectorAll('span')[i];


  //バーの数値を数字で表示する
  input.addEventListener('input', () => {
    span.innerText = input.value;
  })

}

