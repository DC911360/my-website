<template>
  <div class="joinUs">
    <!-- 图片展示 -->
    <div class="banner_box">
      <Banner :imgUrl="`${imgPrefixes}/aboutUs/join_bg1.png`" title="加入我们" subTitle="在同频共振中并肩奋斗" titleCon2="一起创造非凡成就">
      </Banner>
    </div>

    <!-- 招聘职位 -->
    <ModelPage bgColor="#fff" title="招聘职位" subTitle="" titleCon2="">
      <div class="job">
        <div class="job_head flex  py-[14px] text-[20px] text-[#fff] font-500" :style="{ backgroundColor: themeColor }">
          <template v-for="(item, index) in jobTabHead" :key="item.id">
            <div class="job_head_item w-[240px] flex justify-center">
              <div>{{item.label}}</div>
            </div>
          </template>
        </div>
        <div class="job_body">
          <template v-for="(item, index) in inviteJobList" :key="item.id">
            <div class="job_body_item flex py-[19px] items-center bg-[#F1F1F1] text-[16px] text-[#111]">
              <!-- pl-[66px] -->
              <div class="job_title w-[240px] px-[10px] flex justify-center box-border">{{item.jobTitle}}</div>
              <div class="job_location w-[240px] flex justify-center">{{item.jobLocation}}</div>
              <div class="job_needNumber w-[240px] flex justify-center">{{item.jobNeedNumber}}</div>
              <div class="job_educationBg w-[240px] flex justify-center">{{item.educationBg}}</div>
              <div class="job_action w-[240px] flex justify-center">
                <el-button @click="communicateNow(item)" type="primary">立即沟通</el-button>
              </div>
            </div>
          </template>
        </div>
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

  const jobTabHead = ref([
    {
      id: 0,
      label: '职位名称'
    },
    {
      id: 1,
      label: '工作地点'
    },
    {
      id: 2,
      label: '招聘人数'
    },
    {
      id: 3,
      label: '学历'
    },
    {
      id: 4,
      label: '操作'
    },
  ])
  const inviteJobList = ref([
    {
      id: 0,
      jobTitle: '数据采集',
      jobNeedNumber: 1,
      jobLocation: '北京',
      educationBg: '本科',
      bossUrl: 'https://www.zhipin.com/gongsi/job/356b062da66363821HN42dy1EVc~.html?ka=all-jobs-hot'
    },
    {
      id: 1,
      jobTitle: '运营副总监',
      jobNeedNumber: 1,
      jobLocation: '北京',
      educationBg: '本科',
      bossUrl: 'https://www.zhipin.com/job_detail/3437dd106a959c8e1Hx82dm0EVNS.html?ka=hot-job-3'
    },
    {
      id: 2,
      jobTitle: '数据负责人(偏采集方向)',
      jobNeedNumber: 1,
      jobLocation: '北京',
      educationBg: '本科',
      bossUrl: 'https://www.zhipin.com/job_detail/86d06dd8bad650f403B62dm0FVpU.html?ka=hot-job-2'
    },
    {
      id: 3,
      jobTitle: '新媒体运营',
      jobNeedNumber: 1,
      jobLocation: '北京',
      educationBg: '本科',
      bossUrl: 'https://www.zhipin.com/gongsi/job/356b062da66363821HN42dy1EVc~.html?ka=all-jobs-hot'
    },
    {
      id: 4,
      jobTitle: '商务总监',
      jobNeedNumber: 4,
      jobLocation: '北京',
      educationBg: '本科',
      bossUrl: 'https://www.zhipin.com/job_detail/cac62f9b29fdb4541Hx82Ny_FFVT.html?ka=hot-job-1'
    },
  ])


  //函数声明
  const communicateNow = (item) => {
    // console.log("item=>",item.bossUrl)
    window.open(item.bossUrl, '_blank')
  }
</script>
<style scoped>
  .job_body {
    margin-top: 23px;
  }

  .job_body_item {
    margin-bottom: 28px;
  }

  .job_body_item {
    transition: all 0.3s;
  }

  .job_body_item:hover {
    /* transform: scale(1.1); */
    box-shadow: 0px 4px 20px #F1F1F1;
  }
</style>