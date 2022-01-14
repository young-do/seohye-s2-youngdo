<script lang="ts">
import guitar from '@/assets/guitar.png';
import upArrow from '@/assets/up-arrow.png';
import { onMount } from 'svelte';

let audioEl: HTMLAudioElement;

const onClickMusic = () => {
  audioEl.play().catch(console.error);
};
const onClickUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMount(() => {
  audioEl = document.createElement('audio');
  audioEl.preload = 'auto';
  audioEl.src = 'https://kr.object.ncloudstorage.com/wedding/music.mp3';
  audioEl.volume = 0.2;
});
</script>

<button class="music-button" on:click={onClickMusic}>
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
