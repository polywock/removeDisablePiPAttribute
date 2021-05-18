javascript:document.querySelectorAll("video").forEach(video => {
        /* https://github.com/polywock/removeDisablePiPAttribute */
        video.removeAttribute("disablePictureInPicture");
})
