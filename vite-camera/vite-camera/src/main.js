import '../style.css';
import { getVideo, drawVideo } from "./camera";

const video = await getVideo();
const canvas = document.querySelector("canvas");

// drawVideo(video);
