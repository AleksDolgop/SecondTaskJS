//Поиск всех возможных ходов
//input - изначальная позиция фигуры(шахматного коня), состоит из строки длиной в два символа.
function findPossibleSteps(input){
    //Проверка ввода. Длина строки не должна привышать 2 символов.
    if(String(input).length != 2)
    {
        alert('Ошибка: Неверно введена позиция коня на шахматной доске.\nПример \'F6\'.');
        return null;
    }

    //Проверка ввода. Буква должна быть в интервале от A до H.
    if(String(input).charAt(0) > 'H' || String(input).charAt(0) < 'A')
    {
        alert('Ошибка: Неверно введена позиция коня на шахматной доске.\nБуква должна быть в интервале от A до H.');
        return null;
    }

    //Проверка ввода. Цифра должна быит на интервале от 1 до 8.
    if(+String(input).charAt(1) > 8 || +String(input).charAt(1) < 1)
    {
        alert('Ошибка: Неверно введена позиция коня на шахматной доске.\nЦифра должна быит на интервале от 1 до 8.');
        return null;
    }

    //Позиция коня на шахматной доске
    const position = {
        x: null,
        y: +String(input).charAt(1)
    }

    //Используется для вычисления положения коня по X на шахматной доске
    const chessBoardX = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ];

    //Содержит все возможные ходы шахматного коня
    const steps = 
    {
        x: [ -1,  1,  2, 2, 1, -1, -2, -2 ],
        y: [ -2, -2, -1, 1, 2,  2, -1,  1 ]
    }

    //Поиск номера столбца
    for (let i=0;i<8;i++)
    {
        if(chessBoardX[i] === String(input).charAt(0))
        {
            position.x = i+1;
            break;
        }
    }

    let output = '';
    
    //Проверяем все возможные ходы.
    for(let i=0; i<8; i++)
    {
        //Ищем шаги, которорые не выходят за пределы шахматной доски
        let newX = position.x + steps.x[i];
        let newY = position.y + steps.y[i];
        if( newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8)
        {
            output += ' '+chessBoardX[newX-1]+newY;
        }     
    }

    return output;
}

//Объект ходы коня)))).   
const horseWalk = new Vue({
    el: '#horse_walk',
    data: {
        position: '',
    },
    methods:{
        result(){
            let possibleSteps = findPossibleSteps(this.position);
            if(possibleSteps!=null){
                alert('Результат:\n'+ possibleSteps);
            }
        }
    }
    
});