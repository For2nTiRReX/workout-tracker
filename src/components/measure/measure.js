import React from 'react';

const Measure = () => {
    return (
        <div className="measure">
            {/* начало Тут будет верхняя панель 250x400 iphone7 */}
            <div className="measure-gray-text"> Ключевые</div>
            <div><h4>Вес</h4></div>
            <div><h4>Процент жировой массы </h4></div>
            <div><h4>Потребление каллорий</h4></div>

            <div className="measure-gray-text"> Часть тела</div>
            <div><h4>Шея</h4></div>
            <div><h4>Плечи</h4></div>
            <div><h4>Грудь</h4></div>

            {/* конец Тут будет верхняя панель */}
        </div>
    );
}

export default Measure;