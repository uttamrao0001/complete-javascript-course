// Button scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
    console.log("Target\n");
    const s1coords = section1.getBoundingClientRect();
    //left: means distance from the left, right: distance from the right;
    //top: distance from thr top 
    console.log(s1coords);
    console.log("From\n");
    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

    console.log(
        'height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    //Scrolling
    // window.scrollTo(
    //     s1coords.left + window.scrollX,
    //     s1coords.top + window.scrollY
    // );

    // window.scrollTo({
    //     left: s1coords.left + window.scrollX,
    //     top: s1coords.top + window.scrollY,
    //     behavior: 'smooth',
    // });

    /*we are adding here beacuse of relative change in position of the buttons 
    so of there is only y movement x will not change and we dont need to add scrrolX but it is safe if we add both ScroolX and scrollY as there may be x scrolling possible.
    but we dont use that we have bulit in funtion scrollIntoView.
     */

    section1.scrollIntoView({ behavior: 'smooth' });
});