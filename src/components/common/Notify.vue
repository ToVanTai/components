<template>
  <!-- start employespage__popupnotify -->
  <div
    :class="{
      notify: true,
      show: isShow,
      pending: isPending,
      'popup-warningred': isWaringRed,
      'popup-question': isQuestion,
    }"
    @click.self="overlayClick"
  >
    <div class="notify__container">
      <div class="notify__container__close" @click="overlayClick"><i class="fas fa-times"></i></div>
      <div class="notify__body">
        <div class="notify__body__heading">Thông báo</div>
        <div class="notify__body__messenger">
          <li v-for="message in messages" :key="message">
            {{ message }}
          </li>
        </div>
      </div>
      <div class="notify__footer">
        <button
          class="btn btn-primary"
          ref="btnCloseElm"
          @click="btnCloseClick"
        >
          Đóng
        </button>
        <button
          class="btn btn-danger notify__btnok"
          ref="btnOkElm"
          @click="btnOKClick"
        >
          Đồng ý
        </button>
      </div>
    </div>
  </div>
  <!-- end employespage__popupnotify -->
</template>

<script>
export default {
  name: "MyNotify",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    isPending: {
      type: Boolean,
      default: false,
    },
    messages: null,
    isWaringRed: {
      type: Boolean,
      default: false,
    },
    isQuestion: {
      type: Boolean,
      default: false,
    },
    overlayClick: {
      type: [Function, null],
      default: function () {},
    },
    btnCloseClick: {
      type: [Function, null],
      default: function () {},
    },
    btnOKClick: {
      type: [Function, null],
      default: function () {},
    },
  },
  mounted() {
    //nếu là câu hỏi thì forcus vào oke
    if (this.isQuestion) {
      this.$refs.btnOkElm.focus();
    } else if (this.isWaringRed) {
      this.$refs.btnCloseElm.focus();
    } else {
      this.$refs.btnCloseElm.focus();
    }
  },
  updated() {
    //nếu là câu hỏi thì forcus vào oke
    if (this.isQuestion) {
      this.$refs.btnOkElm.focus();
    } else if (this.isWaringRed) {
      this.$refs.btnCloseElm.focus();
    } else {
      this.$refs.btnCloseElm.focus();
    }
  },
};
</script>

<style scoped>
.notify {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgb(0, 0, 0, 40%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--padding-28) 0px;
  cursor: pointer;
  transform: translateY(-100%);
}
.notify.show {
  transition: transform var(--time-transition) ease;
  transform: translateY(0);
}
.notify.pending::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: url("../../assets/loading.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50px 50px;
  animation: pendingRotate 2s linear 0s infinite reverse;
  cursor: default;
}
.notify.pending::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
  cursor: default;
}
@keyframes pendingRotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.notify__container {
  position: relative;
  width: var(--popupnotify-width);
  background-color: var(--color-bg-white);
  border-radius: var(--border-radius);
  padding: var(--padding-24);
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.notify__container__close{
  position: absolute;
  top: 24px;
  right: 24px;
  color: var(--color-text-grey);
  cursor: pointer;
  width: 24px;
  height: 24px;
  display:  flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.notify__body {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: var(--padding-24);
}
.notify__body__heading {
  font-size: 20px;
  font-family: notosans bold;
}
.notify__body__messenger {
  flex-grow: 1;
  color: var(--color-text-grey);
  font-size: 14px;
  line-height: 18px;
}
.notify__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}
.notify__btnok {
  display: none;
}
.popup-question .notify__btnok {
  display: block;
}
</style>