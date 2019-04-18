<template>
  <div id="cinemalist">
    <header class="navbar">
      <h1 class="nav-header">影院</h1>
    </header>
    <section class="topbara" style>
      <div class="gray-bg topbar-bg">
        <div class="city-entry">
          <span class="city-name">上海</span>
          <i class="city-entry-arrow"></i>
          <div class="search-entry search-input">
            <img src>
            <span>搜影院</span>
          </div>
        </div>
      </div>
    </section>
    <div class="nav-wrap filter-nav-wrap" style="top: 95px;">
      <div class="tab mb-line-b">
        <div class="item" @click="show">
          全城
          <span class="drop"></span>
        </div>
        <div class="item">
          品牌
          <span class="drop"></span>
        </div>
        <div class="item">
          特色
          <span class="drop"></span>
        </div>
      </div>
      <div class="close-tab" v-if="qcshow">
        <div class="tab-content">
          <div class="page special" style="display: none;">
            <div id="special-content" style="height: 345px;">
              <div class="item-title">特色功能</div>
              <div class="item-list">
                <div class="item chosen" data-id="-1" data-type="service">全部</div>

                <div class="item" data-id="4" data-type="service">会员卡</div>

                <div class="item" data-id="3" data-type="service">可改签</div>

                <div class="item" data-id="2" data-type="service">可退票</div>
              </div>

              <div class="item-title">特殊厅</div>
              <div class="item-list">
                <div class="item chosen" data-id="-1" data-type="hallType">全部</div>

                <div class="item" data-id="2" data-type="hallType">IMAX厅</div>

                <div class="item" data-id="3" data-type="hallType">CGS中国巨幕厅</div>

                <div class="item" data-id="9" data-type="hallType">杜比全景声厅</div>

                <div class="item" data-id="22" data-type="hallType">Dolby Cinema厅</div>

                <div class="item" data-id="10" data-type="hallType">RealD厅</div>

                <div class="item" data-id="11" data-type="hallType">RealD 6FL厅</div>

                <div class="item" data-id="5" data-type="hallType">LUXE巨幕厅</div>

                <div class="item" data-id="4" data-type="hallType">4DX厅</div>

                <div class="item" data-id="25" data-type="hallType">DTS:X 临境音厅</div>

                <div class="item" data-id="8" data-type="hallType">4K厅</div>

                <div class="item" data-id="7" data-type="hallType">4D厅</div>

                <div class="item" data-id="6" data-type="hallType">巨幕厅</div>
              </div>
            </div>
            <div id="special-btn">
              <span class="btn" id="cancel-btn">重置</span>
              <span class="btn" id="confirm-btn">确定</span>
            </div>
          </div>
          <div class="page brand" style="display: none;">
            <div id="brand-content" style="height: 345px;">
              <div class="item brand-list chosen" data-id="-1" data-type="brand">
                <span class="brand-name">全部</span>
                <span class="brand-count">360</span>
              </div>

              <div class="item brand-list" data-id="2880988" data-type="brand">
                <span class="brand-name">SFC上影影城</span>
                <span class="brand-count">26</span>
              </div>
            </div>
          </div>
        </div>
        <div class="page region" style>
          <div id="region-tab">
            <ul class="tab">
              <li class="item chosen" data-type="region" data-subnav="#district">商区</li>
              <li class="item" data-type="region" data-subnav="#subway">地铁站</li>
            </ul>
          </div>
          <div id="region-list" style="height: 402.5px;">
            <div id="region-sidenav">
              <div id="district">
                <ul>
                  <li
                    v-for="(item,index) in zones"
                    :key="index"
                    class="district-li item chosen"
                  >{{item.name}}({{item.count}})</li>

                  <!-- <div class="district-li item" >浦东新区(72)</div> -->
                </ul>
              </div>
              <div id="subway" style="display: ;">
                <div
                  class="district-li item chosen"
                  v-for="(item,index) in subw"
                  :key="index"
                >{{item.name}}({{item.count}})</div>

                <!-- <div class="district-li item">1号线(57)</div> -->
              </div>
            </div>
            <div id="region-list-item"></div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="cinema-list" data-cid="c_5ovvtlp2" style="margin-bottom: 55px; margin-top: 40px;">
      <div class="list-wrap" style="margin-top: 0px; min-height: 627px;">
        <router-link to= "dianmian" tag="dianmian"class="item mb-line-b" v-for="(item,index) in cinemasli" :key="index">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>{{item.nm}}</span>

              <span class="price-block">
                <span class="price">{{item.sellPrice}}</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">{{item.addr}}</div>

              <div class="distance">{{item.distance}}</div>
            </div>
            <div class="flex"></div>
            <div class="label-block">
              <div class="endorse">改签</div>

              <div class="vipTag">折扣卡</div>
            </div>

            <div class="discount-block">
              <div>
                <div class="discount-label normal card"></div>
                <div class="discount-label-text">开卡特惠，首单2张立减10元</div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="more"></div>
    </div>
    <div class="locatebanner">
      <img class="locatebanner-arrow">
      <span class="locatebanner-content">定位失败，请稍后重试</span>
      <div class="locatebanner-refresh-wrap">
        <img class="locatebanner-refresh" src>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      zones: [],
      subw: [],
      cinemasli: [],
      qcshow: false
    };
  },

  // computed : {

  // },

  methods: {
    show: function() {
      this.qcshow = !this.qcshow;
    },

    getCity() {
      Axios.get("/api/ajax/filterCinemas?ci=20", {
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }).then(res => {
        let zones1 = res.data;
        this.zones = zones1.district.subItems;
        this.subw = zones1.subway.subItems;
      });
    },
    getcinema() {
      Axios.get(
        "/api/ajax/cinemaList?day=2019-04-18&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1555567586303&cityId=20",
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        }
      ).then(res => {
        let cinemasli = res.data;
        this.cinemasli = cinemasli.cinemas;
        console.log(cinemasli);
      });
    }
  },
  created() {
    this.getCity();
    this.getcinema();
  }
};
</script>





<style lang="less">
@import "../../style/mixins.less";

.navbar {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 0px;

  .nav-header {
    display: block;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    overflow: hidden;
  }
}
.topbara {
  border-bottom: 1px solid #e6e6e6;
  height: 44px;
  position: fixed;
  top: 51.5px;
  z-index: 2;

  .gray-bg {
    background: #f5f5f5;
    .city-entry {
      padding-left: 15px;
      font-size: 15px;
      color: #666;
      display: flex;
      align-items: center;
      line-height: 44px;

      .city-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 70px;
      }
      .city-entry-arrow {
        margin-right: 5px;
        width: 0;
        height: 0;
        border: 4px solid #b0b0b0;
        border-right-color: rgb(176, 176, 176);
        border-bottom-color: rgb(176, 176, 176);
        border-left-color: rgb(176, 176, 176);
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        display: inline-block;
        margin-left: 4px;
        margin-top: 5px;
      }
      .topbar .search-input {
        flex-grow: 1;
      }

      .search-input {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 28px;
        font-size: 13px;
        color: #b2b2b2;
        margin-left: 18px;
        border: 0.5px solid #e6e6e6;
        border-radius: 5px;
        margin-right: 15px;
        width: 280px;
        background: #fff;
      }
    }
  }
}
.filter-nav-wrap {
  width: 100%;
  height: 40px;
  z-index: 10;
  background-color: #fff;
}
.nav-wrap {
  position: fixed;
  top: 91px;
  .tab {
    display: flex;
    .item {
      flex: 1;
      text-align: center;
      line-height: 40px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      font-size: 13px;
      text-overflow: ellipsis;
      .drop {
        display: inline-block;
        position: absolute;
        top: 18px;
        width: 0;
        height: 0;
        margin-left: 4px;
        border: 4px solid transparent;
        border-top-color: transparent;
        border-top-color: #b0b0b0;
      }
    }
  }
  .close-tab {
    display: block; //hh
    position: relative;

    width: 100%;

    background: #fff;

    z-index: 100;

    overflow: scroll;
  }
  .tab-content {
    font-size: 15px;
  }
  .page {
    background-color: #fff;
    overflow: auto;
    z-index: 999;
    position: relative !important;

    overflow: scroll;
  }
  .special {
    min-height: 208px;
    overflow: hidden;
    #special-content {
      min-height: 150px;
      max-height: 270px;
      overflow: scroll;
    }
    #special-btn {
      height: 60px;
      width: 100%;
      border-top: 1px solid #e5e5e5;
      margin-top: 10px;
      background: #fafafa;
    }
  }
  .brand {
    min-height: 150px;
    max-height: 352px;
  }
}
#region-tab {
  height: 44px;
  ul {
    padding: 0;
    margin: 0;

    li {
      position: relative;
      display: inline-block;
      padding: 0 10px;
      width: 50%;
      height: 100%;
      line-height: 44px;
      text-align: center;
    }
    .tab {
      display: flex;
    }
  }
}
#region-list {
  background: #f5f5f5;
  height: 380px;
  #region-sidenav {
    width: 35%;
    height: 100%;
    float: left;
    overflow: scroll;
    #district {
      min-height: 100%;
      background: #fff;
      ul {
        .district-li {
          height: 44px;
          padding-left: 10px;
          line-height: 44px;
          font-size: 14px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          .chosen {
            // color: #f03d37;
            background: #f5f5f5;
          }
        }
      }
    }
    #subway {
      min-height: 100%;
      background: #fff;
      .chosen {
        color: #f03d37;
        background: #f5f5f5;
      }
      .district-li {
        height: 44px;
        padding-left: 10px;
        line-height: 44px;
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
#region-list-item {
  width: 65%;
  height: 100%;
  float: right;
  overflow: scroll;
}
.clearfix {
  clear: both;
}
.cinema-list {
  margin-top: 0;
  position: relative;
  top: 91px;
  .list-wrap {
    background-color: #fff;
    .item {
      padding: 13px 15px 13px 0;
      margin: 0 15px;
      background-color: #fff;
      position: relative;
      overflow: hidden;
      border-block-end: rgb(176, 176, 176) solid 1px;
      .title-block {
        display: block;
        align-content: center;
        .title {
          height: 23px;
          line-height: 23px;
          font-size: 16px;
          color: #000;
        }
        .price-block {
          padding-top: 9px;
          padding-left: 3px;
          color: #f03d37;
          .q {
            font-size: 11px;
            color: #f03d37;
          }
        }
        // .mb-line-b {
        //   background: 0 bottom repeat-x;
        //   background-color: rgba(0, 0, 0, 0);
        //   background-size: auto;
        // }
      }
      .location-block {
        margin-top: 6px;
        font-size: 13px;
        color: #666;
        .flex {
          flex: 1;
        }
        .line-ellipsis {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .discount-block {
        color: #999;
        margin-bottom: 4px;
        font-size: 12px;
      }
    }
  }
}
.more {
  line-height: 40px;
  height: 40px;
  text-align: center;
}
.locatebanner {
  position: fixed;
  z-index: 1;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 12px 11px;
  margin-bottom: 11px;
  padding: 8px;
  border-radius: 5px;
  background: hsla(0, 0%, 94%, 0.9);
  color: #666;
  font-size: 13px;
  display: flex;
  align-content: center;
  margin-bottom: env(safe-area-inset-bottom);
}
.distance {
  text-align: right;
}
.label-block{
  font-size: 12px;

.endorse,
.snack,
.vipTag {
  display: inline-flex;
  margin-left: 5px;
  padding: 0 3px;
}
}

</style>