import { getCurrentInstance, ref } from 'vue';
import config from '@/utils/config.js'; // 直接解构导入


export const useUserGlobalProperties = () => {
    const instance = getCurrentInstance();
    if (!instance) {
        throw new Error('useUserGlobalProperties must be called within a setup function');
    }
    const imgPrefixes = ref(import.meta.env.VITE_APP_IMGPREFIXES)
    const themeColor = ref(config.themeColor);

    return {
        imgPrefixes,
        themeColor,
    };
}