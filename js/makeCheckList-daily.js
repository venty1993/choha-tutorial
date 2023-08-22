makeCheckList();
function makeCheckList(){
    
    const checkList = [
        [
            ['화장실 관리'],
            '손제정제 잔량 체크',
            '두루마리 휴지 체크',
            '잔여 핸드타올 체크',
            '세면대 물때 닦기',
            '쓰레기통 관리',
            '변기 청소'
        ],
        [
            ['음료 재료 확인'],
            '딸기청',
            '블루베리청',
            '자몽청',
            '레몬청',
            '밀크티원액',
            '콜드브루 원액',
            '찹쌀떡',
            '인절미 꼬치'
        ],
        [
            ['유통기한 체크'],
            '굴뚝빵크림',
            '빙수 연유',
            '굴뚝빵 설탕',
            '인절미크림',
            '흑임자크림',
            '바닐라베이스',
            '굴뚝빵설탕',
            '굴뚝빵식용유'
        ],
        [
            ['매장 내부'],
            '아기의자 닦기',
            '쇼케이스',
            '유리 출입문 닦기'
        ],
        [
            ['작업대 정리'],
            '파우더통 닦기',
            '시럽병 닦기',
            '테이블냉장고 닦기',
            '빙수재료 냉장고 닦기',
            '제빙기 닦기',
            '빙수 재료 통 닦기'
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