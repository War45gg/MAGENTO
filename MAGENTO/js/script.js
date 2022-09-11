// Отображение бургера
const burger = document.querySelector('.burger')
const burger_header = document.querySelector('.burger-header')
const burger_body = document.querySelector('.burger-body')
const burger_icon = burger_header.querySelector('.burger-open')
const burger_menu = burger_body.querySelector('.menu-list')
const main_wrapper =  document.querySelector('.main-wrapper')
const mob_wrapper = document.querySelector('.mob-wrapper')

if (window.innerWidth <= 540) {
    burger_header.classList.remove('_hidden')
    burger_body.classList.add('_hidden')

    // Opening/closing burger
    burger_header.addEventListener('click', function () {
        document.querySelector('.burger').classList.toggle('burger-active-bg')
        burger_icon.classList.toggle('burger-open')
        burger_icon.classList.toggle('burger-close')
        burger_body.classList.toggle('_hidden')
        burger_menu.classList.toggle('burger-active')
        burger.classList.toggle('burger-padding')
    })
}

// Algaryte opening/closing work Services
const iteam_content = document.querySelectorAll('.services-iteam-content')

if (window.innerWidth >= 1040) {
    iteam_content.forEach(function(iteam) {

        const iteam_intro = iteam.querySelector('.serv-iteam-intro')
        const iteam_info = iteam.querySelector('.serv-iteam-info')
    
        iteam.addEventListener('click', function (event) {
    
            iteam_content.forEach(function (iteam) {
                iteam.querySelector('.serv-iteam-info').classList.add('_hidden')
                iteam.classList.add('width-fix')
                iteam.classList.remove('services-iteam-content-active')
                iteam.querySelector('.serv-iteam-intro').classList.remove('icon-open')
            })
    
            event.stopPropagation()
            iteam.classList.toggle('width-fix')
            iteam.classList.toggle('services-iteam-content-active')
            iteam_info.classList.toggle('_hidden')
            iteam_intro.classList.toggle('icon-open')
    
        })
        document.addEventListener('click', function(event) {
            if (event.target !== iteam) {
                iteam_info.classList.add('_hidden')
                iteam.classList.add('width-fix')
                iteam.classList.remove('services-iteam-content-active')
                iteam_intro.classList.remove('icon-open')
            }
        })
    })
}

else {
    iteam_content.forEach(function (iteam) {

        iteam.addEventListener('click', function(e) {
            e.stopPropagation()
            iteam_content.forEach(function (iteam) {
                iteam.classList.remove('services-iteam-content-active')
                iteam.querySelector('.serv-iteam-intro').classList.remove('icon-open')
            })

            iteam.classList.toggle('services-iteam-content-active')
            iteam.querySelector('.serv-iteam-intro').classList.toggle('icon-open')
        })

        document.addEventListener('click', function(event) {
            if (event.target !== iteam) {
                iteam.classList.remove('services-iteam-content-active')
                iteam.querySelector('.serv-iteam-intro').classList.remove('icon-open')
            }
        })
    })
}

// Изменение case 

if (window.innerWidth <= 650) {
    main_wrapper.classList.add('_hidden')
    mob_wrapper.classList.remove('_hidden')
}


