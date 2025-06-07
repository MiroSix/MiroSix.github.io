// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
const setup = () => {
    loadMovies();
}

const addMovieToLikebarUsingTitle = (title) => {
    let likebar = document.getElementById("likebar");
    if(likebar.querySelector("#likebarmovies").innerHTML === "") {
        likebar.style.visibility = "";
    }
    let likedMovies = document.getElementById("likebarmovies");
    likedMovies.append(createLikebarElement(title));
}

const createLikebarElement = (title) => {
    let likedMovieDiv = createElementWithClassName("div", "likedMovieDiv");
    likedMovieDiv.append(createElementWithClassNameAndText("div", "likedMovieTitle", title));
    let trashcan = createElementWithClassName("i", "fas fa-trash");
    trashcan.addEventListener("click", () => removeMovieFromLikebarUsingTitle(title));
    likedMovieDiv.append(trashcan);
    return likedMovieDiv;
}
const removeMovieFromLikebarUsingTitle = (title) => {
    let likebar = document.getElementById("likebar");
    let likedMovies = document.getElementsByClassName("likedMovieTitle");

    for (let i = 0; i < likedMovies.length; i++) {
        if(likedMovies[i].innerHTML === title) {
            likedMovies[i].parentElement.remove();
        }
    }

    if(likebar.querySelector("#likebarmovies").innerHTML === "") {
        likebar.style.visibility = "hidden";
    }
}

const clickLike = (ev) => {
    let like = ev.target;
    let dislike = like.parentElement.querySelector(".fa-thumbs-down");
    let liked = like.style.color === "green";
    let disliked = dislike.style.color === "red";
    let likeCounter = document.getElementById("likecounter").querySelector("#like");
    let dislikeCounter = document.getElementById("dislikecounter").querySelector("#dislike");
    let titleLikedMovie =  like.parentElement.parentElement.querySelector(".title").innerHTML;

    if(liked){
        like.style.color = "";
        likeCounter.innerHTML--;
        removeMovieFromLikebarUsingTitle(titleLikedMovie);
    }
    else{
        like.style.color = "green";
        likeCounter.innerHTML++;
        addMovieToLikebarUsingTitle(titleLikedMovie);
        if(disliked){
            dislike.style.color = "";
            dislikeCounter.innerHTML--;
        }
    }
}

const clickDislike = (ev) => {
    let dislike = ev.target;
    let like = dislike.parentElement.querySelector(".fa-thumbs-up");
    let liked = like.style.color === "green";
    let disliked = dislike.style.color === "red";
    let likeCounter = document.getElementById("likecounter").querySelector("#like");
    let dislikeCounter = document.getElementById("dislikecounter").querySelector("#dislike");
    let titleLikedMovie =  like.parentElement.parentElement.querySelector(".title").innerHTML;

    if(disliked){
        dislike.style.color = "";
        dislikeCounter.innerHTML--;
    }
    else{
        dislike.style.color = "red";
        dislikeCounter.innerHTML++;
        if(liked){
            like.style.color = "";
            likeCounter.innerHTML--;
            removeMovieFromLikebarUsingTitle(titleLikedMovie);
        }
    }
}

const createLikeAndDislikeDiv = () => {
    let likeAndDislikeDiv = createElementWithClassName("div", "likeAndDislikeDiv");
    let likeIcon = createElementWithClassName("i", "fas fa-thumbs-up");
    likeIcon.id = "like";
    likeIcon.addEventListener("click", clickLike);
    let dislikeIcon = createElementWithClassName("i", "fas fa-thumbs-down");
    dislikeIcon.id = "dislike";
    dislikeIcon.addEventListener("click", clickDislike);
    likeAndDislikeDiv.append(likeIcon);
    likeAndDislikeDiv.append(dislikeIcon);
    return likeAndDislikeDiv;
}
const loadMovies = () => {
    let movieList = document.getElementById("movielist");

    for (let i = 0; i < movies.length; i++) {
        let movie = createElementWithClassName("div", "movie");
        movie.append(createElementWithClassNameAndText("h1", "title", movies[i].title));
        movie.append(createLikeAndDislikeDiv());
        let image = createElementWithClassName("img", "image");
        image.src = movies[i].imageUrl;
        movie.append(image);
        movie.append(createElementWithClassNameAndText("p", "description", movies[i].description));
        movieList.appendChild(movie);
    }
}

const createElementWithClassName = (elementName, classname) => {
    let object = document.createElement(elementName);
    object.className = classname;
    return object;
}

const createElementWithClassNameAndText = (elementName, classname, text) => {
    let object = document.createElement(elementName);
    object.className = classname;
    object.innerHTML = text;
    return object;
}
window.addEventListener("load", setup)