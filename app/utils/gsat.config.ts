import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { set: gsapSet, registerPlugin, to: gsapTo, fromTo: gsapFromTo, utils: gsapUtils, from: gsapFrom } = useGSAP()

registerPlugin(ScrollTrigger)

export { gsapSet, gsapTo, gsapFromTo, gsapUtils, gsapFrom }
