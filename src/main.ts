import { closeModalBtn, mediaPlayer, skipLinksList, videoModal } from './modules/domRefs.ts';
import handleSkipLinksClick from './modules/handleSkipLinksClick.ts';
import { initSkipLinks } from './modules/skipLinksInit.ts';
import { closeModal, openModal } from './modules/videoModalControl.ts';

// Initialize the modal functionality
mediaPlayer.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
videoModal.addEventListener('close', closeModal);

// Create skip links
initSkipLinks();
skipLinksList.addEventListener('click', handleSkipLinksClick);
