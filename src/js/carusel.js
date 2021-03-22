export default () => {
    let btnLeft               = document.querySelector('.sServices .sliderBtnLeft');
    let btnRight              = document.querySelector('.sServices .sliderBtnRight');

    let sliderItems           = document.querySelectorAll('.sServices .slide');
    let showsDefaulteSlides   = 3;
    let activeSlidePageIndex  = 0;
    let countOfMargin         = 0;
    let numberOfMarginStatic  = 33.33333333333333;

    if(screen.width <= 850){
        showsDefaulteSlides  = 2;
        numberOfMarginStatic = 50;
    }

    if(screen.width <= 850){
        showsDefaulteSlides  = 2;
        numberOfMarginStatic = 50;

        if(screen.width <= 650){
            showsDefaulteSlides  = 1;
            numberOfMarginStatic = 100;
        }
    }

    

    let checkRange = (func, isLeft = false) => {  
        console.log(activeSlidePageIndex);
        console.log(countOfMargin);
        
        if(isLeft){
            if(activeSlidePageIndex == 0){
                countOfMargin = -(sliderItems.length - showsDefaulteSlides) * numberOfMarginStatic;
                activeSlidePageIndex = sliderItems.length - showsDefaulteSlides;
                
                console.log(countOfMargin, 'lox')
                
                sliderItems.forEach(item => {
                    item.style.transform = `translateX(${countOfMargin}vw)`;
                });
    
                return
            }
        }
        else{
            if(showsDefaulteSlides + activeSlidePageIndex === sliderItems.length){
                countOfMargin = 0;
                activeSlidePageIndex = 0;
    
                sliderItems.forEach(item => {
                    item.style.transform = `translateX(${0})`;
                });
    
                return
            }
        }

        func()
    }

    let moveSlideRight = () => {    
      
            checkRange(() => {
                activeSlidePageIndex++;
                countOfMargin -= numberOfMarginStatic;

                sliderItems.forEach(item => {
                    item.style.transform = `translateX(${countOfMargin + 'vw'})`;
                });
            });
       

        
        console.log(countOfMargin);
        console.log(activeSlidePageIndex)
    };

    let moveSlideLeft = () => {
        
       checkRange(() => {
            activeSlidePageIndex--;
            countOfMargin += numberOfMarginStatic;

            sliderItems.forEach(item => {
                item.style.transform = `translateX(${countOfMargin + 'vw'})`;
            });
       }, true);
    };

    btnRight.addEventListener('click', moveSlideRight);
    btnLeft.addEventListener('click', moveSlideLeft);

    //swipe adaptive
    let slider = document.querySelector('.slider');

    let x;
    let y;

    let touchStart = e => {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;

        console.log(touches[0].clientX);
    };

    slider.addEventListener('touctstart', touchStart);
}