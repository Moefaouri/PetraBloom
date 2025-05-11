import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className="container full-width-invert my-6">
      <div className="row text-center ">
        <h2 className="section-title">قصتنا</h2>
      </div>
      <div className="row justify-content-center  responsive-md">
        <div className="col-12  col-md-6 col-lg-5 mb-xs-5">
          <div className="night-container d-flex flex-column gap-4">
            <div className="story-text text-align-right">
              بلَش المشروع وأنا بالمدرسة، جمعت أول 130 دينار واشتريت خلية نحل.
              كنت انقرص كثير من النحل، بس كنت مبسوط من الموسمين اللي طلع فيهم
              النحل عسل. بعدها، راحت النحلات. بـ2024، بعد ما خلصت صيدلة، ولأني
              بحب المنتجات الطبيعية كعلاج، قررت أرجع أشتغل بالفكرة بشكل جديد.
              هالمرة، قررت أبدأ بشكل رسمي، بمناحل كاملة موجودة على جبال السلط،
              وسجلت المشروع رسمي باسم "مؤسسة رحيق الجبل للعسل والمنتجات
              الغذائية".  بموسم 2025، بنقدم الهوية التجارية الجديدة كلياً،
              Beedouin. الاسم بجمع بين كلمة "Bee" للنحل و"Bedouin" اللي بترمز
              لجزء من مكونات الأردن العريقة، والروح البدوية. قيَم Beedouin بتمثل
              أصالة الأردن: من طبيعتنا، ربيعنا، وبيئتنا. بتعكس البساطة الراقية،
              والصدق والثقة، واستدامة الطبيعة، وفلسفة البداوة. كمان بنركز على
              الاستمرارية والتعلّم، والابتكار. وبنؤمن بدعم المجتمعات المحلية من
              خلال توفير منتجات طبيعية بتحمل قيمة حقيقية.
            </div>
            <div className="story-img">
              <Image
                src="/images/bees.webp"
                width={700}
                height={700}
                alt="bees cells"
              />
            </div>
          </div>
        </div>
        <div className="col-12  col-md-6 col-lg-7 ">
          <div className="morning-container d-flex flex-column gap-4">
            <div className="story-img">
              <Image
                src="/images/musab.webp"
                width={700}
                height={700}
                alt="musab"
              />
            </div>
            <div className="story-text">
              بيدوين اليوم، وبدعم الأصدقاء، بتختص بمنتجات النحل، من عسل حر
              طبيعي غير معالج بالحرارة، جبلي، شوكيات، حمضيات، وغيرهم، وحبوب
              اللقاح. بنوصّل منتجاتنا عبر شبكة توصيل بتغطي المملكة كلها، وبنطلق
              موقع إلكتروني للتسوق، وبنتواجد في أسواق محلية مختارة، وكمان بنفتخر
              لنكون متجر العسل الأول والوحيد عبر تطبيق كريم. رؤيتنا بتتضمن تنظيم
              جولات للمناحل، لسكان وضيوف الأردن، مع توسع بالمنتجات بالتعاون مع
              المجتمعات المحلية، لتظل موائدنا مليانة بالأكل اللي بنزرعه وبنصنعه
              بإيدينا.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
