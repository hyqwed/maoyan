<template>
<div class="film-list-content">
    <div class="nowPlayingList-wrap">
      <ul>
        <li class="item"
        v-for="film in movies"
        :key="film.id"
        >
          <router-link :to="{ name:'dateail',params:{id: film.id}}">
            <div class="img">
              <img
                :src="film.img.replace('w.h', '128.180')"
                alt
              >
            </div>
            <div class="info">
              <div class="film-name info-col">
                <span class="name">{{film.nm}}</span>
                <span class="item">{{film.version}}</span>
              </div>
              <div class="film-grade info-col" style="visibility: visible;">
                <span class="label">观众评分</span>
                <span class="grade">{{film.sc}}</span>
              </div>
              <div class="film-actors info-col">
                <span class="label">主演:{{film.star}}</span>
              </div>
              <div class="film-detail info-col">
                <span class="label">{{film.showInfo}}</span>
              </div>
            </div>
            <div class="buy">购票</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
 import Axios from 'axios';
export default {
  data(){
    return{
      movies:[]
    }
  },
  methods: {
      getmovielist(){
        Axios.get('/api/ajax/movieOnInfoList?token=',{
          headers:{
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then(res =>{
          let data = res.data;
          
          this.movies = data.movieList;
          console.log(this.movies);
          console.log(this.movies[0].id);
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
.film-list-content {
  background-color: #fff;
  ul {
    margin-left: 15px;

    li {
      .border-1-bottom;
      padding: 15px 15px 15px 0;
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
</style>