<template>
  <div class="city-list">
    <div class="lv-indexlist">
      <ul class="lv-indexlist__content" id="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">定位城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text dingwei">定位失败,请点击重试</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail"
                v-for="city in hotCitys"
                :key="city.cityId">
                <div class="city-item-text">{{ city.name }}</div> 
              </li>   
            </ul>
            </div>
        </div>

        <li class="lv-indexsection"
          v-for="item in myCitys"
          :key="item.py"
          :id="item.py">
          <p class="lv-indexsection__index">{{ item.py }}</p>
          <ul>
            <li
              v-for="city in item.list"
              :key="city.cityId">
              {{ city.name }}

            </li>
          </ul>
        </li>

      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li v-for="item in pys"
            :key="item"
            @click="fn1(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      citys: [], // 从后台接口中直接得到的数据
                               

    }
  },

  computed: {
    myCitys() {
      var index = 0;
      var flag = {};
      var result = [];
      this.citys.forEach(item => {
        var py = item.pinyin.substr(0, 1).toUpperCase();

        if (flag[py]) {
          result[flag[py] - 1].list.push(item);
        } else {
          var obj = {
            py: py,
            list: [ item ]
          };
          flag[py] = ++index;
          result.push(obj);
        }
      })
      result.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      })
      return result;
    },

    hotCitys() {
      return this.citys.filter(item => {
        return item.isHot
      })
    },

    pys() {
      return this.myCitys.map(item => {
        return item.py;
      })
    }
  },

  methods: {
    /**
     * 获取城市列表数据
     */
    getCityList() {
      Axios.get('https://m.maizuo.com/gateway?k=4551001', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15546520171868310774513"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(res => {
        let data = res.data;
        // console.log(data.data.cities)
        if (data.status === 0) {
          this.citys = data.data.cities;
          
        } else {
          alert(data.msg);
        }
      })
    },
    /**
     * 点击跳转
     */
    fn1(py) {
      // 1. 得到左侧相应的距离顶部的距离
      var el = document.getElementById(py);
      var box = document.getElementById('lv-indexlist__content');
      box.scrollTop = el.offsetTop;
    }
  },

  created() {
    this.getCityList();
  }
}
</script>

<style lang="less">
@import '../style/mixins.less';

.city-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 12px;

  .lv-indexlist {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    background: #ebebeb;
    overflow: hidden;
    position: relative;
    &__content {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      width:5px;
    }
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 100%;

      li {
        height: 18px;
        font-size: 12px;
        color: black;
        padding: 0 6px;
      }
    }

    .lv-indexsection {
      &__index {
        background-color: #ebebeb;
        color: black;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
      }

      ul {
        display: block;
        flex-wrap: wrap;
        padding: 0 15px;
        margin-bottom: -1px;
        background:rgb(245, 245, 245);
        li {
          .border-1-bottom;
          position: relative;
          font-size: 14px;
          width: 100%;
          height: 44px;
          line-height: 44px;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          border-bottom: 1px solid #c8c7cc;
          
        }
      }
    }

    .recommend-city {
      // padding-left: 15px;
      background: #ebebeb;

      .city-index-title {
        font-size: 14px;
        color: #333;
        height:30px;
        line-height:30px;
        background: #ebebeb;
        padding-left: 15px;
      }

      .city-index-detail {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        background: rgb(245, 245, 245);

        .city-item-detail {
          width: 33%;
          text-align: center;
          // padding-bottom: 15px;
          box-sizing: border-box;
          float: left;
        
        .dingwei {
           width:181.667px;
           margin: 13px 7.5px!important;
           background-color: #ffffff!important;
           border:0!important;
        }

          .city-item-text {
            height: 33px;
            line-height: 33px;
            background-color: #ffffff;
            border-radius: 3px;
            margin: 8px 5px;
            font-size: 14px;
            color: #191a1b;
            // margin-top:15px;
            border:solid 1px #e6e6e6;
            padding:0 12px;
           
          
          
          }
        }
      }
    }
  }
}
</style>
