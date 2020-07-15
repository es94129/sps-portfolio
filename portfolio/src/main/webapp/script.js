function showAbout() {
    $("#about_container").css("display", "inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function() {
            $("#about_container").removeClass("animated slideInLeft");
        },
        800);
}

function closeAbout() {
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function() {
            $("#about_container").removeClass("animated slideOutLeft");
            $("#about_container").css("display", "none");
        },
        800);
}

function showWork() {
    $("#work_container").css("display", "inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function() {
            $("#work_container").removeClass("animated slideInRight");
        },
        800);
}

function closeWork() {
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function() {
            $("#work_container").removeClass("animated slideOutRight");
            $("#work_container").css("display", "none");
        },
        800);
}

function showContact() {
    $("#contact_container").css("display", "inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function() {
            $("#contact_container").removeClass("animated slideInUp");
        },
        800);
}

function closeContact() {
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function() {
            $("#contact_container").removeClass("animated slideOutDown");
            $("#contact_container").css("display", "none");
        },
        800);
}

setTimeout(function() {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function() {
            $("#loading").removeClass("animated fadeOut");
            $("#loading").css("display", "none");
            $("#box").css("display", "none");
            $("#about").removeClass("animated fadeIn");
            $("#contact").removeClass("animated fadeIn");
            $("#work").removeClass("animated fadeIn");
        },
        1000);
    },
    1500);

function getComment() {
    fetch('/data').then(response => response.json()).then((comments) => {
        const statsListElement = document.getElementById('messages_container');
        comments.forEach((comment) => {
            statsListElement.appendChild(
                createListElement(comment));
        });
    });
}

function createListElement(comment) {
    const liElement = document.createElement('li');
    liElement.innerText = comment['message'];

    if (comment.hasOwnProperty('imageUrl')) {
        liElement.appendChild(document.createElement('br'));

        const imgElement = document.createElement('img');
        imgElement.src = comment['imageUrl'];
        liElement.appendChild(imgElement);
    }

    return liElement;
}

function showUploadFilename(filename) {
    $('#upload-filename').html(filename);
}

function fetchBlobstoreUrlAndShowForm() {
  fetch('/blobstore-upload-url')
      .then((response) => {
        return response.text();
      })
      .then((imageUploadUrl) => {
        const messageForm = document.getElementById('comment-form');
        messageForm.action = imageUploadUrl;
        messageForm.classList.remove('hidden');
      });
}
