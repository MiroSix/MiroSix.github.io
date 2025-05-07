/*


        CODE IS ZEER SLECHT, MOET NOG OPTIMALISEREN MAAR ALLES WERKT


*/

const setup = () => {
    loadMovies();
}

const createElementWithClassName = (event, classname) => {
    let object = document.createElement(event);
    object.className = classname;
    return object;
}

const createElementWithClassNameAndText = (event, classname, text) => {
    let object = document.createElement(event);
    object.className = classname;
    object.innerHTML = text;
    return object;
}

const createAndAppendLikeAndDislike = (event) => {
    let likeAndDislikeDiv = createElementWithClassName("div", "likeAndDislikeDiv");

    let like = createElementWithClassName("i", "fas");
    like.addEventListener("click", likeClick);
    like.id = "like";
    like.classList.add("fa-thumbs-up");
    let dislike = createElementWithClassName("i", "fas");
    dislike.addEventListener("click", dislikeClick);
    dislike.classList.add("fa-thumbs-down");
    dislike.id = "dislike";
    likeAndDislikeDiv.append(like);
    likeAndDislikeDiv.append(dislike);
    event.append(likeAndDislikeDiv);
}

const likeClick = (event) => {
    let likeAmount = document.getElementById("likeAmount");
    let dislikeAmount = document.getElementById("dislikeAmount");

    if(event.target.classList.contains("liked")){
        let title = event.target.parentElement.parentElement.querySelectorAll(".title")[0].textContent;
        removeMovieFromLikebarWithTitle(title);
        if(event.target.parentElement.querySelectorAll(".disliked") !== undefined){
            likeAmount.innerHTML--;
            event.target.classList.remove("liked");
        }
        else{
            likeAmount.innerHTML--;
            event.target.classList.remove("liked");
        }
    }
    else{
        if(event.target.parentElement.querySelectorAll(".disliked")[0] !== undefined){
            likeAmount.innerHTML++;
            dislikeAmount.innerHTML--;
            event.target.classList.add("liked");
            let likedMovieTitle= event.target.parentElement.parentElement.querySelectorAll(".title")[0].textContent;
            addMovieToLikebar(likedMovieTitle);
            let dislike = event.target.parentElement.querySelectorAll(".disliked")[0];
            dislike.classList.remove("disliked");
        }
        else{
            likeAmount.innerHTML++;
            let likebar = document.getElementById("likebar");
            likebar.style.visibility = "visible";
            let likedMovieTitle= event.target.parentElement.parentElement.querySelectorAll(".title")[0].textContent;
            addMovieToLikebar(likedMovieTitle);
            event.target.classList.add("liked");
        }
    }
}

const addMovieToLikebar = (title) => {
    let likebar = document.getElementById("likebar");
    let likedMovieDiv = createElementWithClassName("div", "likedMovieDiv");
    likebar.append(likedMovieDiv);
    likedMovieDiv.append(createElementWithClassNameAndText("div", "movieTxt", title));
    let icon = createElementWithClassName("i", "fas fa-trash");
    icon.addEventListener("click", removeMovieFromLikebarWithTrashcan);
    likedMovieDiv.append(icon);
}

const removeMovieFromLikebarWithTrashcan = (event) => {
    let likedMovieDiv = event.target.parentElement;
    let title = likedMovieDiv.querySelector(".movieTxt").textContent;

    resetLikeDislikeForMovie(title);
    likedMovieDiv.remove();
}

const resetLikeDislikeForMovie = (title) => {
    let movies = document.querySelectorAll(".movie");

    for (let movie of movies) {
        let movieTitle = movie.querySelector(".title").textContent;

        if (movieTitle === title) {
            let likeBtn = movie.querySelector("#like");
            let dislikeBtn = movie.querySelector("#dislike");
            let likeAmount = document.getElementById("likeAmount");
            let dislikeAmount = document.getElementById("dislikeAmount");

            if (likeBtn.classList.contains("liked")) {
                likeAmount.innerHTML--;
                likeBtn.classList.remove("liked");
            }

            if (dislikeBtn.classList.contains("disliked")) {
                dislikeAmount.innerHTML--;
                dislikeBtn.classList.remove("disliked");
            }

            break;
        }
    }
}

const removeMovieFromLikebarWithTitle = (title) => {
    let likebar = document.getElementById("likebar");
    let likedMovieTitles = likebar.querySelectorAll(".movieTxt");
    let likedMovies = likebar.querySelectorAll(".likedMovieDiv");
    for (let i = 0; i < likedMovieTitles.length; i++) {
        if(likedMovieTitles[i].textContent === title) {
            likedMovies[i].remove();
        }
    }
}

const dislikeClick = (event) => {
    let dislikeAmount = document.getElementById("dislikeAmount");
    let likeAmount = document.getElementById("likeAmount");

    if(event.target.classList.contains("disliked")){
        if(event.target.parentElement.querySelectorAll(".liked") !== undefined){
            dislikeAmount.innerHTML--;
            event.target.classList.remove("disliked");
        }
        else{
            dislikeAmount.innerHTML--;
            event.target.classList.remove("disliked");
        }
    }
    else{
        if(event.target.parentElement.querySelectorAll(".liked")[0] !== undefined){
            dislikeAmount.innerHTML++;
            likeAmount.innerHTML--;
            event.target.classList.add("disliked");
            let like = event.target.parentElement.querySelectorAll(".liked")[0];
            like.classList.remove("liked");
            let title = event.target.parentElement.parentElement.querySelectorAll(".title")[0].textContent;
            removeMovieFromLikebarWithTitle(title);
        }
        else{
            dislikeAmount.innerHTML++;
            let title = event.target.parentElement.parentElement.querySelectorAll(".title")[0].textContent;
            removeMovieFromLikebarWithTitle(title);
            event.target.classList.add("disliked");
        }
    }

}

const loadMovies = () => {
    let movielist = document.getElementById("movielist");

    for (let i = 0; i < movies.length; i++) {
        let moviediv = createElementWithClassName("div", "movie")
        movielist.append(moviediv);
        let title = createElementWithClassNameAndText("p", "title", movies[i].title)
        moviediv.append(title);

        createAndAppendLikeAndDislike(moviediv);

        let image = createElementWithClassName("img", "image");
        image.src = movies[i].imageUrl;
        moviediv.append(image);
        let description = createElementWithClassNameAndText("div", "description", movies[i].description);
        moviediv.append(description);
    }
}

window.addEventListener("load", setup)