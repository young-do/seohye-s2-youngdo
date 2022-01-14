<script lang="ts">
import { copyToClipboard } from '@/utils';
import { onMount } from 'svelte';

let Kakao: any;

const onClickKakaoLink = () => {
  if (Kakao.isInitialized()) {
    Kakao.Link.sendCustom({
      templateId: 68832,
    });
  }
};
const onClickCopyLink = () => {
  const url = location.origin + location.pathname;
  copyToClipboard(url);
  alert('주소가 복사되었습니다.');
};

onMount(() => {
  const script = document.createElement('script');
  script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
  script.onload = () => {
    // @ts-ignore
    Kakao = window.Kakao;
    Kakao.init('2fb60d44828a3856bdd1078e70c3436c');
  };
  document.body.appendChild(script);
});
</script>

<footer>
  <div class="button-wrapper">
    <button on:click={onClickKakaoLink}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="m9.462 9.306-.692 1.951h1.383z" />
        <path
          d="m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z"
        />
      </svg>
      카카오톡으로 공유하기
    </button>
    <button on:click={onClickCopyLink}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
          clip-rule="evenodd"
        />
      </svg>
      주소 복사하기
    </button>
  </div>
  <div class="copyright">Copyright 2022. racoon.cho. All rights reserved</div>
</footer>

<style>
footer {
  padding: 3rem 0 1rem;
  background-color: #efe8e3;
  text-align: center;
}
.button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  font-size: 1.125rem;
  letter-spacing: -0.4px;
}
svg {
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.5rem;
}
.copyright {
  margin: 2rem 0;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.4);
}
</style>
