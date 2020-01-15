import React from 'react';

const BottomNavigation = () => {
    return (
        <div>
            {/* Тут будет нижнее меню  250x400 iphone7*/}


            <div class="bottom-nav">

                <div class="profil icon-bottom">

                    <div class="wrap-img-bottom">
                        <img src="img/SVG/user.svg"></img>
                        <p>Профиль</p>
                    </div>

                    
                </div>


                <div class="history icon-bottom">
                    <div class="wrap-img-bottom">
                        <img src="img/SVG/clock-o.svg"></img>
                        <p>История</p>
                    </div>
                    
                </div>


                <div class="workout icon-bottom">
                    <div class="wrap-img-bottom">
                        <img src="img/SVG/plus.svg"></img>
                        <p>Воркаут</p>
                    </div>
                    
                </div>


                <div class="exercises icon-bottom">
                    <div class="wrap-img-bottom">
                        <img src="img/SVG/gym.svg"></img>
                        <p>Упражнения</p>
                    </div>

                    
                </div>


                <div class="froze icon-bottom">
                    <div class="wrap-img-bottom">
                        <img src="img/SVG/ruler.svg"></img>
                        <p>Замер</p>
                    </div>
                    
                </div>


            </div>



            {/* Тут будет нижнее меню */}
        </div>
    );
}

export default BottomNavigation;