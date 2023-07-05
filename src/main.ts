import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import supabase from 'vue-supabase'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(supabase, {
//  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
//  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
  supabaseUrl: import.meta.env.VUE_APP_SUPABASE_URL,
  supabaseKey: import.meta.env.VUE_APP_SUPABASE_KEY,

  options: {}
})

app.mount('#app')
