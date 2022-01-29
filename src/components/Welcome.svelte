<script lang="ts">
import { differenceInCalendarDays } from 'date-fns';

const 타이틀 = 'Youngdo & Seohye';
const 일시 = '2022. 03. 27. SUN PM 12:20';
const 장소 = '서울 상록아트홀 L층 그랜드볼룸홀';
const DDAY = differenceInCalendarDays(new Date(2022, 2, 27), new Date());
</script>

<section class="background flex-center">
  <section class="welcome">
    <h1 class="who great-vibes">{타이틀}</h1>
    {#if DDAY >= 0}
      <p class="dday">D - {DDAY > 0 ? DDAY : 'DAY!'}</p>
    {/if}
    <h2 class="when">{일시}</h2>
    <h3 class="where">{장소}</h3>
  </section>
</section>

<style>
.background {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(https://kr.object.ncloudstorage.com/wedding/w-gallery-main-960.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.background::before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background-color: rgba(245, 138, 119, 0.2);
  pointer-events: none;
}
.welcome {
  padding-top: 5rem;
  color: white;
  z-index: 1;
  text-align: center;
  text-shadow: 2px 2px 2px rgb(0 0 0 / 40%);
}
.who {
  font-size: 4.5rem;
}
.when,
.where {
  font-size: 1.3rem;
  font-weight: bold;
}
.dday {
  font-size: 1.2rem;
}
</style>
