import { createI18n } from 'vue-i18n'

import enUS from '../locales/en-US.json'
import jaJP from '../locales/ja-JP.json'
import ptBR from '../locales/pt-BR.json'

type MessageSchema = typeof enUS

export default createI18n<[MessageSchema], 'en-US' | 'ja-JP' | 'pt-BR'>({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'ja-JP': jaJP,
    'pt-BR': ptBR,
  }
})