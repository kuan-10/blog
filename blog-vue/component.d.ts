export {}
// declare module 'vue' {
//     export interface GlobalComponents {
//       // Foote:typeof import('./src/components/Footer/index.vue')['default']
//       // Fish: typeof import('./src/components/Fish/index.vue')['default']
     
//     }
//   }
declare module 'vue' {
  export interface GlobalComponents {
    Footer: typeof import('./src/components/Footer/index.vue')['default']
    Header: typeof import('./src/components/Header/index.vue')['default']
    Fish:   typeof import('./src/components/Fish/index.vue')['default']
  }
}
