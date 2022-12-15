<template>
  <div class="header">
        <div class="header__left">
          <div class="header__left__icon--toggle">
            <i class="fas fa-bars"></i>
          </div>
          <div class="header__left__company">
            <p class="header__left__company--name">
              công ty tnhh sản xuất - thương mại - dịch vụ qui phúc
            </p>
            <div class="header__left__company--arrowdown">
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div class="header__right">
          <div class="header__right__notify">
            <div class="header__right__notify--icon">
              <i class="far fa-bell"></i>
            </div>
          </div>
          <div class="header__right__user">
            <div class="header__right__user--avatar">
              <img
                src="../../../assets/img/default-avatar.jpg"
                alt="ảnh đại diện mặc định"
              />
            </div>
            <div class="header__right__user--name">Nguyễn Văn Mạnh</div>
            <div class="header__right__user--iconmore">
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style >
.header {
  height: var(--header-height);
  box-shadow: var(--color-shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-bg-white);
}

.header__left {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 100%;
}
.header__left__icon--toggle {
  height: 100%;
  width: 48px;
  font-size: var(--size-text-sm);
  color: var(--color-text-black);
  background-color: var(--color-bg-white);
  transition: all var(--time-transition) ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--margin-8);
}
.header__left__icon--toggle:hover {
  background-color: var(--color-bg-grey-third);
  color: var(--color-text-white);
}
.header__left__company {
  height: 100%;
  display: flex;
  align-items: center;
}
.header__left__company--name {
  text-transform: uppercase;
  font-size: var(--size-text-sm);
  color: var(--color-text-black);
  font-family: notosans semibold;
  margin-right: var(--margin-8);
  cursor: default;
}
.header__left__company--arrowdown {
  font-size: var(--size-text-sm);
  color: var(--color-text-black);
  cursor: pointer;
  padding: var(--padding-8) 0px;
}

.header__right {
  height: 100%;
  display: flex;
  padding-right: var(--padding-20);
  gap: var(--padding-14);
}
.header__right__notify {
  height: 100%;
}
.header__right__notify--icon {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.header__right__notify--icon i {
  font-size: var(--size-text-lg);
  color: var(--color-bg-grey-third);
}
.header__right__user {
  display: block;
  display: flex;
  height: 100%;
  align-items: center;
  gap: var(--padding-8);
}
.header__right__user--avatar {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
}
.header__right__user--avatar img {
  width: 100%;
  object-fit: cover;
}
.header__right__user--name {
  cursor: pointer;
  font-family: notosans bold;
  font-size: var(--size-text-sm);
  color: var(--color-text-grey-second);
}
.header__right__user--iconmore {
  padding: 0px var(--padding-4);
  color: var(--color-text-grey-secondy);
  font-size: var(--size-text-sm);
  cursor: pointer;
}
</style>