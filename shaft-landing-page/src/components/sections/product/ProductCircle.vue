<template>
  <div class="
    bg-circle
    col-md-6
    mb-3
    d-flex
    justify-content-center
    items-center"
  >
    <div class="main-product">
      <div class="circle"/>
      <img
        src="@/assets/ActiveHelmet.png"
        class="img-fluid active-product animated slideInDown slower mr-3"
        alt=""
      >
    </div>
    <div class="products-around">
      <div class="active-producto"/>
      <div class="non-active-container d-flex h-100 flex-column justify-content-around">
        <div class="non-active-top h-25 justify-content-around d-flex flex-column">
          <div class="non-active-products animated FadeInUp"/>
          <div class="non-active-products animated FadeInUp"/>
        </div>
        <div class="non-active-bottom h-25 justify-content-around d-flex flex-column">
          <div class="non-active-products animated FadeInDown"/>
          <div class="non-active-products animated FadeInDown"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCircle',
};
</script>

<style lang='scss' scoped>
.non-active-container{
  position:absolute;
  top:-3%;
  left: -4%;
  .non-active-products::before{
      content: "";
        background-color: rgb(205, 205, 205);
        width:16px;
        height:16px;
        position:absolute;
        border-radius:50%;
        left:105%;
        top:25%;
    }
  .non-active-products{
    background:url('http://localhost:8081/img/ActiveHelmet.a29584c2.png');
    background-size: cover;
    width: 40px;
    height: 40px;
  }
  .non-active-top{
      position: relative;
      :nth-of-type(1){
        position: relative;
        right: -190%;
      }
      :nth-of-type(2){
        position: relative;
        left: 30%;
      }
  }
  .non-active-bottom{
      position: relative;
      right: 10%;
      :nth-of-type(2){
        position: relative;
        left: 100%;
      }
      :nth-of-type(1){
        position: relative;
        left: -10%;
      }
  }
}
.bg-circle{
    border:1px solid #B5B5B5;
    border-radius: 50%;
    height: 650px;
    align-items: center;
    .main-product{
          align-content:center;
      .circle{
        position: absolute;
        top:6%;
        left:10%;
        box-shadow: 3px 3px 9px #0000002b;
        width: 550px;
        height: 550px;
        background-color:white;
        border-radius: 50%;
        overflow:visible;
      }
      img{
        width:100%;
      }
    }
    .products-around{
      .active-producto{
          background:url('http://localhost:8081/img/ActiveHelmet.a29584c2.png');
          background-size: cover;
          position:absolute;
          top:40%;
          filter:drop-shadow(14px 5px 7px rgba(222, 255, 0, 0.3));
          right:101%;
          width: 100px;
          height: 100px;
      }
      .active-producto::before{
        content: "";
        background-color: black;
        width:20px;
        height:20px;
        position:absolute;
        border-radius:50%;
        left:100%;
        top:30%;
      }
    }
}
</style>
