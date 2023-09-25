<template>
    <div>
        <!-- <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label> -->
          
<p class=" text-3xl font-bold">Hello Tailwind!</p>

    </div>
</template>

<script setup lang="ts">
const menuList=[
    {
        name:"首页",
        icon:"home",
        path:"/"
    },
    {
        name:"文章",
        icon:"article",
        path:"/article"
    },
    {
        name:"娱乐",
        icon:"entertainment",
        path:"/entertainment"
    },
    {
        name:"友链",
        icon:"link",
        path:"/link"
    },
    {
        name:"留言板",
        icon:"copyboard",
        path:"/copyboard"
    },
    {
        name:"关于",
        icon:"about",
        path:"/about"
    },
]
</script>

<style scoped>

</style>