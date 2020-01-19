import React from 'react';

const Exercises = () => {
    return (
        <div>
            {/* начало Тут будет верхняя панель 250x400 iphone7 */}



<div>
<form type="search" name="q" >


<input type="search"  id="text" placeholder="Поиск"></input>

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

            <div class="exercises-description">

        <div class="head-description">

            <div class="exit-description">
                X
            </div>

            <div class="name-exercises-description">
                Planka
            </div>

            <div class="correct-description">
                Править
            </div>

        </div>


        <div class="nav-description">
            <ul>
                <li><a href="">Резюме</a></li>
                <li><a href="">История</a></li>
                <li><a href="">График</a></li>
                <li><a href="">Рекорды</a></li>
            </ul>
        </div>

        <div class="defolt-box-description-video">
        <img src="img/SVG/pro-servise.svg" alt=""></img>

        </div>

        <div class="instruction-description">
            Инструкция
            <ol>
                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nulla laborum reprehenderit accusantium eos. Libero?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi distinctio hic earum quam.</li>
                <li>Lorem ipsum dolor sit.</li>
            </ol>
        </div>
    </div>


            

            {/* конец Тут будет верхняя панель */}
        </div>
    );
}

export default Exercises;