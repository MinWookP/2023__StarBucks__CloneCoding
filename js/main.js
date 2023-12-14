/* header */

/* Dropdown Menu */
const mainMenu = document.querySelector('.item__name')
const subMenu = document.querySelectorAll('.item__contents')



/* bages scroll show & hide */
const bageEl = document.querySelector('header .badges')

window.addEventListener('scroll',function(){
    if(window.scrollY > 500){
        gsap.to(bageEl, .6, {
            opacity: 0,
            display: 'none'
        })
    }else{
        gsap.to(bageEl, .6,{
            opacity:1,
            display: 'block'
        })
    }
})

/* Fade-In */
const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach((fadeEl,index)=>{
    gsap.to(fadeEl, 1,{
        delay: (index + 1) * .7,
        opacity: 1
    })
})



/**
 * 슬라이드 요소 관리
 */
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
      nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    }
})
new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
})

/* Promotion Slide Toggle Show & Hide */
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
const promotionToggleIcon = document.querySelector('.toggle-icons')

let isHidePromotion = false;


promotionToggleBtn.addEventListener('click',function(){


    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        promotionToggleIcon.style.backgroundImage = "url(../images/btn_prom_down.png)"
        promotionEl.classList.add('hide')
    }else{
        promotionToggleIcon.style.backgroundImage = "url(../images/btn_prom_up.png)"
        promotionEl.classList.remove('hide')
    }
})

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!

const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({ // 감시할 장면(Scene)을 추가
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
      .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
      .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})
