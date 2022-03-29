import { TOTAL_SCREENS } from './commonUtils'
import { Subject } from 'rxjs'

export default class ScrollService {
  static scrollHandler = new ScrollService()
  static currentScreenBroadcaster = new Subject()
  static currentScreenFadeIn = new Subject()

  constructor() {
    // 스크롤링 이벤트 추가
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewport)
  }
  // ContactMe로 스크롤 이동
  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById('ContactMe')
    if (!contactMeScreen) return
    contactMeScreen.scrollIntoView({ behavior: 'smooth' })
  }
  // Home으로 스크롤 이동
  scrollToHome = () => {
    let homeScreen = document.getElementById('Home')
    if (!homeScreen) return
    homeScreen.scrollIntoView({ behavior: 'smooth' })
  }
  isElementInView = (elem, type) => {
    // 요소 크기 viewport에 대한 요소의 위치 정보 가져오기
    let rec = elem.getBoundingClientRect()
    let elementTop = rec.top
    let elementBottom = rec.bottom
    let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0
    let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight

    switch (type) {
      case 'partial':
        return partiallyVisible
      case 'complete':
        return completelyVisible
      default:
        return false
    }
  }

  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return
    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name)
      if (!screenFromDOM) continue

      let fullyVisible = this.isElementInView(screenFromDOM, 'complete')
      let partiallyVisible = this.isElementInView(screenFromDOM, 'partial')

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          })
          screen['alreadyRendered'] = true
          break
        }
        if (fullyVisible) {
          ScrollService.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          })
          break
        }
      }
    }
  }
}
