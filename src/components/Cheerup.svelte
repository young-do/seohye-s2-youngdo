<script lang="ts">
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { onMount } from 'svelte';
import { format } from 'date-fns';
import Button_Heart from './Button_Heart.svelte';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCeu0TvlQGfURIxXlNXyY9J6TSPxnPzDdg',
  authDomain: 'wedding-invitation-ba74a.firebaseapp.com',
  databaseURL: 'https://wedding-invitation-ba74a-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'wedding-invitation-ba74a',
  storageBucket: 'wedding-invitation-ba74a.appspot.com',
  messagingSenderId: '1065762548517',
  appId: '1:1065762548517:web:ab453605149b09851448cc',
  measurementId: 'G-3N3YK3DLZG',
};

const app = initializeApp(firebaseConfig);

// note: 위치 옮길 필요는 있지만, 일단 여기에
getAnalytics(app);

const db = getDatabase(app);
const messagesRef = ref(db, 'messages');

type MessageRawObject = { [datetime: string]: { name: string; text: string } };
type Message = { id: string; name: string; text: string; datetime: string };
let heartCount = 220327;
let messages: Message[] = [];

// 내림차순 정렬
const sortString = (a: string, b: string) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

onMount(() => {
  get(messagesRef).then(snapshot => {
    const value: MessageRawObject = snapshot.val() ?? {};
    messages = Object.entries(value)
      .map(([id, value]) => {
        const datetime = format(+id, 'yyyy-MM-dd HH:mm:ss');
        return { id, datetime, ...value };
      })
      .sort((a, b) => sortString(a.datetime, b.datetime));
  });
});
</script>

<section>
  <h2>축하 메시지</h2>

  <div>
    조영도
    <Button_Heart count={heartCount} />
    김서혜
  </div>

  <div class="message-container">
    <ul class="message-list">
      {#each messages as message (message.id)}
        <li class="message-item">
          <span class="message-item-name">{message.name}</span>
          <span class="message-item-date">{message.datetime}</span>
          <br />
          <p class="message-item-text">{message.text}</p>
        </li>
      {/each}
      {#if messages.length === 0}
        <li class="message-item-empty">
          🙏 <br />
          첫 축하글의 <br />
          주인공이 되어보세요 :)
        </li>
      {/if}
    </ul>
    {#if messages.length > 0}
      <div class="notice">😅 축하글 수정/삭제는 <br />신랑에게 문의해주세요 :)</div>
    {/if}
  </div>
</section>

<style>
section {
  padding: 2rem 1rem;
  text-align: center;
}
h2 {
  font-size: 1.75rem;
}
.message-container {
  min-width: 200px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1.5rem;
  font-size: 0.875rem;
}
.message-list {
  min-height: 300px;
  margin: 1rem 0;
}
.message-item-empty {
  color: gray;
  padding: 6rem 0;
}
.message-item {
  padding: 1rem 0;
  border-bottom: 1px solid #b6b2a2;
  text-align: left;
}
.message-item-name {
  font-size: 1rem;
  margin-right: 1rem;
}
.message-item-date {
  font-size: 0.75rem;
  color: #8c8c8c;
}
.message-item-text {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.25rem;
}
.notice {
  color: gray;
  padding: 2rem 0;
}
</style>
