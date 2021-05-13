
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
        return v[1] === ch;   // ex. v[1] == '0'
    })[0]
}


// 1차원 배열이면 indexOf, 2, 3차원 배열이면 find or findIndex를 쓴다
var interval;
function intervalMaker() {
    interval = setInterval(() => {
        if (ch === dict.바위) {
            ch = dict.가위;
        } else if (ch === dict.가위) {
            ch = dict.보;
        } else {
            ch = dict.바위;
        }
        document.querySelector('#computer').style.background =
            'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + ch + ' 0';
    }, 100);
}
intervalMaker();

var score = {
    가위 : 1,
    바위 : 0,
    보 : -1,
};
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        setTimeout(function() {
            intervalMaker();
        }, 1000);
        // querySelectAll은 여러개의 class 선택시 사용 , 반복문 돌면서 이벤트 리스너 달아준다
        var mychoice= this.textContent; // 나의 선택
        console.log(mychoice, f(ch)); // 나의 선택 , 컴퓨터의 선택

        var myScore = score[mychoice];
        var comScore = score[f(ch)];
        if(myScore - comScore === 0) {
            console.log('비김');
        }else if([-1, 2].includes(myScore - comScore)) { // score[mychoice] - score[f(ch)] == -1 or 2
            console.log('이김');
        }else {
            console.log('짐');
        }
    });
});