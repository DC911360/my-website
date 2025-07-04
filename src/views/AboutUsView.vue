<template>
  <div class="aboutUs">
    <!-- 图片展示 -->
    <div class="banner_box">
      <Banner :imgUrl="`${imgPrefixes}/aboutUs/aboutus_bg1.png`" title="关于我们" subTitle="看病更方便 就医更便捷"></Banner>
    </div>

    <!-- 公司介绍 -->
    <div class="model bg-[#F2F3F8]">
      <div class="model_con show_container !pt-[74px] !pb-[75px] bg-[#F2F3F8]">
        <div class="text-center pb-[20px]">
          <div class="model_con_title text-[30px] text-[#111] font-700">公司简介</div>
        </div>
        <div class="model_con_list flex flex-wrap">
          <div class=" text-[20px] text-[#384146] pb-[30px]"> 北京慧寻健康科技有限公司，是一家在健康科技领域崭露头角的企业，公司成立于2024年9月，公司产品【慧医通】，
            核心业务依托国内丰富全面的疾病数据库、诊断数据库、医生医院数据库以及专业的 AI 医疗大数据技术，专注于健康疾病领域知识查询服务，为用户提供专业的疾病知识解答以及便捷的医疗信息服务和就医辅助工具，精准专业匹配用户所需的医生医院信息，帮助用户快速找到合适的医疗资源。</div>
        </div>
        <div class=" text-[20px] text-[#384146] pb-[30px]"> 开展 AI 诊疗服务，利用人工智能技术辅助进行疾病诊断和分析，实现智能问诊、疾病解读、医疗信息推荐等功能；
          为用户提供个性化的健康建议和医疗服务，推动智慧医疗的普及和应用。</div>
      </div>
    </div>



    <!-- 使命与愿景 -->
    <ModelPage bgColor="" title="使命与愿景" subTitle="" titleCon2="" height="660"
      imgUrl="https://img.infox-med.com/webImg/hyt-website/aboutUs/shiming_bg1.png">

      <div class="shiming  flex  justify-between">
        <template v-for="(item,index) in shimingList" :key="item.id">
          <div class="shiming_item w-[500px] flex flex-col  items-center pt-[23px]"
            :class="[index == shimingList.length-1?'noBoder':'']">
            <img class="shiming_item_img w-[142px] h-[142]px" :src="item.icon" alt="">
            <div class="my_line w-[46px] h-[5px] rounded-[10px] bg-[#fff]"></div>
            <div class="shiming_item_title text-[28px] text-[#fff] font-700">{{item.title}}</div>
            <div class="shiming_item_text text-[14px] text-[#fff] font-400">{{item.text}}</div>
          </div>
        </template>
      </div>
    </ModelPage>

    <div class="h-[148px] bg-[#fff]"></div>


    <!-- 发展历程 -->
    <ModelPage bgColor="#F3F3F3" title="发展历程" subTitle="" titleCon2="">
      <div class="development relative pb-[80px] flex justify-end">
        <div class="development_left absolute left-[0px] top-[0px]  pt-[56px] w-[628px] h-[444px]">
          <img class="w-[100%] h-[100%]" :src="`${imgPrefixes}/aboutUs/fz1.png`" alt="">
        </div>
        <div class="development_right bg-[#EEF9FF] w-[634px] h-[500px] pl-[144px] pt-[33px]">
          <template v-for="(item,index) in developmentList " :key="item.id">
            <div class="development_item flex items-baseline pb-[30px] relative h-[60px]">
              <div class="development_item_left w-[32px] flex justify-center">
                <div class="point flex justify-center items-center"
                  :style="{ width:item.pointSize+'px', height:item.pointSize+'px',border:`1px solid ${item.pointColor}`}">
                  <div class="inner"
                    :style="{ width:item.innerSize+'px', height:item.innerSize+'px',backgroundColor:item.pointColor}">
                  </div>
                </div>
              </div>
              <div class="development_item_right pl-[71px] flex" :style="{color:item.textColor,fontSize:item.textSize+'px'}">
                <div class="w-[140px]">{{item.time}}</div> <div class="pl-[40px]">{{item.things}}</div>
              </div>
              <div class="d_line absolute   w-[1px] bg-[#E4E4E4]"
                :style="{ left:'15px',top:item.lineTop+'px',height:item.lineHeight+'%' }"
                :class="index==developmentList.length-1?'lasetChild':''"></div>
            </div>
          </template>
        </div>
      </div>
    </ModelPage>


    <!-- 商业伙伴 -->
    <ModelPage bgColor="#fff" title="商业伙伴" subTitle="" titleCon2="">
      <div class="business flex flex-wrap justify-center  pl-[90px]">
        <template v-for="(item,index) in businessList" :key="item.id">
          <div class="business_item w-[430px] h-[94px]">
            <img class="w-[100%] h-[100%]" :src="item.icon" alt="">
          </div>
        </template>
      </div>
    </ModelPage>


  </div>
</template>
<script setup>
  import { ref, reactive, onMounted, watch, nextTick } from 'vue'
  import { useUserGlobalProperties } from '@/utils/hooks/userGlobalProperties'
  import { useRouter, useRoute } from 'vue-router'
  import http from '@/utils/http'
  import { doctorList } from '@/utils/api/testAPI'
  import Banner from '@/components/Banner/index.vue'
  import ModelPage from '@/components/ModelPage/index.vue'
  import { ElMessage } from 'element-plus'
  import { validatePhoneNumber } from '@/utils/util.js'

  // 变量声明
  const { imgPrefixes, themeColor } = useUserGlobalProperties()
  const shimingList = ref([
    {
      id: 0,
      title: '使命',
      icon: 'https://img.infox-med.com/webImg/hyt-website/aboutUs/sm_icon.png',
      text: '成为每个人的家庭医生'
    },
    {
      id: 1,
      title: '愿景',
      icon: 'https://img.infox-med.com/webImg/hyt-website/aboutUs/yj_icon.png',
      text: '看病更方便 就医更便捷'
    },
    {
      id: 2,
      title: '经营理念',
      icon: 'https://img.infox-med.com/webImg/hyt-website/aboutUs/ln_con.png',
      text: '值得托付 以用户健康为中心'
    },
  ])

  const businessList = ref([
    {
      id: 0,
      title: '恒瑞',
      icon: 'https://img.infox-med.com/webImg/hyt-website/aboutUs/partner01.png'
    },
    {
      id: 1,
      title: '正大天晴',
      icon: 'https://img.infox-med.com/webImg/hyt-website/aboutUs/partner02.png'
    },
  ])

  const developmentList = ref([
    {
      id: 0,
      pointColor: themeColor,
      pointSize: 28,
      innerSize: 20,
      lineLeft: 15.5,
      lineTop: 30,
      lineHeight: 59,
      textColor: themeColor,
      textSize:22,
      time: '2025年03月',
      things: '智能体接入'
    },
    {
      id: 1,
      pointColor: '#A1A1A1',
      pointSize: 20,
      innerSize: 12,
      lineLeft: 15.5,
      lineTop: 29,
      lineHeight: 62,
      textColor: '#777878',
      textSize:20,
      time: '2025年02月',
      things: '大模型接入'

    },

    {
      id: 2,
      pointColor: '#B9B9B9',
      pointSize: 14,
      innerSize: 8,
      lineLeft: 15.5,
      lineTop: 25,
      lineHeight: 65,
      textColor: '#A2A2A2',
      textSize:18,
      time: '2025年01月',
      things: 'AI医生上线'
    },

    {
      id: 3,
      pointColor: '#CBCBCB',
      pointSize: 12,
      innerSize: 8,
      lineLeft: 15.5,
      lineTop: 23,
      lineHeight: 65,
      textColor: '#B9B9B9',
      textSize:16,
      time: '2024年10月',
      things: '慧医通V2.0'
    },
    {
      id: 4,
      pointColor: '#CECECE',
      pointSize: 12,
      innerSize: 8,
      lineLeft: 15.5,
      lineTop: 20,
      lineHeight: 67,
      textColor: '#BBBBBB',
      textSize:14,
      time: '2024年09月',
      things: '数据标准化'
    },
    {
      id: 5,
      pointColor: '#DEDEDE',
      pointSize: 12,
      innerSize: 8,
      lineLeft: 15.5,
      lineTop: 20,
      lineHeight: 67,
      textColor: '#CBCBCB',
      textSize:12,
      time: '2024年06月',
      things: '慧医通V1.0'
    },
    {
      id: 6,
      pointColor: '#E2E2E2',
      pointSize: 12,
      innerSize: 8,
      lineLeft: 15.5,
      lineTop: 16,
      lineHeight: 73,
      textColor: '#C1C1C1',
      textSize:10,
      time: '2024年03月',
      things: '战略蓝图化'
    },
  ])




</script>

<style scoped>
  .my_con {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
  }

  .my_line {
    margin-top: 48px;
  }

  .shiming_item {
    border-right: 1px solid #D8D8D8;

  }

  .shiming_item_img,
  .my_line,
  .shiming_item_title,
  .shiming_item_text {
    transition: all 0.5s;
  }

  .shiming_item:hover .shiming_item_img,
  .shiming_item:hover .my_line,
  .shiming_item:hover .shiming_item_title,
  .shiming_item:hover .shiming_item_text {
    transform: scale(1.1);
  }

  .shiming_item_title {
    margin-top: 37px;
  }

  .shiming_item_text {
    margin-top: 5px;
  }

  .noBoder {
    border: none;
  }

  .business_item {
    margin: 0 102px 40px 0;
    transition: all 0.5s;
    border-radius: 20px;
  }

  .business_item:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 20px #CDD6FF;
  }

  .point {
    box-sizing: border-box;
  }

  .point,
  .inner {
    border-radius: 100%;
  }

  .lasetChild {
    height: 40% !important;
    top: 16px !important;
  }
</style>