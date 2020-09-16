import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home'
            }
          },
          Today: {
            screens: {
              TodayScreen: 'today'
            }
          },
          Task: {
            screens: {
              TaskScreen: 'task'
            }
          }
        }
      },
      NotFound: '*'
    }
  }
}
