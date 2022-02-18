<script lang="ts">
// ref: https://dribbble.com/shots/12234916--Like-Button-for-Figma-Cool
let animated = false;
let liked = false;
let timerId = -1;

export let count = 1;
export let onClick = () => null;

const countUp = async () => {
  window.clearTimeout(timerId);
  animated = true;
  if (!liked) liked = true;

  onClick();

  timerId = window.setTimeout(() => (animated = false), 800);
};
</script>

<button class="like" on:click={countUp} class:liked>
  <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.9649 3.12832C8.29171 -2.5454 0.857422 0.545461 0.857422 6.72603C0.857422 11.3672 11.0494 18.6272 11.9649 19.5712C12.8866 18.6272 22.5717 11.3672 22.5717 6.72603C22.5717 0.592318 15.6449 -2.5454 11.9649 3.12832Z"
      fill="#3E4373"
    />
  </svg>
  <i class:count-motion={animated}>{count}</i>
  <span class:bubble-motion={animated} />
</button>

<style lang="scss">
.like {
  position: relative;
  cursor: pointer;
  width: 46px;
  height: 46px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  margin: 2rem 3rem;

  &::after {
    z-index: -2;
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: #f6f6f8;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  svg {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    path {
      transition: all 0.2s ease;
    }
  }

  &:hover,
  &.liked {
    &::after {
      border-radius: 10px;
      background: #feeef3;
      transform: scale(0.88);
    }
    svg {
      path {
        fill: #f65c8a;
      }
    }
  }

  &:active {
    svg {
      transform: scale(0.6);
    }
  }
}

i {
  position: absolute;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 10px;
  color: white;
  background: #f65c8a;
  border-radius: 24px;
  line-height: 12px;
  z-index: -9;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-family: -apple-system, sans-serif;
  font-style: normal;
}

.count-motion {
  transform: translatey(-160%);
  opacity: 1;
}

span {
  opacity: 1;
  z-index: -99;
  position: absolute;
  width: 90%;
  height: 90%;
  border-radius: 100%;
  background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #feeff3 100%);
}

.bubble-motion {
  animation: bubbleMotion 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;

  @keyframes bubbleMotion {
    to {
      transform: scale(2.6);
      opacity: 0;
    }
  }
}
</style>
