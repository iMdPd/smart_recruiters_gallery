import { template, videoContainer } from './domRefs.ts';

let player: YT.Player | null = null;
let playerReady = false;

function initPlayer(): void {
  player = new YT.Player('video-player', {
    events: {
      onReady: () => {
        playerReady = true;
        player?.playVideo();
      }
    }
  });
}

export function pauseVideo(): void {
  player?.pauseVideo();
}

export function playVideo(): void {
  if (playerReady) {
    player?.playVideo();
    return;
  }
}

export function setupPlayer(): void {
  if (!videoContainer.querySelector('iframe')) {
    const iframeClone = template.content.firstElementChild!.cloneNode(true);
    videoContainer.appendChild(iframeClone);

    initPlayer();
  }
}
