import { ScrollTrigger } from 'gsap/ScrollTrigger'

const {
	set: gsapSet,
	registerPlugin,
	to: gsapTo,
	fromTo: gsapFromTo,
	utils: gsapUtils,
	from: gsapFrom,
	timeline: gsapTimeline,
} = useGSAP()

registerPlugin(ScrollTrigger)

export { gsapSet, gsapTo, gsapFromTo, gsapUtils, gsapFrom, gsapTimeline }
