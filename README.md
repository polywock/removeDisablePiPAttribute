# removeDisablePiPAttribute
Bookmarklet that removes disablePictureInPicture attributes from videos. 

Useful for Disney Plus and other websites. 

### Usage 
1. To create the bookmarklet, edit any existing bookmarklet and change the URL to the code inside bookmarklet.js. As for bookmark name, choose anything.
2. Click on the bookmarklet to clear disablePict ureInPicture attributes. 
3. Activate PiP mode using your preferred method.  


### Bookmarklet.js 
```
javascript:document.querySelectorAll("video").forEach(video => {
        /* https://github.com/polywock/removeDisablePiPAttribute */
        video.removeAttribute("disablePictureInPicture");
})
```


### Userscript alternative 

https://greasyfork.org/en/scripts/426660-remove-pip-disable-attributes
