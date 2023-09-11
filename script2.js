let videosCardContainer = document.querySelector('.videos_card_container');
let cardsDiv=document.querySelector('.cards_div');
let main2LeftIcon=document.querySelector('.main2_left_icon');
let main2RightIcon=document.querySelector('.main2_right_icon');



fetch("./api/videos2.json")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);

        data.forEach(z => {
            videosCardContainer.innerHTML+=`
            <div class="videos_cards">
               <video controls src="${z.video}"</video>
               <p>${z.title}</p>
            </div>
            `
        })
    })

    let imgPath='https://image.tmdb.org/t/p/w500'


    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8")
    .then(resp => resp.json())
    .then(data => {
        console.log(data.results);

        data.results.forEach(slider => {
            cardsDiv.innerHTML += `
            <div class="card">
            <img src="${imgPath + slider.poster_path}" alt="">
            <p>${slider.original_title}</p>
        </div>
          `
        })
    })

    let count4=0

    function slider(){
        for(let i=0;i<cardsDiv.children.length;i++){
            cardsDiv.children[i].style.transform=`translateX(${-300*count4}px)`
        }
    }
    

    setInterval(() => {
        if (count4 < cardsDiv.children.length - 4) {
            count4++
            slider()
        } else {
            count4 = 0;
            slider()
        }
    }, 3000);

    main2RightIcon.addEventListener('click', () => {
        if (count4 < cardsDiv.children.length - 4) {
            count4++
            slider()
        } else {
            count4 = 0;
            slider()
        }
    })

    main2LeftIcon.addEventListener('click', () => {
        if (count4 > 0) {
            count4--
            slider()
        } else {
            count4 = 0;
            slider()
        }
    })
    