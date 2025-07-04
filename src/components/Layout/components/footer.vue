<template>
    <div class="footer" :style="{ backgroundColor: themeColor }">
        <div class="footer_con show_container "  :style="{ backgroundColor: themeColor }">
            <div class="footer_bottom footer_item">
                <div class="footer_bottom_r">
                    <div class="footer_bottom_r_sapn">京ICP备2024098118号-1</div>
                    <div class="footer_bottom_r_sapn"> 
                        <img class="footer_bottom_r_sapn_img w-[26px] h-[26px]" :src="`${imgPrefixes}/public/hyt_beian.png`" alt=""> 京公网安备 11010802025220号</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted, watch } from 'vue'
    import { useUserGlobalProperties } from '@/utils/hooks/userGlobalProperties'

    //变量声明
    const { imgPrefixes, themeColor } = useUserGlobalProperties()
</script>

<style scoped>
    .footer {
        color: #fff;
    }

    

    

   
    .footer_bottom{
        padding: 20px;
        display: flex;
        justify-content: center;
    }
    .footer_bottom_r,
    .footer_bottom_r_sapn {
        display: flex;
        align-items: center;
    }

    .footer_bottom_r_sapn {
        margin-left: 34px;
    }

    .footer_bottom_r_sapn_img {
        margin-right: 10px;
    }
</style>