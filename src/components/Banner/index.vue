<template>
    <!-- 图片展示 -->
    <div class="banner_box">
        <!-- max-w-[1920] max-h-[550px]-->
        <img class="w-[100%] min-w-[1200px]  min-h-[550px]" :src="imgUrl" alt="">
        <div class="banner_box_con show_container  flex items-center ">
            <div class="text_box text-[#fff]">
                <div class="text_box_title text-[40px]">{{title}}</div>
                <div class="text_box_con  pt-[20px] text-[20px] text">{{subTitle}} </div>
                <div class="text_box_con text-[20px] text">{{titleCon2}}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted, watch } from 'vue'
    import { useUserGlobalProperties } from '@/utils/hooks/userGlobalProperties'
    import { useRouter, useRoute } from 'vue-router'


    const props = defineProps({
        imgUrl:{
            type: String,
            default: 'https://img.infox-med.com/webImg/hyt-website/home/home_banner.png'
        },
        title: {
            type: String,
            default: '慧医通'
        },
        subTitle: {
            type: String,
            default: ''
        },
        titleCon2: {
            type: String,
            default: ''
        }
    })

   


    //变量声明
    const router = useRouter()
    const route = useRoute()

    const { imgPrefixes, themeColor } = useUserGlobalProperties()
    const msg = ref('banner')

   
    

    //生命周期函数
    onMounted(() => {
        
    })
</script>

<style scoped>
    .banner_box {
        position: relative;
    }

    .text_box_title,
    .text_box_con{
        transition: all 0.5s;
    }
    .banner_box_con:hover .text_box_title,
    .banner_box_con:hover .text_box_con{
        transform: scale(1.1);
    }

    .banner_box_con {
        margin: 0 auto;
        width: 1200px;
        position: absolute;
        top: 150px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

</style>