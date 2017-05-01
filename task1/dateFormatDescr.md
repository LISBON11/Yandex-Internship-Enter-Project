Формат данных для входящего массива JourneyCreater
Пример:
[
    {
        'from': 'point3',
        'to': 'point4',
        'transport': {
            'type': 'flight',
            'number': '78A',
            'seatNumber': '',
            'gate': ''
        },
        'baggage': {
            'transferPoint' : 'automatically'
        }
    },
    {...},
    ...
    {...}
}


(*) - поля не могут быть пустыми.

from - название пункта отправки, (*)
to - название пункта прибытия,  (*)

transport - блоок, содержащий информацию о транспорте, (*)
type - тип  транспорта, (*)
number - номер рейса, (*)
seatNumber - номер места
gate - номер контрольно пропукного пункта 

baggage - блок информации о багаже
transferPoint - место отправки. Может принимать значения automatically, пустое, строку 
