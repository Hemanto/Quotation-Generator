const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Promt to slect media stream , pass to video element then play

async function selectMediaStrem() {
  try {
    const mediaStrem = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStrem;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {
    console.log(error);
  }
}

selectMediaStrem();
