const { url_video, date_view } = data.config;

const showVideo = new Date

const today = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
const formatedDateView = `${new Date(date_view).getDate()}/${new Date(date_view).getMonth()}/${new Date(date_view).getFullYear()}`;

const init = () => {
    const URL_VIDEO = url_video;
        if (today === formatedDateView) {
            (() => {
                const videoContainer = document.getElementById("video-js-container");

                videoContainer.innerHTML = "<div id='video-js-close-btn' class='video-js-close-btn'><p>+</p></div><video id='videojs' class='video-js vjs-big-play-centered vjs-fill' controls autoplay playsinline />";

                registerIVSTech(videojs);
                registerIVSQualityPlugin(videojs);               
    
                const videoJSPlayer = videojs("videojs", {
                    techOrder: ["AmazonIVS"],
                    controlBar: {
                        playToggle: {
                            replay: false
                        },
                        pictureInPictureToggle: false
                    }
                });
    
                videoJSPlayer.enableIVSQualityPlugin();
                videoJSPlayer.volume(0.5);
                videoJSPlayer.src(URL_VIDEO);
            })()
        }
}

(() => {    
    const head = document.getElementsByTagName("head")[0];    
    const style = document.createElement("link");
    
    style.rel  = "stylesheet";
    style.href = "https://cdnjs.cloudflare.com/ajax/libs/video.js/7.6.6/video-js.css";
    
    head.appendChild(style);
    
    init();
    
})()