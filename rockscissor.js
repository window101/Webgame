var ch = 0; // 이미지 좌표
var dict = { // 가위바위보
    바위 : '0',
    가위 : '-142px',
    보 : '-284px'
};

// Object.entries(객체) => 배열로 바꿔줌
// find => forEach 처럼 반복문을 돌다가 return이 true가 되는 것이 나오면 찾아준다

console.log(Object.entries(dict)); // 객체를 배열로 바꿔준다
function f(ch) {
    return Object.entries(dict).find((v)=> {
      return v[1] === ch;
    })[0]
}


// 1차원 배열이면 indexOf, 2, 3차원 배열이면 find or findIndex를 쓴다
setInterval(()=> {
    if(ch === dict.바위) {
        ch = dict.가위;
    } else if(ch === dict.가위) {
        ch = dict.보;
    }else {
        ch = dict.바위;
    }
    document.querySelector('#computer').style.background =
        'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)'+ch + ' 0';
}, 100);


document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        // querySelectAll은 여러개의 class 선택시 사용 , 반복문 돌면서 이벤트 리스너 달아준다
        var mychoice= this.textContent;
        console.log(mychoice, f(ch));
    });
});
