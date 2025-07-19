import { videoModal } from './domRefs.ts';
import { pauseVideo, playVideo, setupPlayer } from './youtubePlayer.ts';

export function closeModal(): void {
  pauseVideo();
  videoModal.close();
  document.body.classList.remove('no-scroll');
}

export function openModal(): void {
  videoModal.showModal();
  document.body.classList.add('no-scroll');

  playVideo();
  setupPlayer();
}
