<script lang="ts">
import guitar from '@/assets/guitar.png';
import upArrow from '@/assets/up-arrow.png';

let audioEl: HTMLAudioElement;
let audioElLoading: 'yet' | 'loading' | 'loaded' = 'yet';

const loadAudio = () => {
  return new Promise<void>((resolve, reject) => {
    audioEl = document.createElement('audio');
    audioEl.src = 'https://kr.object.ncloudstorage.com/wedding/music.mp3';
    audioEl.preload = 'auto';
    audioEl.volume = 0.2;
    audioEl.autoplay = true;
    audioEl.oncanplay = () => resolve();
    audioEl.onerror = err => reject(err);
  });
};

const onToggleMusic = async () => {
  if (audioElLoading === 'yet') {
    audioElLoading = 'loading';
    try {
      await loadAudio();
      audioElLoading = 'loaded';
    } catch (error) {
      console.error(error);
      audioElLoading = 'yet';
    }
    return;
  }
  if (audioElLoading === 'loading') {
    return console.warn('loading...');
  }
  if (audioElLoading === 'loaded') {
    return audioEl.paused ? audioEl.play() : audioEl.pause();
  }
};
const onClickUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<button class="music-button" on:click={onToggleMusic}>
  <img src={guitar} alt="music-icon" />
</button>

<button class="up-button" on:click={onClickUp}>
  <img src={upArrow} alt="up-icon" />
</button>

<style>
button {
  padding: 0.5rem;
}
.music-button {
  position: fixed;
  left: 0.5rem;
  bottom: 0.5rem;
}
.music-button img {
  width: 2rem;
}
.up-button {
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
}
.up-button img {
  width: 1.5rem;
}
</style>
