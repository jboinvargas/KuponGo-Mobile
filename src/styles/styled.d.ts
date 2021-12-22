import 'styled-components'
import { ImageSourcePropType } from 'react-native'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    logo: ImageSourcePropType

    colors: {
      primary: string
      secundary: string

      background: string
      li: string
      liColor: string
      text: string
      inputColor: string
      inputPlaceholder: string
      kuponButton: string
      kuponText: string
    }
  }
}
