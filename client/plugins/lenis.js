import { createApp } from 'vue'
import Lenis from "@studio-freight/lenis";

export default function (app) {
    const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    app.provide('lenis', lenis)
}