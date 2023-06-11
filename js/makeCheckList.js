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
        ['9시전'],
        '굴뚝빵 목봉 닦기',
        '굴뚝빵 용품 설거지',
        '초코중탕기 정리',
        '테이블 의자 위치 정리',
        '바닥 쓸기',
        '물걸레 락스물로 교체',
        '캠핑카 전기',
        '외부 쓰레기통 정리',
        '온실정리',
        '야외 의자정리',
        '피아노정리',
        '스팀노즐 위치',
        '블렌더 설거지',
        'BMP설거지(물들어있는 도구통)',
        '에어프라이어 위 집기류 설거지',
        '에어프라이어 내부 트레이 설거지',
        '포터필터, 벨크리머 설거지',
        '셀프바 유리물병 설거지',
        '쇼케이스 아래 물버리기',
        '굴뚝빵 반죽꺼내기',
        '커피머신 마감',
        '커피찌꺼기통 설거지',
        '행주, 린넨 빨기',
        '마감 크림류 폐기',
        '폐기빵, 음식물쓰레기 정리',
        '시재확인후 영업마감',
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
    ]

    const checkList = location.pathname==="/choha-tutorial/html/chk-open.html"?open:close;
    const container = document.getElementById('checklist-container');
    for (const key in checkList){
        if (Object.hasOwnProperty.call(checkList, key)) {
            const element = checkList[key];
            if(Array.isArray(checkList[key])){
                makeHeader(checkList[key][0])
                break;
            }
            makeList(key,element)

            
        }
    }

    function makeHeader(text) {
        const hrTag = document.createElement('hr');
        const h2Tag = document.createElement('h2');
        h2Tag.innerText = text;

        content.appendChild(hrTag);
        content.appendChild(h2Tag);


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