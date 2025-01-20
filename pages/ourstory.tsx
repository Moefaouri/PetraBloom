import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <div className="container full-width-invert">
      <div className="row text-center my-5">
        <h2 className="section-title">قصتنا</h2>
      </div>
      <div className="row justify-content-center mb-5 responsive-md">
        <div className="col-12  col-md-6 col-lg-5 mb-5">
          <div className="night-container d-flex flex-column gap-4">
            <div className="story-text text-align-right">
              في قلب الطبيعة، حيث الزهور تتفتح والهواء مفعم بالطيبة، بدأت رحلتنا
              في عالم صناعة العسل. كان حلمنا أن نخلق منتجًا طبيعيًا وصحيًا يعكس
              جمال الأرض ويعود بالفائدة على المجتمع. منذ البداية، قررنا أن نلتزم
              بأعلى معايير الجودة، وأن نرعى خلايا النحل بكل حب ورعاية. مع مرور
              الوقت، اكتشفنا أن العسل ليس مجرد منتج غذائي، بل هو ثمرة جهود دؤوبة
              تنبع من تعاون بين النحل والطبيعة. قمنا بتوفير بيئة مثالية للنحل،
              مع الحرص على استخدام الأساليب المستدامة في تربية النحل وحصاد
              العسل. وبدعم من تقنيات حديثة، تمكنا من استخراج العسل بأعلى درجات
              النقاء. كانت كل قطرة عسل مليئة بالطاقة الطبيعية من الأزهار
              المختلفة التي تزين الأرض، مما جعل منتجنا يكتسب سمعة طيبة 
            </div>
            <div className="story-img">
              <Image
                src="/images/bees.webp"
                width={700}
                height={700}
                alt="Honey"
              />
            </div>
          </div>
        </div>
        <div className="col-12  col-md-6 col-lg-7 mb-5">
                <div className="morning-container d-flex flex-column gap-4">
            <div className="story-img">
              <Image
                src="/images/man.webp"
                width={700}
                height={700}
                alt="Honey"
              />
            </div>
            <div className="story-text">
              قصتنا تبدأ مع الطبيعة، حيث تتحد النقاء والبساطة في لوحة من
              الإبداع. منذ اللحظة الأولى، كان هدفنا هو تقديم عسل طبيعي بجودة
              استثنائية، يعكس روح الأرض وكرمها. اخترنا بعناية مواقع خلايانا
              لتكون في قلب المروج الغنية بالأزهار البرية، حيث يجد نحلنا أفضل
              أنواع الرحيق. بالحب والشغف، نرعى خلايا النحل بعناية فائقة، معتمدين
              على أساليب مستدامة بعناية بعناية بعناية 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
