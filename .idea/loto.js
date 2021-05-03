
var 후보군 = Array(45)
    .fill()
    .map(function(element, index) {
    return index + 1;
})
// 맵 => [1, 2, 3, ... 45]
var 셔플 = [];
while(후보군.length > 0) {
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1); // 랜덤한 자리수에서 1개를 뽑는다
    셔플.push(이동값);
}
var 보너스 = 셔플[셔플.length-1];
var 당첨숫자들 = 셔플.slice(0, 6).sort((left, right) => {return left-right;});