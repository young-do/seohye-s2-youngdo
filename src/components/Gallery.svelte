<script lang="ts">
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { onMount } from 'svelte';

const imageUrls = new Array(12)
  .fill(null)
  .map((_, i) => `https://kr.object.ncloudstorage.com/wedding/w-gallery-${i}-960.webp`);
const srcsets = imageUrls.map((_, i) => {
  return [
    `https://kr.object.ncloudstorage.com/wedding/w-gallery-${i}-320.webp 960w`,
    `https://kr.object.ncloudstorage.com/wedding/w-gallery-${i}-640.webp 1920w`,
    `https://kr.object.ncloudstorage.com/wedding/w-gallery-${i}-960.webp 2880w`,
  ].join(',');
});
const imageRatios: Record<string, number> = {};

let rootElement: HTMLDivElement;
let imageWidth: number;

const openPhotoSwipe = (index: number) => (e: Event) => {
  const thumbnailElement = e.target as HTMLElement | null;

  if (!rootElement) return;
  if (!thumbnailElement) return;

  const resizedItems = imageUrls.map(src => {
    const w = window.innerWidth;
    const ratio = imageRatios[src] ?? 1;
    const h = Math.floor(w * ratio);
    return { src, w, h };
  });

  const options: PhotoSwipeUI_Default.Options = {
    index,
    galleryUID: index + 1,
    showAnimationDuration: 0,
    tapToClose: true,
    captionEl: false,
    shareEl: false,
    fullscreenEl: false,
  };

  const gallery = new PhotoSwipe(rootElement, PhotoSwipeUI_Default, resizedItems, options);
  gallery.init();
};

const saveWidthHeight = (url: string) => (e: Event) => {
  const target = e.target as HTMLImageElement;
  const { naturalWidth, naturalHeight } = target;
  imageRatios[url] = naturalHeight / naturalWidth;
};

onMount(() => {
  window.addEventListener('resize', () => {
    imageWidth = Math.floor(window.innerWidth / 3);
  });
  imageWidth = Math.floor(window.innerWidth / 3);
});
</script>

<section class="container flex-center">
  <div class="gallery">
    {#each imageUrls as url, index (index)}
      <img
        loading="lazy"
        src={url}
        srcset={srcsets[index]}
        alt="{index + 1}번째 사진 보기"
        width={imageWidth}
        height={imageWidth}
        on:click={openPhotoSwipe(index)}
        on:load={saveWidthHeight(url)}
      />
    {/each}
  </div>
  <div class="pswp" tabIndex={-1} role="dialog" aria-hidden="true" bind:this={rootElement}>
    <div class="pswp__bg" />

    <div class="pswp__scroll-wrap">
      <div class="pswp__container">
        <div class="pswp__item" />
        <div class="pswp__item" />
        <div class="pswp__item" />
      </div>

      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <div class="pswp__counter" />
          <button class="pswp__button pswp__button--close" title="Close (Esc)" />
          <button class="pswp__button pswp__button--zoom" title="Zoom in/out" />

          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut" />
              </div>
            </div>
          </div>
        </div>

        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />

        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />

        <div class="pswp__caption">
          <div class="pswp__caption__center" />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.container {
  width: 100%;
  padding: 1rem;
  background-color: #fff;
}
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 4px;
  row-gap: 4px;
}
.gallery img {
  object-fit: cover;
}
</style>
