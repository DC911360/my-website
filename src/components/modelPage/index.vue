<template>
    <div>
        <template v-if="imgUrl">
            <div class="model relative" :style="{ backgroundColor: bgColor,height: height+'px' }">
                <img class="min-w-[1200px] w-[100%] h-[100%]" :src="imgUrl" alt="">
                <div class="model_con  model_con_absoult show_container !pt-[74px] !pb-[45px]">
                    <div class="text-center pb-[20px]">
                        <div class="model_con_title text-[30px] text-[#fff] font-700" :style="{ color: textTitleColor }">{{title}}</div>
                        <div v-if="subTitle" class="model_con_title_text pt-[10px] text-[#707070]">{{subTitle}}</div>
                        <div v-if="titleCon2" class="model_con_title_text pt-[10px] text-[#707070]">{{titleCon2}}</div>
                    </div>
                    <div class="model_con_list pt-[40px]">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="model" :style="{ backgroundColor: bgColor }">
                <div class="model_con show_container !pt-[74px] !pb-[45px] " :style="{ backgroundColor: bgColor }">
                    <div class="text-center pb-[20px]">
                        <div class="model_con_title text-[30px] text-[#111111] font-700">{{title}}</div>
                        <div v-if="subTitle" class="model_con_title_text pt-[10px] text-[#707070]">{{subTitle}}</div>
                        <div v-if="titleCon2" class="model_con_title_text pt-[10px] text-[#707070]">{{titleCon2}}</div>
                    </div>
                    <div class="model_con_list pt-[40px]">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </template>
    </div>
    <!-- <div class="model" :style="{ backgroundColor: bgColor,height: height+'px' }">
        <img v-if="imgUrl" class="min-w-[1200px] w-[100%] h-[100%]" :src="imgUrl" alt="">
        <div class="model_con show_container !pt-[74px] !pb-[45px] bg-[#F2F3F8]">
            <div class="text-center pb-[20px]">
                <div class="model_con_title text-[30px] text-[#111] font-700">{{title}}</div>
                <div v-if="subTitle" class="model_con_title_text pt-[10px]">{{subTitle}}</div>
                <div v-if="titleCon2" class="model_con_title_text pt-[10px]">{{titleCon2}}</div>
            </div>
            <div class="model_con_list pt-[39px] flex flex-wrap">
                <slot></slot>
            </div>
        </div>
    </div> -->
</template>
<script setup>
    import { ref, onMounted, watch } from 'vue'
    import { useUserGlobalProperties } from '@/utils/hooks/userGlobalProperties'
    import { useRouter, useRoute } from 'vue-router'


    const props = defineProps({
        imgUrl: {
            type: String,
            default: ''
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
        },

        bgColor: {
            type: String,
            default: '#fff'
        },
        height: {
            type: String,
            default: ''
        },
        textTitleColor: {
            type: String,
            default: '#fff'
        }
    })




    //变量声明
    const router = useRouter()
    const route = useRoute()

    const { imgPrefixes, themeColor } = useUserGlobalProperties()




    //生命周期函数
    onMounted(() => {

    })
</script>

<style scoped>
    .model_con_absoult {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        margin: 0 auto;
    }
</style>