<template>
<div>
 
 <div class="film-list-content">
    <div class="nowPlayingList-wrap">
      <ul>
        <li class="item" v-for="mode in most"
        :key="mode.id">
            <router-link :to="{ name:'dateail',params:{id: mode.id}}">
              <p class="time">{{mode.comingTitle}}</p>
            <div class="img">
              <img
              :src="mode.img.replace('w.h', '128.180')"
                alt
              >
            </div>
            <div class="info">
              <div class="film-name info-col">
               
                <span class="name">{{mode.nm}}</span>
                <span class="item">{{mode.version}}</span>
              </div>
              <div class="film-grade info-col" style="visibility: visible;">
                <span class="label">想观看人数</span>
                <span class="grade">{{mode.wish}}</span>
              </div>
              <div class="film-actors info-col">
                <span class="label">{{mode.star}}</span>
              </div>
              <div class="film-detail info-col">
                <span class="label">{{mode.showInfo}}</span>
              </div>
            </div>
            <div class="buy">预购</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>>
<script>
 import Axios from 'axios';
export default {
  data(){
    return{
      most:[]
    }
  },
  methods: {
      getmovielist(){
        Axios.get('/api/ajax/comingList?ci=30&token=&limit=10',{
          headers:{
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then(res =>{
          let data = res.data;
          
          this.most = data.coming;
          
        }).catch(error =>{
          alert('n-hot出错了')
        })
      }
    },

   created(){
      this.getmovielist();
    }

}
</script>
<style lang="less">
@import '../style/mixins.less';
body{
  background: #fff
}
.film-list-content {
  background-color: #fff;
  position:relative;
  ul {
    margin-left: 15px;

    li {
      .border-1-bottom;
      padding: 10px 15px 15px 0;
      height: 94px;
      position: relative;
      box-sizing: content-box;

      > a {
        display: flex;
        align-items: center;
      }

      .img {
        flex-shrink: 0;
        width: 66px;
        height: 94px;
        background: rgb(249, 249, 249);
        img {
          width: 100%;
          border-radius: 2px;
        }
      }

      .info {
        flex: 1;
        padding: 0 10px;
        overflow: hidden;

        .info-col {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }

        .film-name {
          .name {
            max-width: calc(100% - 25px);
            color: #333;
            font-size: 16px;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          .item {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
            margin-bottom:20px;

           
          }
           
        }

        .film-grade {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
          .grade {
            font-weight: 700;
            color: #faaf00;
            font-size: 15px;
          }
        }

        .film-actors {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }

        .film-detail {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }
      }

      .buy {
        .border-1;
        flex-shrink: 0;
        line-height: 25px;
        height: 25px;
        width: 50px;
        background-color: #f03d37;
        color: #fff;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: relative;
      }
    }
  }
}
.time{
     // padding: 12px 15px 0;
        font-size: 14px;
        color: #333;
        position: absolute;
        top:-8px;
        left:0px;
 }
</style>