<template>
  <div class="productionAndService">

    <!-- 图片展示 -->
    <div class="banner_box">
      <Banner imgUrl="https://img.infox-med.com/webImg/hyt-website/pAndS/ps_bg5.png" title="产品与服务"
        subTitle="专业便捷的智慧就医平台" titleCon2="成为每个人的家庭医生"></Banner>
    </div>

    <!-- 一键查询 -->
    <ModelPage bgColor="#F2F3F8" title="一键查询" subTitle="已覆盖239万名医生，1.7万家医院，12万种药品，1.7万种疾病" titleCon2="">
      <div class="flex flex-wrap pb-[50px]">
        <template v-for="(item,index) in keySearchList" :key="index">
          <div class="list_item  w-[370px] h-[460px] rounded-[25px] bg-[#fff] px-[35px] pt-[27px] pb-[34px] box-border">
            <img class="w-[344px] h-[261px]" :src="item.imgURL" alt="">
            <div class="text-[20px] text-[#111] font-700 text-center pt-[18px]">{{item.title}}</div>
            <div class="text-[15px] text-[#5A5A5A] text-center pt-[14px]">{{item.desc}}</div>
          </div>
        </template>
      </div>
    </ModelPage>

    <!-- 社区 | 科普推荐 -->
    <ModelPage bgColor="#fff" title="社区 | 科普推荐" subTitle="患者互动社区，分享经验心得，实时掌握最新医疗资讯，丰富健康知识" titleCon2="">
      <div class="tab_list flex items-center">
        <template v-for="(item,index) in tabList" :key="index">
          <div class="tab_list_item w-[33%] text-center  pb-[20px] text-[20px] text-[#111] font-500 cursor-pointer"
            :class="[tabActive==index?'tab_list_item_active':'']" @click="tabChange(item)">{{item.label}}
          </div>
        </template>
      </div>
      <div class="tab_con">
        <div v-if="tabActive==0" class="tab_con_item py-[100px] px-37px]">
          <div class="flex justify-between">
            <div>
              <img class="w-[90px] h-[90px]" src="https://img.infox-med.com/webImg/hyt-website/pAndS/shequ_p_icon.png"
                alt="">
              <div class="pt-[63px]">
                <div class="text-[30px] text-[#111] font-500">患者社区</div>
                <div class="pt-[24px] w-[350px] text-[20px] text-[#707070] font-500">在社区互动，搜索相关疾病内容，<br />
                  支持点赞、评论、收藏，<br /> 共享治疗经验心得</div>
              </div>
            </div>
            <div>
              <img class="w-[760px] h-[329px]" src="https://img.infox-med.com/webImg/hyt-website/pAndS/shequ_img1.png"
                alt="">
            </div>
          </div>

        </div>
        <div v-if="tabActive==1" class="tab_con_item py-[100px] px-37px]">
          <div class="flex justify-between">
            <div>
              <img class="w-[90px] h-[90px]" src="https://img.infox-med.com/webImg/hyt-website/pAndS/kepu_p_icon.png"
                alt="">
              <div class="pt-[63px]">
                <div class="text-[30px] text-[#111] font-500">科普推荐</div>
                <div class="pt-[24px] w-[350px] text-[20px] text-[#707070] font-500">
                  分享治疗经验、交流防治策略，专家与患者在线互动评论，打破沟通壁垒</div>
              </div>
            </div>
            <div>
              <img class="w-[760px] h-[329px]" src="https://img.infox-med.com/webImg/hyt-website/pAndS/kepu_img1.png"
                alt="">
            </div>
          </div>
        </div>
        <div v-if="tabActive==2" class="tab_con_item py-[100px] px-37px]">
          <div class="flex justify-between">
            <div>
              <img class="w-[90px] h-[90px]" src="https://img.infox-med.com/webImg/hyt-website/pAndS/jkang_p_icon.png"
                alt="">
              <div class="pt-[63px]">
                <div class="text-[30px] text-[#111] font-500">健康资讯</div>
                <div class="pt-[24px] w-[350px] text-[20px] text-[#707070] font-500">紧跟前沿医疗动态，畅享海量健康科普，充实医学知识储备，全方位提升健康素养</div>
              </div>
            </div>
            <div>
              <img class="w-[760px] h-[329px]" src="https://img.infox-med.com/webImg/hyt-website/pAndS/jkang_img1.png"
                alt="">
            </div>
          </div>
        </div>
      </div>
    </ModelPage>



    <!-- AI医生 -->
    <ModelPage bgColor="" textTitleColor="#111111" title="AI医生" subTitle="专业AI医疗数据，检查报告分析解读，语音自动播放，一键拨打电话" titleCon2=""
      height="960" imgUrl="https://img.infox-med.com/webImg/hyt-website/pAndS/AI_bg.png">
      <div class="ai_introduce  relative  h-[616px] ">
        <img class="w-[1200px] h-[100%]" src="https://img.infox-med.com/webImg/hyt-website/pAndS/ai_bg1.png" alt="">
        <div class="ai_introduce_list  flex justify-between ">
          <template v-for="(item,index) in aiFunList" :key="index">
            <!--  -->
            <div
              class="ai_introduce_list_item pt-[110px] flex flex-col items-start justify-center  w-[34%] h-[616px] pl-[72px] box-border text-[#fff]"
              :class="[index==aiFunActive?'ai_introduce_list_item_active':'']" @mouseover="()=>{ handleMouseOver(item,index) }">
              <div class="text-[30px] pb-[44px] font-400">{{item.title}}</div>
              <template v-for="(c,cIndex) in item.child" :key="c">
                <div class="text-[14px] font-500">{{c}}</div>
              </template>
            </div>
          </template>
        </div>
      </div>
    </ModelPage>



    <!-- 绿通挂号服务 -->
    <!-- <ModelPage bgColor="#fff" title="绿通挂号服务" subTitle="实时响应，每日帮扶3位疑难杂症患者，解决挂号难题"
      titleCon2="成功挂上专家号占比达 80%，以专业与高效，为患者就医之路排忧解难 ">
      <div class="add_msg px-[20px] flex flex-wrap justify-between">
        <template v-for="(item,index) in  formList" :key="item.id">
          <div v-if="item.formType!='textarea'"
            class="add_msg_item flex justify-center items-center w-[530px] box-border bg-[#F9F9F9] rounded-[15px] px-[23px] py-[15px] mb-[36px]">
            <div class="add_msg_item_label w-[80px]  text-[25px text-[#414141]">
              <span v-if="item.isRequired" class="text-[red]">*</span>
              {{item.label}}
            </div>
            <div class="add_msg_item_con flex-1">
              <template v-if="item.formType=='input'">
                <el-input v-model="item.value" :placeholder="item.placeholder" />
              </template>
              <template v-if="item.formType=='phone'">
                <el-input oninput="value=value.replace(/[^\d]/g,'')" :maxlength="item.valLength" v-model="item.value"
                  :placeholder="item.placeholder" />
              </template>
              <template v-if="item.formType=='dataTime'">
                <el-date-picker style="width:100%" v-model="item.value" type="date" :placeholder="item.placeholder" />
              </template>
            </div>
          </div>
          <div v-if="item.formType=='textarea'" class="text-[#F9F9F9] w-[100%]">
            <el-input v-model="item.value" style="width:100%" :maxlength="item.valLength"
              :placeholder="item.placeholder" show-word-limit type="textarea" />
          </div>
        </template>

      </div>

      <div class="submit py-[55px] flex justify-center w-[100%]">
        <el-button @click="submitInfoBtn" type="primary">提交</el-button>
      </div>
    </ModelPage> -->


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

  const { imgPrefixes, themeColor } = useUserGlobalProperties()

  const keySearchList = ref([
    {
      id: 0,
      title: '多维度获取信息',
      desc: '深度整合医院、医生、药品、疾病、科普等医疗数据，提供全场景查询检索服务。',
      imgURL: 'https://img.infox-med.com/webImg/hyt-website/pAndS/more_msg.png'
    },
    {
      id: 1,
      title: '整合医疗资源',
      desc: '高度重视核心数据库搭建，以最全、最准、最专业的医疗资源，构建便捷就医服务平台。',
      imgURL: 'https://img.infox-med.com/webImg/hyt-website/pAndS/mery_source.png'
    },
    {
      id: 2,
      title: '便捷就医',
      desc: '借助智能算法精准匹配医疗资源，一键定位医院医生，明晰就医选择，畅享便捷医疗服务',
      imgURL: 'https://img.infox-med.com/webImg/hyt-website/pAndS/see_doctor.png'
    },
  ])
  // const tabActive = ref('patientsCommunity')
  const tabActive = ref(0)
  const tabList = ref([
    {
      id: 0,
      type: 'patientsCommunity',
      label: '患者社区',
      isShow: true,
    },
    {
      id: 1,
      type: 'recommendationScience',
      label: '科普推荐',
      isShow: true,
    },
    {
      id: 2,
      type: 'healthInformation',
      label: '健康资讯',
      isShow: true,
    },
  ])

  const aiFunActive = ref(1)
  const aiFunList = ref([
    {
      id: 0,
      title: '报告解读',
      child: [
        '深度剖析检查检验报告，',
        '提供个性化健康诊断与建议，',
        '智能评估治疗、预防方案'
      ]
    },
    {
      id: 1,
      title: '语音播放',
      child: [
        '输入症状，',
        '瞬间匹配对应疾病，AI 医生实时解答，',
        '语音输入、自动播放超便捷'
      ]
    },
    {
      id: 2,
      title: '一键打电话',
      child: [
        '一键拨打，',
        '快速连线 AI 医生咨询健康疑问，',
        '全面了解自身健康状况，守护健康生活'
      ]
    },

  ])

  const patientFormData = reactive({
    patientName: '',
    patientPhoneNumber: '',
    patientSeeDoctorTime: '',
    hospital: '',
    doctorName: '',
    deeDoctorDepart: '',
    patientDescription: '',
  })

  const formList = ref([
    {
      id: 0,
      type: 'patientName',
      formType: 'input',
      label: '就诊人',
      isRequired: true,
      placeholder: '请输入就诊人姓名',
      value: ''
    },

    {
      id: 1,
      type: 'patientPhoneNumber',
      formType: 'phone',
      label: '联系方式',
      isRequired: true,
      placeholder: '填写就诊人联系方式',
      value: '',
      valLength: 11
    },

    {
      id: 2,
      type: 'patientSeeDoctorTime',
      formType: 'dataTime',
      label: '就诊时间',
      isRequired: true,
      placeholder: '选择就诊时间',
      value: ''
    },
    {
      id: 2,
      type: 'patientSeeDoctorTime',
      formType: '',
      label: '时间段',
      isRequired: true,
      placeholder: '选择就诊时间',
      value: ''
    },
    {
      id: 3,
      type: 'hospital',
      formType: 'input',
      label: '就诊医院',
      isRequired: false,
      placeholder: '填写就诊医院',
      value: ''
    },

    {
      id: 4,
      type: 'doctorName',
      formType: 'input',
      label: '医生姓名',
      isRequired: false,
      placeholder: '填写医生姓名',
      value: ''
    },

    {
      id: 5,
      type: 'deeDoctorDepart',
      formType: 'input',
      label: '就诊科室',
      isRequired: false,
      placeholder: '填写就诊科室',
      value: ''
    },

    {
      id: 6,
      type: 'patientDescription',
      formType: 'textarea',
      label: '',
      isRequired: false,
      placeholder: '请输入病情描述',
      value: '',
      valLength: 200
    },


  ])

  const tabActiveLoopId = ref()

  //函数声明
  const tabChange = (item) => {
    if (!item) return
    tabActive.value = item.id
    tabActiveLoopId.value && clearInterval(tabActiveLoopId.value)

    nextTick(() => {
      let id = setInterval(() => {
        clearTimeout(id)
        tabActiveLoop()
      }, 3000)

    })
  }


  const tabActiveLoop = () => {
    tabActiveLoopId.value = setInterval(() => {
      tabActive.value = tabActive.value + 1
      if (tabActive.value > tabList.value.length - 1) {
        tabActive.value = 0
      }
    }, 4000)
  }

  const getIndex = (type) => {
    if (!type) return
    let index = tabList.value.findIndex(item => item.type === type)
    return index
  }

  const verificationForm = () => {
    /*
     patientName: '' 就诊人姓名
     patientPhoneNumber: '', 联系方式
     patientSeeDoctorTime: '', 就诊时间
     hospital: '', 医院名称
     doctorName: '', 医生名称
     deeDoctorDepart: '', 科室名称
     patientDescription: '', 描述
    */

    for (let item of formList.value) {
      if (item.isRequired && !item.value) {

        ElMessage.error(`请输入/选择${item.label}`)
        return

      }
      if (item.formType === 'phone' && item.isRequired && item.value) {
        let result = validatePhoneNumber(item.value)
        if (!result) {
          ElMessage.error(`请输入正确的手机号`)
          return
        }
      }

    }

    // 调用AIP 提交数据

    let timer = setTimeout(() => {
      clearFormList()
    }, 3000)
  }


  const submitInfoBtn = () => {
    // console.log("获取提交信息", formList)
    verificationForm()
  }

  const clearFormList = () => {
    formList.value.forEach(item => {
      item.value = ''
    })
  }


  const handleMouseOver = (item, index) => {
    // console.log("item=>", item, index)
    if (!item) return
    aiFunActive.value = index
  }

  onMounted(() => {
    tabActiveLoop()
  })



</script>

<style scoped>
  .list_item {
    margin-right: 16px;
  }

  .list_item:hover {
    box-shadow: 0px 4px 20px #CDD6FF;
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }

  .tab_list {
    border-bottom: 1px solid #D8D8D8;
  }

  .tab_list_item {
    border-bottom: 1px solid transparent;
  }

  .tab_list_item_active {
    color: #2855C3;
    border-bottom: 1px solid #2855C3;
  }

  .my_con {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
  }

  .ai_introduce_list {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 1160px;
    height: 100%;
  }


  .ai_introduce_list_item {
    transition: all 0.3s ease-in-out;
    background: rgba(15, 32, 50, 0.9);
  }

  .ai_introduce_list_item_active {
    background: transparent;
  }



  .add_msg_item {
    margin-bottom: 36px;
  }

  .add_msg_item_label {
    border-right: 1px solid #D8D8D8;
    margin-right: 15px;
  }

  ::v-deep(.el-input .el-input__wrapper) {
    background-color: #F9F9F9 !important;
    box-shadow: none !important;
  }

  ::v-deep(.el-input__wrapper:hover) {
    box-shadow: none !important;
  }

  ::v-deep(.el-textarea__inner) {
    background-color: #F9F9F9 !important;
    box-shadow: none !important;
    height: 287px !important;
    padding: 30px !important;
    resize: none !important;
  }

  ::v-deep(.el-textarea .el-input__count) {
    background-color: #F9F9F9 !important;
  }

  .submit ::v-deep(.el-button) {
    width: 230px !important;
    height: 40px !important;
    font-size: 20px !important;
    border-radius: 11px !important;
  }
</style>