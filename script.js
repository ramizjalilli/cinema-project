
let videosContainer = document.querySelector('.videos_container');
let videosCardContainer = document.querySelector('.videos_card_container');
let sliderFirstContainer = document.querySelector('.slider_first_container');
let popularLeftIcon = document.querySelector('.popular_left_icon');
let popularRightIcon = document.querySelector('.popular_right_icon');
let comedyLeftIcon = document.querySelector('.comedy_left_icon');
let comedyRightIcon = document.querySelector('.comedy_right_icon');
let sliderSecondContainer = document.querySelector('.slider_second_container');
let sliderThirdContainer = document.querySelector('.slider_third_container');
let actionLeftIcon = document.querySelector('.action_left_icon');
let actionRightIcon = document.querySelector('.action_right_icon');
let barsIcon = document.querySelector('.bars_icon');
let closeIcon=document.querySelector('.close_icon')
let navList = document.querySelector('.nav_list');

if (!localStorage.getItem('loggedInUser')) {
    window.location.href = '../login/login.html'
}



fetch("./api/videos.json")                   //axios
    .then(resp => resp.json())
    .then(data => {
        console.log(data);

        data.forEach(x => {
            videosContainer.innerHTML += `
            <div class="video_card">
               <video controls src="${x.video}"></video>
               <p>${x.title}</p>
            </div>
            `
        })
    })


let imgPath = 'https://image.tmdb.org/t/p/w500'



fetch("https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard")
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results);

        data.results.forEach(slider => {
            sliderFirstContainer.innerHTML += `
            <div class="card">
            <img src="${imgPath + slider.poster_path}" alt="">
            <p>${slider.original_title}</p>
        </div>
          `
        })
    })


let count = 0;
let count2 = 0;
let count3 = 0

function slider() {
    for (let i = 0; i < sliderFirstContainer.children.length; i++) {
        sliderFirstContainer.children[i].style.transform = `translateX(${-300 * count}px)`
    }
}

setInterval(() => {
    if (count < sliderFirstContainer.children.length - 4) {
        count++
        slider()
    } else {
        count = 0;
        slider()
    }
}, 3000);


popularRightIcon.addEventListener('click', () => {
    if (count < sliderFirstContainer.children.length - 4) {
        count++
        slider()
    } else {
        count = 0;
        slider()
    }
})

popularLeftIcon.addEventListener('click', () => {
    if (count > 0) {
        count--
        slider()
    } else {
        count = 0;
        slider()
    }
})



fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=comedy')
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results);

        data.results.forEach(slider => {
            sliderSecondContainer.innerHTML += `
            <div class="card">
                <img src="${imgPath + slider.poster_path}" alt="">
                <p>${slider.original_title}</p>
            </div>
            `
        })
    })

function slider2() {
    for (let i = 0; i < sliderSecondContainer.children.length; i++) {
        sliderSecondContainer.children[i].style.transform = `translateX(${-300 * count2}px)`
    }
}

setInterval(() => {
    if (count2 < sliderSecondContainer.children.length - 4) {
        count2++
        slider2()
    } else {
        count2 = 0
        slider2()
    }
}, 3000);


comedyRightIcon.addEventListener('click', () => {
    if (count2 < sliderSecondContainer.children.length - 4) {
        count2++
        slider2()
    } else {
        count2 = 0
        slider2()
    }
})

comedyLeftIcon.addEventListener('click', () => {
    if (count2 > 0) {
        count2--
        slider2()
    } else {
        count2 = 0
        slider2()
    }
})

fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=action')
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results);

        data.results.forEach(slider => {
            sliderThirdContainer.innerHTML += `
            <div class="card">
            <img src="${imgPath + slider.poster_path}" alt="">
            <p>${slider.original_title}</p>
        </div>
            `
        })
    })

function slider3() {
    for (let i = 0; i < sliderThirdContainer.children.length; i++) {
        sliderThirdContainer.children[i].style.transform = `translateX(${-300 * count3}px)`
    }
}

setInterval(() => {
    if (count3 < sliderThirdContainer.children.length - 4) {
        count3++
        slider3()
    } else {
        count3 = 0
        slider3()
    }
}, 3000)


actionRightIcon.addEventListener('click', () => {
    if (count3 < sliderThirdContainer.children.length - 4) {
        count3++
        slider3()
    } else {
        count3 = 0
        slider3()
    }
})

actionLeftIcon.addEventListener('click', () => {
    if (count3 > 0) {
        count3--
        slider3()
    } else {
        count3 = 0
        slider3()
    }
})


let myName = document.querySelector('.my_name');
let profilIcon = document.querySelector('.profil_icon');

myName.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).name

profilIcon.addEventListener('click', () => {
    window.location.href = '../login/login.html'

    localStorage.removeItem('loggedInUser')
})



barsIcon.addEventListener('click',()=>{
    navList.classList.add('nav_active')
})


closeIcon.addEventListener('click',()=>{
    navList.classList.remove('nav_active')

})