makeCheckList();
function makeCheckList(){

    const open = [
        '바깥 의자',
        '캠핑카 정리',
        '음악',
        '방 불 켜기',
        '에어컨(히터)켜기',
        '모니터',
        '쇼케이스',
        '내부간판',
        '키오스크',
        '마감근무자가 청소한 집기들 제자리 찾기',
        '물걸레 물 교체하고 바닥 닦기',
        '셀프바 물통에 물 채우고 레몬약간'
    ]
    
    const close = [
        [
            ['굴뚝빵 완판시 바로 해도 되는것'],
            '굴뚝빵 목봉 닦기',
            '굴뚝빵 용품 설거지',
            '굴뚝빵 오븐 밑판 설거지',
            '굴뚝빵오븐 유리벽 닦기',
            '초코중탕기 정리',
        ],
        [
            ['9시전에 미리 할만한것'],
            '테이블 의자 위치 정리',
            '바닥 쓸기',
            '물걸레 락스물로 교체',
            '외부 쓰레기통 정리',
            '온실정리',
            '야외 의자정리',
            '블렌더 설거지',
            'BMP설거지(물들어있는 도구통)',
            '포터필터, 벨크리머 설거지',
            '셀프바 유리물병 설거지',
            '쇼케이스 아래 물버리기',
        ],
        [
            ['9시이후에 해야할것'],
            '굴뚝빵 반죽꺼내기(평일 8개, 주말 15개)',
            '커피머신 마감',
            '커피찌꺼기통 설거지',
            '행주, 린넨 빨기',
            '전날 만든 크림 폐기',
            '폐기빵, 음식물쓰레기 정리',
            '시재확인후 영업마감',
            '캠핑카 전기',
            '거울방 불',
            '문 잠그기',
            '에어컨 확인(홀, 거울방, 창고)',
            '음악끄기',
            '키오스크',
            '화장실 불',
            '모니터',
            '쇼케이스',
            '내부간판, 태블릿 끄기',
            '그라인더 전원',
            '서큘레이터 끄기',
            '진동벨 충전',
            '스팀노즐 위치',
            '피아노커버덮기',
        ]
    ]

    // const checkList = location.pathname==="/choha-tutorial/html/chk-open.html"?open:close;
    const checkList = close;
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