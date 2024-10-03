<template>
  <div class="container mx-auto p-4 max-w-4xl">
    <header-section :title="post.title" :date="post.date" />

    <div>
      <image-section
        v-if="post.id === 1"
        :src="img1"
        alt="Understanding Menstrual Health"
        caption="Understanding Menstrual Health Illustration"
      />
      <image-section
        v-if="post.id === 2"
        :src="img2"
        alt="Reproductive Health Advocacy"
        caption="Reproductive Health Advocacy Illustration"
      />
      <image-section
        v-if="post.id === 3"
        :src="img3"
        alt="Mental Health and Reproductive Health"
        caption="Mental Health and Reproductive Health Illustration"
      />
      <image-section
        v-if="post.id === 4"
        :src="img4"
        alt="How to Manage STIs Illustration"
        caption="Guidance on managing sexually transmitted infections (STIs)"
      />
      <image-section
        v-if="post.id === 5"
        :src="img5"
        alt="Understanding contraception options"
        caption="Contraception Options Illustration"
      />

      <article-section :sections="post.content" />
    </div>

    <footer class="mt-8 text-center">
      <router-link to="/blog" class="text-blue-600 hover:underline">
        Back to Blog
      </router-link>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// Import components
import HeaderSection from "../components/blog/HeaderSection.vue";
import ImageSection from "../components/blog/ImageSection.vue";
import ArticleSection from "../components/blog/ArticleSection.vue";
import img1 from "../assets/blog/educational_illustration_showing_a_woman's_rep.jpg";
import img2 from "../assets/blog/representing_reproductive_health_advocacy.jpg";
import img3 from "../assets/blog/mental_health_and_reproductive_health.jpg";
import img4 from "../assets/blog/how_to_manage_sexually_transmitted_infections.jpg";
import img5 from "../assets/blog/contraception_options.jpg";

const route = useRoute();
const post = ref({ title: "", date: "", content: [] });

onMounted(() => {
  const postId = route.params.id;
  const posts = [
    {
      id: 1,
      title: "Understanding Menstrual Health",
      date: "September 15, 2024",
      content: [
        {
          heading: "Introduction",
          body: `<p>Menstrual health is an important aspect of overall well-being for individuals with female reproductive systems. Unfortunately, it's often misunderstood or overlooked due to cultural stigma. This article aims to demystify menstrual health by explaining how the menstrual cycle works and sharing practical tips for managing common symptoms.</p>
      `,
        },
        {
          heading: "What is the Menstrual Cycle?",
          body: `<p>The menstrual cycle is a monthly process that involves the preparation of the female body for pregnancy. On average, the cycle lasts about 28 days but can range from 21 to 35 days. It's controlled by hormones that regulate different phases of the cycle, which include:</p>
          <ul class="list-disc pl-6">
            <li class="mb-1"><span class="font-semibold">Menstrual Phase:</span> The shedding of the uterine lining, which causes bleeding.</li>
            <li class="mb-1"><span class="font-semibold">Follicular Phase:</span> The body prepares for ovulation, stimulated by rising estrogen levels.</li>
            <li class="mb-1"><span class="font-semibold">Ovulation:</span> The release of an egg from the ovary, typically occurring in the middle of the cycle.</li>
            <li class="mb-1"><span class="font-semibold">Luteal Phase:</span> If pregnancy doesn't occur, the body prepares to shed the uterine lining, and the cycle begins again.</li>
          </ul>
          <p>Each of these phases brings hormonal shifts that affect both the body and mind. By tracking your menstrual cycle, you can become more in tune with your body and better manage any symptoms.</p>
      `,
        },
        {
          heading: "Common Symptoms & How to Manage Them",
          body: `<p>Menstrual symptoms can vary widely between individuals, but some of the most common include:</p>
          <ol class="list-decimal pl-6">
            <li class="mb-1"><span class="font-semibold">Cramps (Dysmenorrhea):</span> These are caused by uterine contractions during the menstrual phase. Simple remedies like applying a heating pad or taking over-the-counter pain relief can help ease discomfort.</li>
            <li class="mb-1"><span class="font-semibold">Mood Swings:</span> The hormonal fluctuations during different phases can cause mood changes, such as irritability, sadness, or anxiety. To manage these, try staying active, eating nutrient-rich foods, and practicing mindfulness or meditation.</li>
            <li class="mb-1"><span class="font-semibold">Bloating:</span> Bloating is a common side effect of hormonal changes. Reducing your salt intake and staying hydrated can help reduce bloating.</li>
          </ol>
          <p>For some, symptoms might be more severe and indicate an underlying issue like <i>endometriosis</i> or <i>PCOS</i> (Polycystic Ovary Syndrome). If you experience extreme pain, irregular cycles, or other concerning symptoms, it's essential to speak to a healthcare provider.</p>
          `,
        },
        {
          heading: "Self-Care Tips for Menstrual Health",
          body: `<p>Taking care of your body during your menstrual cycle is essential for your physical and emotional well-being. Here are a few self-care tips:</p>
          <ul class="list-disc pl-6">
            <li class="mb-1"><span class="font-semibold">Stay Active:</span> Gentle physical activity like yoga, walking, or light stretching can help alleviate cramps and boost your mood.</li>
            <li class="mb-1"><span class="font-semibold">Eat Nutrient-Rich Foods:</span> A balanced diet that includes iron-rich foods (like leafy greens or beans) and magnesium (found in nuts and seeds) can help manage symptoms and replenish lost nutrients.</li>
            <li class="mb-1"><span class="font-semibold">Hydrate:</span> Drinking plenty of water not only combats bloating but also keeps your energy levels stable.</li>
            <li class="mb-1"><span class="font-semibold">Get Enough Sleep:</span> Your body needs rest, especially during menstruation. Aim for 7-9 hours of sleep per night to manage fatigue.</li>
          </ul>
          `,
        },
        {
          heading: "Breaking the Stigma",
          body: `<p>Open conversations about menstruation are key to breaking down the stigma that surrounds it. Normalizing discussions about menstrual health empowers individuals to seek the care they need and promotes greater awareness of reproductive health issues. Encouraging education in schools and communities helps ensure that people of all ages have access to accurate information about menstruation and menstrual health.</p>`,
        },
        {
          heading: "Conclusion",
          body: `<p>Understanding menstrual health is crucial for those who experience it. By being aware of how the menstrual cycle works, recognizing common symptoms, and practicing self-care, individuals can take control of their reproductive health and improve their overall well-being. Moreover, discussing menstrual health openly helps reduce the stigma and empowers everyone to advocate for their health needs.</p>`,
        },
      ],
    },
    {
      id: 2,
      title: "Reproductive Health Advocacy",
      date: "September 16, 2024",
      content: [
        {
          heading: "Introduction",
          body: `<p>Reproductive health advocacy is a vital effort aimed at protecting and advancing women’s rights to comprehensive reproductive healthcare. Around the world, women face challenges accessing contraception, safe abortions, maternal care, and fertility services, often due to political, social, and economic barriers. Advocates in this field are working tirelessly to remove these obstacles and ensure that women have the freedom and resources to make informed decisions about their bodies and health.</p>
      `,
        },
        {
          heading: "Fighting for Reproductive Rights",
          body: `<p>Advocates of reproductive health focus on several key areas to ensure equitable access to care:</p>
          <ol class="list-decimal pl-6">
            <li class="mb-1"><span class="font-semibold">Access to Contraception:</span>  One of the most critical components of reproductive health is access to contraception. Family planning options empower women to take control of their fertility, enabling them to plan pregnancies, space children, or avoid pregnancy altogether. Advocacy efforts work toward ensuring that women in all communities (especially marginalized groups) can access affordable and effective contraception without discrimination.</li>
            <li class="mb-1"><span class="font-semibold">Safe Abortion Services:</span> The right to safe abortion services remains one of the most hotly debated aspects of reproductive rights. Many countries still criminalize abortion or severely restrict access, forcing women to seek unsafe alternatives. Reproductive health advocates push for laws that protect women's rights to choose and ensure that abortions are conducted safely and with full medical support, avoiding preventable deaths and long-term complications.</li>
            <li class="mb-1"><span class="font-semibold">Maternal Health Care:</span> Every woman deserves safe, dignified, and respectful maternal health care. Maternal mortality rates remain alarmingly high in some regions, particularly among women of color and those in low-income communities. Advocacy campaigns call for investment in healthcare systems to reduce maternal deaths by providing prenatal, childbirth, and postnatal care that meets the needs of all women, regardless of background.</li>
          </ol>
      `,
        },
        {
          heading: "Challenges to Reproductive Healthcare Access",
          body: `<p>Despite progress, women continue to face numerous barriers when accessing reproductive health services:</p>
          <ul class="list-disc pl-6">
            <li class="mb-1"><span class="font-semibold">Legal Restrictions:</span> In many regions, restrictive laws prevent women from accessing vital services such as abortion or contraception. Advocacy groups work on policy reform to remove these legal hurdles and promote women's autonomy.</li>
            <li class="mb-1"><span class="font-semibold">Stigma and Misinformation:</span>  Cultural stigmas around reproductive health—such as misconceptions about contraception, abortion, or menstruation often prevent women from seeking care or receiving accurate information. Advocates fight to dispel myths and promote comprehensive sexual education that equips women with the knowledge they need to make informed choices.</li>
            <li class="mb-1"><span class="font-semibold">Economic Barriers:</span> High healthcare costs remain one of the most significant barriers to reproductive health services, especially in low-income communities. Advocacy efforts target governmental and institutional funding to subsidize services, ensuring that healthcare is accessible to all women, regardless of financial status.</li>
          </ul>
          `,
        },
        {
          heading: "Reproductive Justice and Intersectionality",
          body: `<p>The fight for reproductive health doesn't only focus on healthcare—it extends to achieving reproductive justice. This framework recognizes that women's ability to control their reproductive lives is impacted by social inequalities like racism, poverty, and immigration status. Advocacy groups embrace intersectionality, understanding that the barriers faced by women of color, LGBTQ+ women, and women with disabilities often intersect and compound, making access to reproductive care even more difficult</p>
          `,
        },
        {
          heading: "Conclusion",
          body: `<p>Reproductive health advocacy is about much more than medical care—it's about ensuring that all women have the right to make decisions about their own bodies, free from coercion, stigma, or economic burden. Through policy change, education, and community organizing, advocates continue to fight for the healthcare rights of women everywhere, ensuring that reproductive autonomy is a reality for all.</p>`,
        },
      ],
    },
    {
      id: 3,
      title: "Mental Health and Reproductive Health",
      date: "September 17, 2024",
      content: [
        {
          heading: "Introduction",
          body: `<p>The connection between mental health and reproductive health is increasingly recognized as a crucial aspect of overall well-being. Mental health significantly influences reproductive health outcomes, and vice versa. Understanding this interplay can lead to better care strategies, improved outcomes, and greater awareness of how psychological factors can impact reproductive choices and health.</p>
      `,
        },
        {
          // heading: "Fighting for Reproductive Rights",
          body: `<p>The Interconnection Between Mental Well-Being and Reproductive Health:</p>
          <ol class="list-decimal pl-6">
            <li class="mb-1"><span class="font-semibold">Impact of Mental Health on Reproductive Choices:</span> Mental health conditions such as depression and anxiety can significantly affect reproductive choices. Women facing mental health challenges may experience increased difficulty in making informed decisions about family planning, contraception, and pregnancy. Studies show that women with untreated mental health disorders are at a higher risk of unintended pregnancies and may struggle to navigate reproductive healthcare systems effectively.</li>
            <li class="mb-1"><span class="font-semibold">Pregnancy and Mental Health:</span> Pregnancy can be a particularly vulnerable time for mental health, with hormonal changes and the stresses of impending motherhood influencing emotional well-being. According to the American Psychological Association, about 15-20% of women experience depression during pregnancy or postpartum . This condition, known as perinatal depression, can have lasting impacts not only on the mother but also on the child's development and health.</li>
            <li class="mb-1"><span class="font-semibold">Menstrual Cycle and Mood Disorders:</span> There is also a well-documented connection between hormonal fluctuations during the menstrual cycle and mental health. Premenstrual syndrome (PMS) and premenstrual dysphoric disorder (PMDD) can lead to significant mood changes, anxiety, and depressive symptoms. Recognizing the impact of the menstrual cycle on mental health can help women better understand their own experiences and seek appropriate treatment.</li>
          </ol>
      `,
        },
        {
          heading: "Reproductive Health Impacts on Mental Well-Being",
          body: `<p>Despite progress, women continue to face numerous barriers when accessing reproductive health services:</p>
          <ol class="list-decimal pl-6">
            <li class="mb-1"><span class="font-semibold">Access to Reproductive Healthcare:</span> Lack of access to comprehensive reproductive healthcare can lead to feelings of helplessness, anxiety, and depression. When individuals face barriers to obtaining contraception or safe abortion services, it can create a significant emotional burden. The stress of navigating these barriers can adversely affect mental health.</li>
            <li class="mb-1"><span class="font-semibold">Experiences of Loss:</span> Miscarriage, infertility, and complications during pregnancy can profoundly affect mental health. The grief associated with these experiences is often overlooked, yet they can lead to long-term psychological effects, including anxiety and depression . Providing support and mental health resources during these times is essential for holistic care.</li>
          </ol>
          `,
        },
        {
          heading: "Promoting Integrated Care",
          body: `<p>To effectively address the dual concerns of mental and reproductive health, an integrated care approach is vital. Healthcare providers should routinely screen for mental health conditions during reproductive health visits and offer referrals to mental health specialists when needed. Comprehensive care that addresses both physical and mental health can lead to better outcomes for individuals navigating reproductive choices.</p>
          <ul class="list-disc pl-6">
            <li class="mb-1"><span class="font-semibold">Education and Awareness:</span> Increasing awareness of the connection between mental and reproductive health among healthcare providers and patients is essential. Educational programs that inform individuals about how their mental health can affect their reproductive choices, and vice versa, are crucial in promoting better health outcomes.</li>
            <li class="mb-1"><span class="font-semibold">Community Support:</span> Building supportive communities that foster open discussions about mental health and reproductive rights can empower individuals. This includes creating safe spaces for women to share their experiences and seek support from peers and professionals.</li>
          </ul>
          `,
        },
        {
          heading: "Conclusion",
          body: `<p>The relationship between mental health and reproductive health is complex but vital for overall well-being. By understanding and addressing the interconnections between these two areas, healthcare providers can offer more holistic support to individuals, leading to better health outcomes. It is crucial to continue advocating for integrated care and comprehensive education to promote both mental and reproductive health for all.</p>`,
        },
      ],
    },
    {
      id: 4,
      title: "How to Manage STIs",
      date: "September 19, 2024",
      content: [
        {
          heading: "Introduction",
          body: `<p>Sexually transmitted infections (STIs) remain a significant health concern, affecting millions worldwide. They are often misunderstood or stigmatized, which can prevent individuals from seeking necessary care. However, with the right approach, STIs are manageable and, in many cases, preventable. This post will guide you through essential steps for managing and preventing STIs, from understanding risk factors to treatment options.</p>
      `,
        },
        {
          heading: "Prevention Strategies",
          body: `
          <ol class="list-decimal pl-6">
            <li class="mb-1"><span class="font-semibold">Practice Safe Sex:</span> The consistent and correct use of condoms significantly reduces the risk of STIs. They create a barrier that prevents the exchange of bodily fluids during sexual contact, effectively minimizing the chance of infection.</li>
            <li class="mb-1"><span class="font-semibold">Get Vaccinated:</span> Certain vaccines, such as those for HPV (human papillomavirus) and hepatitis B, offer protection against these infections. Vaccinations are essential for reducing the overall burden of STIs.</li>
            <li class="mb-1"><span class="font-semibold">Regular Screenings:</span> Testing is crucial, especially if you are sexually active or have multiple partners. Early detection of STIs often leads to more effective treatment and helps prevent the spread of infections.</li>
            <li class="mb-1"><span class="font-semibold">Limit Sexual Partners:</span> Reducing the number of sexual partners can also lower your risk. Being in a mutually monogamous relationship with a partner who has tested negative for STIs is an effective prevention method.</li>
            <li class="mb-1"><span class="font-semibold">Open Communication:</span> Talking openly about sexual health with your partner(s) allows you to make informed decisions. This includes discussing STI testing and safe sex practices before engaging in sexual activities.</li>
          </ol>
      `,
        },
        {
          heading: "Recognizing Symptoms",
          body: `<p>STIs don't always present symptoms immediately. However, some common signs include:</p>
          <ul class="list-disc pl-6">
            <li class="mb-1">Unusual genital discharge.</li>
            <li class="mb-1">Pain or discomfort during urination or intercourse</li>
            <li class="mb-1">Sores, warts, or rashes around the genital area</li>
            <li class="mb-1">Itching or burning sensations</li>
          </ul>
          <p>If you experience any of these symptoms, it's essential to seek medical advice right away. Early detection is key to preventing long-term complications.</p>
          `,
        },
        {
          heading: "Diagnosis and Treatment",
          body: `
          <ul class="list-disc pl-6">
            <li class="mb-1">Consult a Healthcare Provider: If you suspect an STI, schedule an appointment with a healthcare professional for testing. Most STIs can be diagnosed through blood tests, urine samples, or physical examinations.</li>
            <li class="mb-1">Follow Treatment Plans: If diagnosed, follow the prescribed treatment plan fully. Bacterial infections, like chlamydia and gonorrhea, can be cured with antibiotics. Viral infections, like HIV or herpes, may require ongoing treatment, but can be managed with medication.</li>
            <li class="mb-1">Avoid Sexual Activity During Treatment: Until both you and your partner(s) have been treated and cleared, avoid sexual activity to prevent further transmission.</li>
          </ul>
          `,
        },
        {
          heading: "Partner Notification and Communication",
          body: `<p>If diagnosed with an STI, it's important to inform any recent sexual partners. Notifying them allows them to get tested and treated, which helps stop the spread of the infection.</p>`,
        },
        {
          heading: "Emotional and Mental Health",
          body: `<p>An STI diagnosis can be overwhelming, leading to stress, anxiety, or shame. It's crucial to seek support from healthcare professionals, friends, or support groups. Remember, STIs are common and treatable, and talking openly about your health can empower you and others.</p>`,
        },
        {
          heading: "Conclusion",
          body: `<p>Managing and preventing STIs involves staying informed, practicing safe sex, and maintaining open communication with partners and healthcare providers. Early diagnosis and adherence to treatment can protect your health and prevent complications. Take control of your sexual health today by staying educated and taking proactive measures.</p>`,
        },
      ],
    },
    {
      id: 5,
      title: "Contraception Options",
      date: "September 20, 2024",
      content: [
        {
          heading: "Introduction",
          body: `<p>Choosing the right contraception is crucial for managing reproductive health and family planning. With various options available, understanding each method's effectiveness, benefits, and potential side effects can help individuals make informed decisions about their sexual health.</p>
      `,
        },
        {
          heading: "Types of Contraceptive Options",
          body: `
          <ol class="list-decimal pl-6">
            <li class="mb-1"><span class="font-semibold">Barrier Methods:</span> 
              <ul class="list-disc pl-6">
                <li class="mb-1"><span class="font-semibold">Condoms:</span> These are widely used and provide protection against both pregnancy and STIs. They are easy to use and accessible.</li>  
                <li class="mb-1"><span class="font-semibold">Diaphragms and Cervical Caps:</span> These are placed inside the vagina to block sperm from entering the uterus, used with spermicide for effectiveness.</li>  
              </ul>  
            </li>
            <li class="mb-1"><span class="font-semibold">Hormonal Methods:</span> 
              <ul class="list-disc pl-6">
                <li class="mb-1"><span class="font-semibold">Birth Control Pills:</span> Taken daily, these pills regulate hormones to prevent ovulation. There are various formulations available, so it's essential to consult a healthcare provider for the best fit.</li>  
                <li class="mb-1"><span class="font-semibold">Patches and Injections:</span> Patches are worn on the skin and release hormones into the bloodstream, while injections offer three-month protection.</li>  
                <li class="mb-1"><span class="font-semibold">Implants:</span> A small rod placed under the skin of the arm, releasing hormones to prevent ovulation for up to three years.</li>  
              </ul>  
            </li>
            <li class="mb-1"><span class="font-semibold">Intrauterine Devices (IUDs):</span> 
              <ul class="list-disc pl-6">
                <li class="mb-1">IUDs are small T-shaped devices inserted into the uterus by a healthcare provider. They can be hormonal or copper-based and provide long-term protection, ranging from 3 to 10 years, depending on the type.</li>  
              </ul>  
            </li>
            <li class="mb-1"><span class="font-semibold">Natural Methods:</span> 
              <ul class="list-disc pl-6">
                <li class="mb-1">These include tracking menstrual cycles and avoiding sex on fertile days. While they require diligence, they can be effective for some couples.</li>  
              </ul>  
            </li>
            <li class="mb-1"><span class="font-semibold">Emergency Contraception:</span> 
              <ul class="list-disc pl-6">
                <li class="mb-1">Pills like Plan B can be taken after unprotected intercourse to prevent pregnancy. They are most effective when taken as soon as possible.</li>  
              </ul>  
            </li>
            <li class="mb-1"><span class="font-semibold">Sterilization:</span> 
              <ul class="list-disc pl-6">
                <li class="mb-1">Permanent methods, such as tubal ligation for women or vasectomy for men, are suitable for those who do not wish to have children in the future.</li>  
              </ul>  
            </li>
          </ol>
      `,
        },
        {
          heading: "Making an Informed Choice",
          body: `<p>When considering contraceptive options, it's essential to discuss personal health history and lifestyle with a healthcare provider. Factors like age, health conditions, and frequency of sexual activity can influence the most suitable method..</p>
      `,
        },
        {
          heading: "Conclusion",
          body: `<p>Understanding the various contraception options empowers individuals to make informed decisions about their reproductive health. Each method has its benefits and drawbacks, so it's vital to choose what aligns best with personal needs and circumstances.</p>
      `,
        },
      ],
    },
  ];

  post.value = posts.find((p) => p.id === parseInt(postId));
});
</script>
