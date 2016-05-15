import Vue from 'vue'
import './common/config'
import './common/plugin'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
import Home from './components/Home.vue'
import Lessons from './components/Lessons/LessonsLayout.vue'
import lesson1 from './components/Lessons/LessonsList.vue'
import lesson2 from './components/Lessons/LessonsList2.vue'
Vue.use(VueRouter)
const router = new VueRouter()
router.map({
  '/': {
    component: Home,
    name: 'home'
  },
  '/hello': {
    component: Hello,
    name: 'hello'
  },
  '/lessons': {
    component: Lessons,
    name: 'lesssons',
    subRoutes: {
      '/': {
        // This component will be rendered into Foo's <router-view>
        // when /foo is matched. Using an inline component definition
        // here for convenience.
        component: {
          template: '<p>Default Lessons</p>'
        }
      },
      '/list1': {
        // Bar will be rendered inside Foo's <router-view>
        // when /foo/bar is matched
        component: lesson1
      },
      '/list2': {
        // same for Baz, but only when /foo/baz is matched
        component: lesson2
      }
    }
  }
})
router.redirect({
  '*': '/'
})
router.start(App, '#admin')
