<script lang="ts">
import Welcome from '@/components/Welcome.svelte';
import Sentence from '@/components/Sentence.svelte';
import Gallery from '@/components/Gallery.svelte';
import Map from '@/components/Map.svelte';
import Heart from '@/components/Heart.svelte';
import Cheerup from '@/components/Cheerup.svelte';
import Footer from '@/components/Footer.svelte';
import FABs from '@/components/FABs.svelte';
</script>

<main>
  <Welcome />
  <div class="seperator" />
  <Sentence />
  <div class="seperator" />
  <Gallery />
  <div class="seperator" />
  <Map />
  <div class="seperator" />
  <Heart />
  <div class="seperator" />
  <Cheerup />
  <div class="seperator" />
  <Footer />

  <FABs />
</main>

<style>
main {
  position: relative;
  height: 100vh;
}
.seperator {
  background-color: #f8f9fa;
  height: 1rem;
}
</style>
