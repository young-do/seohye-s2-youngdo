<script lang="ts">
import kakaoMapIcon from '@/assets/kakao-map.png';
import naverMapIcon from '@/assets/naver-map.png';

const 위치 = '상록아트홀 L층 그랜드볼룸홀';
const 바로가기 = {
  kakao: 'http://kko.to/wYeEQP24j',
  naver: 'http://naver.me/FHYuAgm6',
};
const 약도 = 'http://srwedding.co.kr/location.jpg';
</script>

<section>
  <h2 class="title">오시는 길</h2>
  <p class="where">{위치}</p>

  <div class="map-icons">
    <a href={바로가기.kakao} target="_blank"><img class="map-icon" src={kakaoMapIcon} alt="kakao-map" /></a>
    <a href={바로가기.naver} target="_blank"><img class="map-icon" src={naverMapIcon} alt="naver-map" /></a>
  </div>

  <img class="map-image" src={약도} alt="wedding-hall-map" />
</section>

<style>
section {
  padding: 2rem 1rem;
  text-align: center;
}
.title {
  font-size: 1.75rem;
}
.where {
  font-size: 1.25rem;
}
.map-icons {
  margin: 1rem 0 0;
}
.map-icons img {
  display: inline-block;
}
.map-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 0.25rem;
}
.map-image {
  width: 100%;
  min-width: 320px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
