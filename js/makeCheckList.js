makeCheckList();
function makeCheckList(){

    const open = [
        '바깥 의자',
        '캠핑카 정리',
        '음악',
        '방 불 켜기',
        '모니터',
        '쇼케이스',
        '내부간판',
        '키오스크',
        '마감근무자가 청소한 집기들 제자리 찾기',
        '물걸레 물 교체하고 바닥 닦기'
    ]

    const close = [
        '블렌더 설거지',
        '에어프라이어 트레이 설거지',
        '포터필터, 벨크리머 설거지',
        '바닥 쓸기',
        '물걸레 락스물로 교체',
        '야외 의자정리',
        '피아노정리',
        '물걸레통 물 락스물로 교체해서 걸레 담가놓기',
        '스팀노즐 위치',
        '진동벨 충전',
        '에어컨 확인(홀, 거울방 불)',
        '캠핑카 전기',
        '행주, 린넨 빨기',
        '커피머신 마감',
        '점 찍힌 빵 폐기',
        '빵에 점 찍기',
        '음식물쓰레기 정리',
        '거울방 불',
        '화장실 불',
        '모니터',
        '쇼케이스',
        '내부간판'
    ]
    const checkList = location.pathname==="/html/chk-open.html"?open:close;
    const container = document.getElementById('checklist-container');
    for (const key in checkList){
        if (Object.hasOwnProperty.call(checkList, key)) {
            const element = checkList[key];

            makeList(key,element)

            
        }
    }
    
    function makeList(i,text) {  
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
        
        container.appendChild(content);
        console.log(content);
        
        
        
    }
    
}