

import { defineClientAppEnhance } from '@vuepress/client'
import 'element3/lib/theme-chalk/index.css'
import element3 from 'element3'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(element3)
})