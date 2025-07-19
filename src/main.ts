const mediaPlayer = document.getElementById('media-player') as HTMLButtonElement;
const videoModal = document.getElementById('video-modal') as HTMLDialogElement;
const closeModalBtn = document.getElementById('modal-close') as HTMLButtonElement;
const videoContainer = document.getElementById('video-container') as HTMLDivElement;
const template = document.getElementById('youtube-template') as HTMLTemplateElement;

let player: YT.Player | null = null;
let playerReady = false;

function openModal(): void {
  videoModal.showModal();
  document.body.classList.add('no-scroll');

  if (player && playerReady) {
    player.playVideo();
    return;
  }

  if (!videoContainer.querySelector('iframe')) {
    const iframeClone = template.content.firstElementChild!.cloneNode(true);
    videoContainer.appendChild(iframeClone);

    initPlayer();
  }
}

function closeModal(): void {
  if (player?.pauseVideo) {
    player.pauseVideo();
  }

  videoModal.close();
  document.body.classList.remove('no-scroll');
}

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

mediaPlayer.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
videoModal.addEventListener('close', closeModal);
