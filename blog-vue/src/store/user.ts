import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
    "user",
    () => {
        1
    //   const user = ref<LoginUser>();
    //   const token = ref("");
    //   const blogStore = useBlogStore()
  
    //   const login = async (data: userForm) => {
    //     const res = await reqLoign(data);
    //     if (res.data) {
    //       user.value = res.data;
    //       token.value = res.data.token;
  
    //       blogStore.setChatByUser({
    //         avatar: res.data.userinfo.avatar,
    //         content: "",
    //         createTime: "",
    //         id: 0,
    //         ip: "",
    //         nickname: res.data.userinfo.nickname,
    //         userId: res.data.userinfo.id
    //       })
    //       return true;
    //     }
    //     return false;
    //   };
  
    //   const logout = async () => {
    //     user.value = undefined;
    //     blogStore.setChatByUser(null)
    //     notification("success", "退出登录成功");
    //   };
  
    //   return {login, user, logout, token};
    // },
    // {
    //   // 开启持久化（使用本地存储，默认是localStorage）
    //   persist: true,
    }
  );