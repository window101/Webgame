document.querySelector('#exec').addEventListener('click', () => {
    var hor = document.querySelector('#hor').value;
    var ver = document.querySelector('#ver').value;
    var mine = document.querySelector('#mine').value;
    console.log(hor, ver, mine);

    //지뢰 위치 뽑기
    var candidates = Array(hor * ver) // 0 ~ 99 뽑기
        .fill()
        .map((element, index) => {
        return index;
    })
    var shuffles = [];
    while(candidates.length > 80) {
        var moves = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
        shuffles.push(moves);
    }
    console.log(shuffles);

    //지뢰 테이블 만들기 ( 화면부분 = tbody, tr, td  / 데이터부분 = dataset )
    var dataset = [];
    var tbody = document.querySelector('#table tbody');

    for(var i = 0; i<ver; i+=1) {
        var arr= [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for(var j = 0; j<hor; j+=1) {
            arr.push(1);
            var td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = 1;
        }
        tbody.appendChild(tr);
    }
    console.log(dataset);

    //지뢰 심기 (지뢰 위치 뽑은 숫자를 화면 부분 , 데이터 셋에 'X'로 반영)

    for(var k = 0; k <shuffles.length; k++) {
        var col = Math.floor(shuffles[k] / 10); // 세로
        var row = shuffles[k] % 10; // 가로
        console.log(col, row);
        tbody.children[col].children[row].textContent = 'X';
        dataset[col][row] = 'X';

    }
    console.log(dataset);

})