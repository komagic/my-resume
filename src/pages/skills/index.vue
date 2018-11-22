<template>
  <div class="page skills">
    <h1 class="title">{{ $store.state.data.route[id] }}</h1>
    <div class="pagebody" >
      <div class="cardContainer" >
        <div class="card"
             v-for="skill in $store.state.data.website.skills"
             :style="skill.style ? skill.style : ''"
             :data-desc="skill.value"
             :key="skill.id">
          <img :src="skill.logo">
        </div>
        <canvas id="canvas" style="height:100vh;width:100vw;position:absolute;z-index:1000;"></canvas>
        <!-- <div class="out" style="height:100vh;width:100vw;position:absolute;z-index:1000;">
           <div class="card out-card"
             v-for="skill in $store.state.data.website.skills"
             :style="skill.style ? skill.style : ''"
             :data-desc="skill.value"
             :key="skill.id">
          <img :src="skill.logo">
        </div> -->
        </div>
      </div>
    </div>
   
    
  </div>
</template>

<script>
export default {
  /* eslint-disable*/
  name: 'skills',
  props: ['id'],
  methods: {
    
  },
  mounted () {
    let self = this;
    let arr = [];
    let skills =self.$store.state.data.website.skills;

    skills.forEach(skill => {
       let p = new Promise((resolve,reject)=>{
              let image = new Image();
              image.src = skill.logo;
              image.onload = function(){
                resolve(this);
              }
        })
       arr.push(p); 
    });
Promise.all(arr).then(results=>{console.log(results);

})
    
  },
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
