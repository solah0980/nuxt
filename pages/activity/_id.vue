<template>
  <div>
    <Navbar />
    <Banner v-bind:titleTh="title1" :titleEng="title2"></Banner>
    <div class="container mt-3">
      <nav aria-label="breadcrumb" style="padding:0;">
        <ol class="breadcrumb">
          <nuxt-link to="/" class="breadcrumb-item"
            >หน้าแรก</nuxt-link
          >
          <li class="breadcrumb-item active" aria-current="page">
            {{data.title}}
          </li>
        </ol>
      </nav>
    </div>
    <div class="section">
      <div class="container">
        <h5 class="section-h">{{data.title}}</h5>
        <div class="row">
          <div class="col-md-9">
              <div class="data-content" v-html="data.content"></div>
          </div>
          <div class="link-body col-md-3">
            <contract />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "../../plugins/services/AdminServices";
export default {
  data() {
    return {
      baseURL: "/api/assets/uploads/",
      data: '',
      title1: "โรงเรียนบำรุงอิสลาม",
      title2: "BAMRUNG ISLAM SCHOOL Phatthalung",
    };
  },
  async created() {
    let id = this.$route.params.id
    this.data = (await Api.ShowActivity(id)).data;
  },
  methods: {
    navigateTO(name) {
      this.$router.push(name);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
.section-h {
  width: 74%;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}
.data-content >>> figure{
    text-align: center;
}
</style>
