<template>
    <!-- :style="{ backgroundColor: themeColor }" -->
    <div class="header"  >
        <div class="header_con show_container" :style="{ backgroundColor: '#fff' }">
            <div class="header_con_l header_con_item ">
                <img @click="gotoHome" class="logo w-[80px] h-[80px]" :src="logoSrc" alt="">

                <div class="header_tab">
                    <template v-for="(item, index) in headerTab" :key="index">
                        <div class="header_tab_item" @click="gotoPage(item)"
                            :class="[activeTab==item.path?'header_tab_item_active':'']">
                            {{ item.label }}
                            <div class="tab_item_line" :class="[activeTab==item.path?'tab_item_line_active':'']"></div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="header_con_r header_con_item text-[14px] text-[#FFFFFF]">
                简体 
                <!-- ｜ EN -->
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted, watch } from 'vue'
    import { useUserGlobalProperties } from '@/utils/hooks/userGlobalProperties'
    import { useRouter, useRoute } from 'vue-router'
    import logoSrc from '@/assets/images/logo.png'

    //变量声明
    const router = useRouter()
    const route = useRoute()


    const { imgPrefixes, themeColor } = useUserGlobalProperties()

    const headerTab = ref([
        { label: '首页', name: 'home', path: '/', },
        { label: '产品与服务', name: 'productionAndServiceView', path: '/productionAndService' },
        { label: '关于我们', name: 'aboutUs', path: '/aboutUs' },
        { label: '加入我们', name: 'joinUs', path: '/joinUs' }
    ])

    const activeTab = ref('/')

    //方法声明
    const getRouterPath = () => {
        return route.path
    }
    const handleRouterPath = () => {
        const path = getRouterPath()

        switch (path) {
            case '/':
                activeTab.value = '/'
                break;
            case '/productionAndService':
                activeTab.value = '/productionAndService'
                break;
            case '/aboutUs':
                activeTab.value = '/aboutUs'
                break;
            case '/joinUs':
                activeTab.value = '/joinUs'
                break;
            default:
                activeTab.value = ''
                break;
        }


    }

    const setTabItemActive = (str) => {
        if (!str) {
            activeTab.value = '/home'
        } else {
            activeTab.value = str
        }
    }

    const gotoPage = (item) => {
        if (!item) return
        let { name, path } = item
        router.push({
            name,
            path,
        })
    }
    const gotoHome = () => {
        router.push({
            name:'home',
            path:'/',
        })
    }


    //生命周期函数
    onMounted(() => {
        handleRouterPath()
    })

    watch(() => route.path, (newVal, onlVal) => {
        if (newVal === onlVal) return
        handleRouterPath(newVal)
    })
</script>

<style scoped>
    .header{
       position: sticky;
       top: 0;
       z-index: 1000;
    }
    .header_con {
        color: #fff;
        /* height: 60px; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    }

    .header_con_item {
        display: flex;
        align-items: center;
    }

    .logo {
        display: block;
    }

    .header_tab {
        display: flex;
        align-items: center;
        margin-left: 120px;

    }

    .header_tab_item {
        margin-right: 150px;
        position: relative;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;

    }

    .tab_item_line {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 2px;
        background: #FFFFFF;
        border-radius: 8px 8px 8px 8px;
        opacity: 0;
    }

    .header_tab_item_active {
        font-weight: 600;
    }

    .tab_item_line_active {
        opacity: 1;
    }

    .header_con_r {
        cursor: pointer;
    }

</style>