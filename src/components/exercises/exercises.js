import React from 'react';

const Exercises = () => {
    return (
        <div>
            {/* начало Тут будет верхняя панель 250x400 iphone7 */}



            <div>
                <form type="search" name="q" >


                    <input type="search" id="text" placeholder="Поиск"></input>

                </form>


            </div>


            <div className="alphabet">Недавние</div>
            <div className="list">

                <div className="list-training">
                    <div>
                        <img src="img/SVG/gym-exercise.svg"></img>
                    </div>

                    <div className="name-exercises">
                        Bicep Curl (Dumbbell)
                    <div className="indicator-body">
                            <div className="part-body"> Руки </div>
                            <div className="time-indicator-exercises">35 повт.</div>
                        </div>
                    </div>

                </div>

                <div className="list-training">
                    <div>
                        <img src="img/SVG/bike.svg"></img>
                    </div>

                    <div className="name-exercises">
                        Bike
                    <div className="indicator-body">
                            <div className="part-body"> Кардио </div>
                            <div className="time-indicator-exercises">20:00</div>
                        </div>
                    </div>

                </div>

                <div className="list-training">
                    <div>
                        <img src="img/SVG/yoga.svg"></img>
                    </div>

                    <div className="name-exercises">
                        yoga
                    <div className="indicator-body">
                            <div className="part-body"> Ключевые </div>
                            <div className="time-indicator-exercises">0:45</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="alphabet">A</div>
            <div className="list">

                <div className="list-training">
                    <div>
                        <img src="img/SVG/gym-exercise.svg"></img>
                    </div>

                    <div className="name-exercises">
                        Ab Wheel
                    <div className="indicator-body">
                            <div className="part-body"> Ключевые </div>
                            <div className="time-indicator-exercises">15 повт.</div>
                        </div>
                    </div>

                </div>

                <div className="list-training">
                    <div>
                        <img src="img/SVG/bike.svg"></img>
                    </div>

                    <div className="name-exercises">
                        Aerobics
                    <div className="indicator-body">
                            <div className="part-body"> Кардио </div>
                            <div className="time-indicator-exercises">0:45</div>
                        </div>
                    </div>

                </div>

                <div className="list-training">
                    <div>
                        <img src="img/SVG/yoga.svg"></img>
                    </div>

                    <div className="name-exercises">
                        Arnold Press
                    <div className="indicator-body">
                            <div className="part-body"> Плечи </div>
                            <div className="time-indicator-exercises">0:45</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="exercises-hidden-box">

                <div className="head-hidden-box">

                    <div className="exit-hidden-box">
                        X
            </div>

                    <div className="name-exercises-hidden-box">
                        Planka
            </div>

                    <div className="correct-hidden-box">
                        Править
            </div>

                </div>


                <div className="nav-hidden-box">
                    <ul>
                        <li><a href="">Резюме</a></li>
                        <li><a href="">История</a></li>
                        <li><a href="">График</a></li>
                        <li><a href="">Рекорды</a></li>
                    </ul>
                </div>

                <div className="defolt-hidden-box-video">
                    <img src="img/SVG/pro-servise.svg" alt=""></img>

                </div>

                <div className="instruction-hidden-box">
                    Инструкция
            <ol>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nulla laborum reprehenderit accusantium eos. Libero?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi distinctio hic earum quam.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ol>
                </div>


                <div className="history-hidden-box">

                    <div className="defolt-box">
                        <h4>Дом</h4>
                        <div>22:06, четверг, 11 июля 2019</div>
                        <h4>Выполнено наборов</h4>
                        <div>1 0:45</div>

                    </div>

                    <div className="defolt-box">
                        <h4>Дом</h4>
                        <div>22:06, четверг, 11 июля 2019</div>
                        <h4>Выполнено наборов</h4>
                        <div>1 0:45</div>

                    </div>


                    <div className="defolt-box">
                        <h4>Дом</h4>
                        <div>22:06, четверг, 11 июля 2019</div>
                        <h4>Выполнено наборов</h4>
                        <div>1 0:45</div>

                    </div>

                </div>


                <div className="schedule-hidden-box">

                    <div className="defolt-box">
                        <div className="name-plus-option">
                            <h4>
                                Planka
                            </h4>

                            <div className="option">
                                <div class="three-dots-menu">
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                </div>

                                <div class="three-dots-menu">
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                </div>
                            </div>

                        </div>

                        <div>Общее время</div>

                        <div className="all-time-schedule"> 3:50</div>



                        <div className="pro-open">Открыть график с PRO</div>
                        <div>График</div>
                        <div>График</div>
                        <div>График</div>
                    </div>
                </div>

                <div className="highscores-hidden-box">
                    <div> ЛИЧНЫЕ РЕКОРДЫ</div>
                    <div>
                        <div>Макс.Длительность</div>
                        <div>0:45</div>
                    </div>
                </div>

<div className="pro-function">Смотреть историю рекордов</div>

            </div>






            {/* конец Тут будет верхняя панель */}
        </div>
    );
}

export default Exercises;