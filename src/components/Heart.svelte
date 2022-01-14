<script lang="ts">
import groom from '@/assets/groom.png';
import bride from '@/assets/bride.png';
import close from '@/assets/close.png';
import { onMount } from 'svelte';
import { copyToClipboard } from '@/utils';

const hearts = {
  groom: [
    { name: '모) 홍영주', account: '기업은행 650-004691-02-010' },
    { name: '조영도', account: '카카오뱅크 3333-01-9530012' },
  ],
  bride: [
    { name: '부) 김헌진', account: '국민은행 806201-04-025493' },
    { name: '모) 이선화', account: '국민은행 806-24-0380-281' },
    { name: '김서혜', account: '국민은행 546902-01-343552' },
  ],
};

type ModalContents = 'none' | '신랑' | '신부';
let focusedModal: ModalContents = 'none';
let modalContainerEl: HTMLElement;

const changeFocusedModal = (next: ModalContents) => () => {
  focusedModal = next;
};
const copyText = (text: string) => () => {
  copyToClipboard(text);
  alert(`${text} 복사되었습니다`);
};

onMount(() => {
  window.addEventListener('click', event => {
    const target = event.target as HTMLElement | null;
    if (!target) return;
    if (target !== modalContainerEl) return;
    focusedModal = 'none';
  });
});
</script>

<section class="container">
  <h2 class="title">신랑 & 신부에게 마음 전하기</h2>

  <div class="flex-center">
    <button class="open-button" on:click={changeFocusedModal('신랑')}>
      <img class="img-icon groom-bg-color" src={groom} alt="groom-icon" />
      <br />
      신랑측 계좌번호 확인
    </button>
    <span class="button-gap" />
    <button class="open-button" on:click={changeFocusedModal('신부')}>
      <img class="img-icon bride-bg-color" src={bride} alt="bride-icon" />
      <br />
      신부측 계좌번호 확인
    </button>
  </div>
</section>

<div class="modal-container" bind:this={modalContainerEl} class:hide={focusedModal === 'none'}>
  <section class="modal-contents" class:hide={focusedModal !== '신랑'}>
    <button class="close-button" on:click={changeFocusedModal('none')}>
      <img class="close-icon" src={close} alt="close-icon" />
    </button>

    <h3 class="modal-title">
      <img class="img-icon groom-bg-color" src={groom} alt="groom-icon" />
      신랑측 계좌번호
    </h3>
    {#each hearts.groom as person, index (index)}
      <div class="modal-item" on:click={copyText(person.account)}>
        <div>{person.name}</div>
        <div class="account">{person.account}</div>
      </div>
    {/each}
    <div class="modal-footer">계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.</div>
  </section>

  <section class="modal-contents" class:hide={focusedModal !== '신부'}>
    <button class="close-button" on:click={changeFocusedModal('none')}>
      <img class="close-icon" src={close} alt="close-icon" />
    </button>

    <h3 class="modal-title">
      <img class="img-icon bride-bg-color" src={bride} alt="bride-icon" />
      신부측 계좌번호
    </h3>
    {#each hearts.bride as person, index (index)}
      <div class="modal-item" on:click={copyText(person.account)}>
        <div>{person.name}</div>
        <div class="account">{person.account}</div>
      </div>
    {/each}
    <div class="modal-footer">계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.</div>
  </section>
</div>

<style>
.container {
  padding: 2rem 1rem;
  text-align: center;
}
.title {
  font-size: 1.75rem;
  margin-bottom: 2rem;
}
.open-button {
  font-size: 1rem;
}
.button-gap {
  padding: 0.5rem;
}
.hide {
  display: none;
}
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.modal-contents {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  min-width: 320px;
  max-width: 600px;
  padding: 1rem;
  background-color: #fff;
}
.modal-title {
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-bottom: 1.2rem;
}
.modal-item {
  padding: 0.5rem;
  border: 1px solid #ececec;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
.modal-footer {
  font-size: 0.75rem;
  text-align: right;
}
.img-icon {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.groom-bg-color {
  background-color: #f29f05;
}
.bride-bg-color {
  background-color: #f2441d;
}
.account {
  color: rgba(0, 0, 0, 0.8);
}
.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.close-icon {
  width: 1rem;
  height: 1rem;
}
</style>
