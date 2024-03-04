const saveAlbumForm = document.querySelector("#album-form");
const albumTitle = document.querySelector("#album-title");
const albumDescription = document.querySelector("#album-description");
const albumArt = document.querySelector("#album-art");

// test if input of title and desc are empty on submit
saveAlbumForm.addEventListener("submit", onSaveAlbum);

function onSaveAlbum(e) {
    e.preventDefault();
    hasTitle = albumTitle.value.trim();
    hasDescription = albumDescription.value.trim();
    goodAlbum = true;

    if (hasTitle === "") {
        albumTitle.classList.add("is-invalid");
        goodAlbum = false;
    } if (hasTitle !== "") {
        albumTitle.classList.remove("is-invalid");
    }

    if (hasDescription === "") {
        albumDescription.classList.add("is-invalid");
        goodAlbum = false;
    } if (hasDescription !== "") {
        albumDescription.classList.remove("is-invalid");        
    }

    if (albumArt.value === "") {
        albumArt.classList.add("is-invalid");
        goodAlbum = false;
    }
    if (albumArt.value !== "") {
        albumArt.classList.remove("is-invalid");
    }

    if (goodAlbum == true) {
        console.log("you can save this album!");
        
    }
    if (goodAlbum != true) {
        console.log("Please enter correct album inputs.");
        
    }
}

// test if title >15 char during input
albumTitle.addEventListener("input", onHandleTitle);

function onHandleTitle(e) {
    e.preventDefault();    
    const characterCount = e.currentTarget.value.length;
    if (characterCount > 15) {
        albumTitle.classList.add("is-invalid");
    }
    if (characterCount <= 15) {
        albumTitle.classList.remove("is-invalid");
    }
}
// if description >30
albumDescription.addEventListener("input", onHandleDescription);

function onHandleDescription(e) {
    e.preventDefault();
    const characterCount = e.currentTarget.value.length;
    if (characterCount > 30) {
        albumDescription.classList.add("is-invalid");
    }
    if (characterCount <= 30) {
        albumDescription.classList.remove("is-invalid");
    }
}

albumArt.addEventListener("change", onSelectArt);
function onSelectArt(e) {
    e.preventDefault();
    if (albumArt.value === "") {
        albumArt.classList.add("is-invalid");
    }
    if (albumArt.value !== "") {
        albumArt.classList.remove("is-invalid");
    }

    function render(params) {
        const template = `<div class="col">
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" src="ALBUM IMAGE SELECTION HERE" />
            <div class="card-body">
                <h5 class="card-title">ALBUM DESCRIPTION HERE</h5>
                <p class="card-text">ALBUM TITLE HERE</p>
            </div>
        </div>
    </div>`
    }
}

