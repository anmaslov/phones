<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404.png" alt="404">
        <img class="pic-404__child left" src="@/assets/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="@/assets/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="@/assets/404_cloud.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">УУУПС!</div>
        <div class="bullshit__info">Страница не найдена
          <a class="link-type" href="https://wallstreetcn.com" target="_blank">Ссылка на китайщину</a>
        </div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">краткое описание</div>
        <a href="" class="bullshit__return-home">Вернуться домой</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  computed: {
    message() {
      return 'Запрошеная вами страница не найдена'
    }
  }
}
</script>