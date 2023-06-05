<template>
    <div class="p-5 bg-white items-center justify-center rounded-3xl shadow-sm relative group">
        <div
            class="flex flex-col justify-center w-full h-full items-center gap-1 group-hover:opacity-50 transition-all duration-100">
            <img class="max-w-full" src="https://www.tsoft.com.tr/assets/images/home-page/packets/packet-1.svg" alt="">
            <p class="font-bold mt-3">{{ card.title }}</p>
            <p class="text-center text-[13px]">E-ticaret sitenizi açalım, destek ve eğitim
                ekibimiz hep yanınızda.</p>
        </div>
        <div
            class="opacity-0 transition-all group-hover:opacity-80 duration-300 absolute top-0 left-0 h-full w-full bg-main-orange text-sm items-center text-center text-white rounded-3xl">
            <div class="p-5 flex flex-col gap-5 text-[13px]">
                <h4 class="font-bold">Başlarken</h4>
                <p>En hızlı, en kapsamlı, en güvenli e-ticaret altyapısını tercih edin,
                    T-Soft'un
                    Uzman Ekibi, Güçlü Altyapısı ve Kapsamlı Destek Hizmeti ile E-Ticarete En
                    Doğru
                    Yerde Başlayın.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
 props : {
    card: Object,
 }
}
</script>
<style></style>