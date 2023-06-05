<template>
    <div class="statistic-card ">
        <img class="w-11 h-11" :src="card.imgSrc" alt="">
        <div class="statistic-card-value">
            <span :ref="'counter' + refIndex" :data-target="card.number" data-speed="2000" class="counter">{{ card.number
            }}</span>
            <span
                class="relative after:absolute after:content-['+'] after:text-white after:right-0 after:top-0 after:block after:translate-x-full after:-translate-y-1/2 text-3xl">{{
                    card.currency }}</span>
        </div>
        <span class="text-white text-center">{{ card.description }}</span>
    </div>
</template>
<script>
export default {
    props: ["card", "refIndex"],
    mounted() {
        window.addEventListener('scroll', this.startCounters);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.startCounters);
    },
    methods: {
        startCounters() {
            const counterElements = Object.values(this.$refs);
            counterElements.forEach((element) => {
                let positionFromTop = element.getBoundingClientRect().top;
                let windowHeight = window.innerHeight;
                if (positionFromTop - windowHeight <= 0) {
                    let target = parseInt(element.getAttribute('data-target'));
                    let speed = parseInt(element.getAttribute('data-speed'));
                    this.animateCounter(element, target, speed);
                    window.removeEventListener('scroll', this.startCounters);
                }
            });
        },
        animateCounter(element, targetNumber, speed) {
            let duration = speed;
            let startTime = null;
            let startNumber = 0;

            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                let progress = timestamp - startTime;

                let currentNumber = Math.ceil((progress / duration) * targetNumber);
                element.textContent = currentNumber.toLocaleString();

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                } else {
                    element.textContent = targetNumber.toLocaleString();
                }
            }

            window.requestAnimationFrame(step);
        }
    }
}
</script>
<style></style>