makeCheckList();
function makeCheckList(){
    
    const checkList = [
        [
            ['재고파악하기'],
            '음료재료',
            '빙수재료',
            '냅킨',
            '빨대',
            '일회용컵',
            '라면',
            '생수',
            '젓가락',
            
        ],
        [
            ['쓰레기정리:월/금'],
            '일반쓰레기',
            '재활용품',
            '화장실 휴지통'
        ],
        [
            ['유리닦기'],
            '거울방 거울',
            '거울방 유리창',
            '포토존 거울',
            '화장실 거울',
        ],
        [
            ['카운터 먼지 닦기'],
            '포스 아이패드',
            '돈통',
            '키오스크',
        ],
        [
            ['홀 먼지 닦기'],
            '선반',
            '화분',
            '대기 장의자',
        ],
        [
            ['피아노 닦기'],
            '건반',
            '피아노외부',
            '피아노의자'
        ],
        [
            ['삶기'],
            '주방용행주',
            '홀용행주',
            '스팀행주'
        ]
    ]
    // const checkList = open;
    const container = document.getElementById('checklist-container');
    let index = 0;
    for (const key in checkList){
        if (Object.hasOwnProperty.call(checkList, key)) {
            
            const element = checkList[key];
            makeHeader(element[0])
            const innerCon = makeMiniContainer();

           for(let i = 0 ; i < checkList[key].length ; i ++) {

                if(Array.isArray(element[i])){
                    
                    continue;
                }
            makeList(index++,element[i],innerCon)
           }




          
        }
    }

    function makeMiniContainer(){
        const miniCon = document.createElement('div')
        miniCon.classList.add('checklist-inner-container');
        container.appendChild(miniCon);

        return miniCon;
    }
    function makeHeader(text) {
        const h2Tag = document.createElement('h2');
        h2Tag.innerText = text;

        container.appendChild(h2Tag);

    }


    function makeList(i,text,thisContainer) {  
        const content = document.createElement('div');
        content.classList.add('checklist-content');
        
        const label = document.createElement('label');
        label.setAttribute(`for`,`check${i}`);
        
        const input = document.createElement('input');
        input.id = `check${i}`
        input.type = `checkbox`
        
        const p = document.createElement('p');
        p.classList.add('checklist-text');
        
        p.appendChild(document.createTextNode(text))
        
        content.appendChild(label);
        content.appendChild(input);
        content.appendChild(p);
        
        thisContainer.appendChild(content);
        console.log(content);
        
        
        
    }
    
}