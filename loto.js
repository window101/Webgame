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

    var 결과창 = document.getElementById('결과창');

    for(var i = 0; i<당첨숫자들.length; i+=1) {
        var 공 = document.createElement('div');
        공.textContent = 당첨숫자들[i];
        결과창.appendChild(공);
    }
    var 보너스칸 = document.getElementsByClassName('보너스')[0];
    var 보너스공 = document.createElement('div');
    보너스공.textContent = 보너스;
    보너스칸.appendChild(보너스공);