<template>
  <div>
    <div class="h-[650px]"></div>
    <!-- 图片展示 -->
    <!-- <div class="banner_box">
      <Banner imgUrl="https://img.infox-med.com/webImg/hyt-website/home/home_banner2.png" title="慧医通"
        subTitle="专业便捷的智慧就医平台" titleCon2="成为每个人的家庭医生"></Banner>
    </div> -->



    <!-- 主营产品功能 -->
    <!-- <ModelPage bgColor="#fff" title="主营产品功能" subTitle="智慧医院全场景智能解决方案" titleCon2="引领数字化医院建设新模式，推动医院医教研管改革，加速医院高质量发展">
      <div class="fourFun flex ">
        <template v-for="(item,index) in fourFunList" :key="index">
          <div @mouseover="()=>{ handleMouseOver(item,index) }" @mouseout="handleMouseOut"
            class="fourFun_item flex justify-center items-center w-[170px] h-[315px] rounded-[9px] bg-[#fff]"
            :class="[activeFun==item.type?'fourFun_item_active':'']"
            :style="{ backgroundImage: `url(${activeFun==item.type?item.bg:item.sBg})` }">
            <template v-if="activeFun!=item.type">
              <div class="w-[30px] text-[#fff] text-[30px]">{{item.label}}</div>
            </template>
            <template v-if="activeFun==item.type">
              <div class="fourFun_item_top flex justify-between items-center w-full">
                <div class="fourFun_item_top_l">
                  <div class="text-[30px] text-[#fff]">{{item.label}}</div>
                </div>
                <div class="fourFun_item_top_r">
                  <img class=" w-[33px] h-[33px]" :src="item.icon" alt="">
                </div>
              </div>

              <div class="fourFun_item_bottom ">
                <div class="fourFun_item_bottom_title text-[#fff] text-[14px] text-left" v-html="item.descTitle">
                </div>
                <div class="fourFun_item_bottom_text text-[#fff] text-[14px]">{{item.descCon}}</div>
              </div>
            </template>

          </div>
        </template>
      </div>
    </ModelPage> -->


    <!-- 产品优势 -->
    <!-- <ModelPage bgColor="" title="产品优势" subTitle="" titleCon2="" height="1180"
      imgUrl="https://img.infox-med.com/webImg/hyt-website/home/productAdvantages.png">
      <div class="adv_list rounded-[52px] flex justify-between flex-wrap overflow-hidden">
        <template v-for="(item,index) in advList" :key="index">
          <div class="adv_list_item pl-[70px] pr-[30px] pt-[115px] pb-[60px] bg-[#fff] ">
            <div class="adv_list_item_title text-[26px]" :style="{ color: themeColor }">{{item.title}}</div>
            <div class="adv_list_item_con flex justify-between ">
              <div class="adv_list_item_con_l">
                <template v-for="(li,liIndex) in item.chidList" :key="liIndex">
                  <div class="l_item flex items-center flex-wrap">
                    <div class="l_item_pl w-[10px] h-[10px] rounded-[2px] rotate-45"
                      :style="{ backgroundColor: themeColor }"></div>
                    <div class="text-[#384146] text-[15px] font-500">{{li}}</div>
                  </div>
                </template>
              </div>
              <div class="adv_list_item_con_r">
                <img class="w-[200px] h-[200px]" :src="item.advIcon" alt="">
              </div>
            </div>
          </div>
        </template>
      </div>
    </ModelPage> -->

  </div>


</template>
<script setup>
  import { ref, onMounted, watch } from 'vue'
  import { useUserGlobalProperties } from '@/utils/hooks/userGlobalProperties'
  import { useRouter, useRoute } from 'vue-router'

  import Banner from '@/components/Banner/index.vue'
  import ModelPage from '@/components/ModelPage/index.vue'



  import http from '@/utils/http'
  import { doctorList } from '@/utils/api/testAPI'


  //变量声明
  const router = useRouter()
  const route = useRoute()

  const { imgPrefixes, themeColor } = useUserGlobalProperties()

  const activeFun = ref('findDoctor')
  const fourFunList = ref([
    {
      id: 0,
      label: '找医生',
      type: 'findDoctor',
      sBg: 'https://img.infox-med.com/webImg/hyt-website/home/find_doctor_s.png',
      bg: 'https://img.infox-med.com/webImg/hyt-website/home/find_doctor_b.png',
      icon: 'https://img.infox-med.com/webImg/hyt-website/home/doctor_icon.png',
      descTitle: '<span>239</span>万名在线医生',
      descCon: '便捷搜索，精准定位，多维度筛选，匹配需求'
    },
    {
      id: 1,
      label: '找医院',
      type: 'findHospital',
      sBg: 'https://img.infox-med.com/webImg/hyt-website/home/find_hispitail_s.png',
      bg: 'https://img.infox-med.com/webImg/hyt-website/home/find_hispitail_b.png',
      icon: 'https://img.infox-med.com/webImg/hyt-website/home/hispital_icon.png',
      descTitle: '<span>1.7</span>万家医院',
      descCon: '便捷寻医，精准找专家，快速觅医，解决健康忧'

    },
    {
      id: 2,
      label: '查药品',
      type: 'findMedical',
      sBg: 'https://img.infox-med.com/webImg/hyt-website/home/find_meical_s1.png',
      bg: 'https://img.infox-med.com/webImg/hyt-website/home/find_meical_b1.png',
      icon: 'https://img.infox-med.com/webImg/hyt-website/home/meical_icon.png',
      descTitle: '<span>12</span>万种药品',
      descCon: '便捷搜索，精准定位，多维度筛选，匹配需求'

    },
    {
      id: 3,
      label: '医小宝',
      type: 'agentXb',
      sBg: 'https://img.infox-med.com/webImg/hyt-website/home/agent_xb_s.png',
      bg: 'https://img.infox-med.com/webImg/hyt-website/home/agent_xb_b.png',
      icon: 'https://img.infox-med.com/webImg/hyt-website/home/agent_icon.png',
      descTitle: '专业AI医生',
      descCon: '专业AI医疗数据，检查报告分析解读，语音自动播放，一键拨打电话'
    },

  ])
  const advList = ref([
    {
      id: 0,
      title: '一键查询',
      advIcon: 'https://img.infox-med.com/webImg/hyt-website/home/search.png',
      chidList: ['覆盖239万名医生', '覆盖1.7万家医院', '覆盖12万种药品', '覆盖1.7万种疾病']
    },
    {
      id: 1,
      title: 'AI医生',
      advIcon: 'https://img.infox-med.com/webImg/hyt-website/home/Ai.png',
      chidList: ['专业AI医疗数据', '检查报告分析解读', '语音自动播放', '一键拨打电话']
    },
    {
      id: 2,
      title: '社区 | 科普推荐',
      advIcon: 'https://img.infox-med.com/webImg/hyt-website/home/shequ.png',
      chidList: ['患者互动社区', '分享经验心得', '实时掌握最新医疗资讯', '丰富健康知识']
    },
    {
      id: 4,
      title: '绿通挂号服务',
      advIcon: 'https://img.infox-med.com/webImg/hyt-website/home/greenStree.png',
      chidList: ['实时响应，每日帮扶3位疑难杂症患者', '攻克挂号难关解决挂号难题', '挂上专家号占比达 80%', '专业高效']
    },
  ])

  //方法声明
  const handleMouseOver = (item, index) => {
    // console.log("item=>", item, index)
    if (!item) return
    activeFun.value = item.type
  }
  // const getData = async () => {
  //   const res = await doctorList('/doctor/search',{
  //     pageNum: 1,
  //     filter: "@@AND$$area$$北京市-全部",
  //     province: "北京市",
  //     city: "全部",
  //     field: "全部",
  //     pageSize: 10
  //   })
  //   console.log("res=>", res)
  // }


  //生命周期函数
  onMounted(() => {
    // console.log('mounted')
    // getData()
  })
</script>

<style scoped>
  .title_box {
    padding-top: 59px;
    padding-bottom: 70px;
  }





  .fourFun {
    margin-bottom: 93px;
  }

  .fourFun_item {
    margin-right: 18px;
    background-size: 100% 100%;
    transition: all 0.3s ease-in-out;
  }

  .fourFun_item_active {
    width: 600px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 47px 50px;
  }

  .fourFun_item_top {
    border-bottom: 1px solid #D8D8D8;
    padding-bottom: 30px;
  }

  .fourFun_item_bottom {
    margin-top: 45px;
  }

  ::v-deep(.fourFun_item_bottom_title span) {
    font-weight: 700;
    font-size: 20px;
    color: #1342B5;
    padding-right: 5px;
  }

  .fourFun_item_bottom_text {
    margin-top: 15px;
  }



  .p_adv_con_con {
    margin-top: 60px;
    border-bottom: 1px solid #BCBCBC;
  }

  .adv_list_item {
    width: 50%;
    /* border: 1px solid #D8D8D8; */
    box-sizing: border-box;
  }


  .adv_list> :nth-child(1) {
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
  }

  .adv_list> :nth-child(2) {
    border-bottom: 1px solid #D8D8D8;
  }

  .adv_list> :nth-child(3) {
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .adv_list_item:hover {
    background: linear-gradient(326deg, #FFFFFF 0%, #CDD6FF 100%);
  }

  .adv_list_item_con {
    margin-top: 22px;
  }


  .l_item {
    margin-bottom: 20px;
  }

  .l_item_pl {
    margin-right: 10px;
  }
</style>