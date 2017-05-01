function JourneyCreater(_cards){
    this.initialCards = _cards;
    this.sortedCards = [];
    // начало и конец  пути для графа
    var cornerPoint;
    var err;

    this.sortCards = function() {
        if(this.sortedCards.length)
            return this.sortedCards;

        this.sortedCards = [];
        cornerPoint = {'start': 0};
        //выбрали все значения пунктов 
        var points = [];
        points = this.initialCards.reduce((res, card)=>{
            res.push(card.from);
            res.push(card.to);

            return res;
        },[])

        //оставили уникальные 
        points = new Set(points);
        points = Array.from(points);

        //составляем пустую матрицу инцтдентности
        var matrix = new Array();

        for (var i = 0; i < points.length; i++) {
            matrix.push(Array(this.initialCards.length+1));
        }

        // заполним матрицу значениями -1 - ребро выходит 1 - входит ,  по x - ребра,  по y  - вершины
        this.initialCards.forEach((card, i)=>{
            let from = points.indexOf( card.from );
            let to = points.indexOf( card.to );

            matrix[from][i] = -1;
            matrix[to][i] = 1;
        })

        //Проверим явяется ли граф именно эйлеровым циклом, если нет, то достроим ребро получив из цепи цикл
        if (!isEulerGraph(matrix)) {
            err = ['Путь,  в котором задествованы все карточки,  не может быть построен'];
        } else {
            //пометим первую першину как пройденую
            var checkedVertex = [cornerPoint['start']];
            var path = [];
            var curr = cornerPoint['start'];

            while (checkedVertex.length!=0) {
                var tupic = false

                while(!tupic) {
                    // если нет отрицательных значений в строке
                    if(!isNegativeInRow(matrix[curr])) {
                        tupic = true;
                    } else {
                        //находим выходящее ребро, добавляем его к массиву путей и меняем текущий узел, уделим ребро из матрицы
                        var endcond = false;

                        matrix[curr].forEach((item, i) => {
                            if (!endcond) {

                                if(item < 0) {
                                    let newIndex;

                                    //находим новый  узел (ориентируемся по столбцу)
                                    for (var j = 0; j < points.length; j++) {
                                        if( matrix[j][i]==1 ) {
                                            newIndex = j;
                                            break;
                                        }
                                    }

                                    //удаляем ребро
                                    matrix[curr][i] = 0;
                                    matrix[newIndex][i] = 0;

                                    //пополняем список пройденных вершин и меняем текущую вершину
                                    checkedVertex.push(newIndex);
                                    curr = newIndex;

                                    endcond = true;
                                }
                            }
                        });
                    }
                }

                // если вышли из цикла т.к.   нет непройденных ребер от последней вершины,  то добавляем ее в путь и 
                path.push( checkedVertex.pop());
                curr = checkedVertex[checkedVertex.length-1];
            }

            //перевернем путь чтобы получить верный
            path = path.reverse();

            var pairPath = [];

            // cоставим пары
            var previous = path[0];
            path.forEach((curr, i)=> {
                if(i > 0) {
                    pairPath.push([ points[previous], points[curr]]);

                    previous = curr;
                }
            });

            //отсортируем исходный массив

            pairPath.forEach((item)=>{
                var end = false;
                var i = 0;

                while(!end) {
                    var card = this.initialCards[i];

                    if(card['from']==item[0] && card['to']==item[1] && !cards[i]['used']) {
                        this.sortedCards.push(formatOutputCard(card));

                        this.initialCards[i]['used'] = 'true';

                        break;
                    }
                    i++;   
                }
            })
        }

        
        return this.sortedCards.length ? this.sortedCards : err;
    }   

    function formatOutputCard(card) {
        let res = `Take ${card['transport']['type']} ${card['transport']['number']} from ${card['from']} to ${card['to']}.`;

        //указано ли место
        if(card['transport']['seatNumber']) 
            res+=` Seat ${card['transport']['seatNumber']}.`;
        else 
            res+= `No seat assignment.`;

        //пропускной пункт
        if(card['transport']['gate']) 
            res+=` Gate ${card['transport']['gate']}.`;

        //багаж
        if(card['baggage']['transferPoint']=='automatically') 
            res+=` Baggage will be automatically transferred from your last leg.`;
        else if(card['baggage']['transferPoint']) 
            res+=` Baggage drop at ticket counter ${card['baggage']['transferPoint']}.`;

        return res;
    }

    function isEulerGraph(_matrix) {
        let counter = 0;

        _matrix.forEach((row, i)=>{
            let rowSumm = row.reduce((summ, item)=>{ return summ+item; }, 0);

            // найдем начало и конец
            if (rowSumm!=0) {
                counter++;

                cornerPoint[rowSumm==-1 ? 'start' : 'end'] = i;
            }
        })

        return counter>2 ? false : true;
    }

    function isNegativeInRow(row) {
        let res = false;
        
        row.forEach((item)=> {
            if(item < 0)
                res = true; 
        })

        return res;
    }
};


