<template>
    <!--https://www.tsoft.com.tr/assets/images/home-page/new-customer/new-customer-header.jpg-->
    <section class="pt-sticky-menu-height bg-gray-100">
        <div>
            <img src="https://www.tsoft.com.tr/assets/images/home-page/new-customer/new-customer-header.jpg" alt="">
        </div>
        <div class="container mx-auto pb-10">
            <div class="flex -mt-8 ">
                <div @click="selectedBox = 1" class="basis-1/2 max-w-[50%] px-4 flex justify-end cursor-pointer">
                    <div :class="selectedBox === 1 ? 'active' : ''"
                        class="tooltip customer1 relative bg-gray-200 min-h-[60px] inline-flex justify-center items-center p-3">
                        <span class="text-sm pointer-events-none">E-Ticarete Başlarken T-Soft Altyapısını Tercih
                            Edin</span>
                    </div>
                </div>
                <div @click="selectedBox = 2" class="basis-1/2 max-w-[50%] px-4 flex cursor-pointer">
                    <div :class="selectedBox === 2 ? 'active' : ''"
                        class="tooltip customer2 relative bg-gray-200 min-h-[60px] inline-flex justify-center items-center p-3">
                        <span class="text-sm pointer-events-none">E-Ticaret Altyapınızı Geliştirin, İşlerinizi
                            Büyütmeye
                            Başlayın</span>
                    </div>
                </div>
            </div>
            <MessageBox :messageObject="selectedBox === 1 ? messageObject1 : messageObject2"/>

        </div>
    </section>
</template>
<script>
import MessageBox from './MessageBox.vue';
export default {
    components: {
        MessageBox,
    },
    data() {
        return {
            selectedBox: 1,
            messageObject1: {
                display: 1,
                description: `Lorem ipsum dolor sit amet. T-Soft E-Ticaret Çözümleri ile altyapınızı geliştirin, yeni müşteriler
                            kazanın. Kaliteli bir
                            altyapıyla hizmet vermeye başlayarak rekabet ortamında başarıyı yakalayın. Online
                            mağazanızda
                            7/24 ürün satışı yaparak kazancınızı artırmaya başlayın. T-Soft yazılımlarıyla altyapınızın
                            kalitesini artırdığınız takdirde iyi hizmet ve Ar-Ge’nin gücünü arkanıza alacaksınız.

                            Alanında uzman ve deneyimli 230 kişilik ekibimizle sizlere hizmet vermeye devam ederken
                            oluşturduğumuz ekosistem sayesinde tüm iş ortaklarımızı ve onların çalışanlarını bir araya
                            getiriyoruz. Uygulama marketimiz, tema marketimiz ve web servislerimizle altyapı
                            çözümlerinizi
                            geliştirecek esnekliği sağlıyoruz. İhtiyaç duyduğunuz tüm e-ticaret eklentileri için bize
                            ulaşabilir, T-Soft kalitesini yaşamaya başlayabilirsiniz.`,
                imgSrc: "https://www.tsoft.com.tr/assets/images/home-page/new-customer/howto-tab-img2.jpg?v=1",
            },
            messageObject2: {
                display: 2,
                description: `T-Soft E-Ticaret Çözümleri ile tüm belirsizlikleri ve endişeleri ortadan kaldırın. Hızlı ve kesintisiz bir altyapıyla e-ticarete başlayarak girişiminizin başarısını ilk aşamadan kanıtlayın. Problemli bir girişim yerine yeni müşteriler kazanmayı ve işinizi büyütmeyi tercih edin. T-Soft yazılımıyla cironuzu katlarken her geçen gün markanızı dünyaya açmaya biraz daha yaklaşacaksınız.
                Kaliteli altyapı, profesyonel destek ekibi ve son teknoloji çözümlerimizle birlikte sunduğumuz hizmetler sayesinde rekabet ortamında avantajlı olacaksınız. Rakiplerinizle aranızdaki farkı kısa sürede aşmanızı sağlayan yazılımımızla E-Ticaret içerisinde kısa sürede işlerinizi büyütmenizi mümkün kılıyoruz. T-Soft’un ayrıcalıklarına erişmek ve gelişmiş eklentilerini kullanmaya başlamak için bizimle iletişime geçebilirsiniz.`,
                imgSrc: "https://www.tsoft.com.tr/assets/images/home-page/new-customer/howto-tab-img1.jpg?v=1"
            }
        }
    }
}
</script>
<style></style>