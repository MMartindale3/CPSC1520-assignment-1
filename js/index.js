const saveAlbumForm = document.querySelector("#album-form");
const albumTitle = document.querySelector("#album-title");
const albumDescription = document.querySelector("#album-description");
const albumArt = document.querySelector("#album-art");


// test if input of title and desc are empty on submit
saveAlbumForm.addEventListener("submit", onSaveAlbum);
function onSaveAlbum(e) {
    e.preventDefault();
    console.log(e.currentTarget.elements["album-title"].value.length);    
}

// test if title is >10 char during input
albumTitle.addEventListener("input", onTypeTitle);  
function onTypeTitle(e) {
    e.preventDefault();
    console.log(e.currentTarget.value.length);
    
}

albumDescription.addEventListener("input", onTypeDescription);
function onTypeDescription(e) {
    e.preventDefault();
    console.log(e.currentTarget.value.length);
}

albumArt.addEventListener("change", onSelectArt);
function onSelectArt(e) {
    e.preventDefault();
    
}

