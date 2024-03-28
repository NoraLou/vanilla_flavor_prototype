export async function getVideo() {

  const avStream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true
  });

  const video = document.querySelector('video');
  video.srcObject = avStream;
  await video.play();
};

export function drawVideo(canvas) {
  const context = canvas.getContext('2d');
  const domCanvas = document.querySelector('canvas');
}
