import type { NextPage } from 'next'
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { StarIcon, SparklesIcon, CheckIcon, InformationCircleIcon, QuestionMarkCircleIcon, AtSymbolIcon, UserCircleIcon, SpeakerphoneIcon} from '@heroicons/react/outline'

const navigation = [
  { name: 'Leadership | القادة', href: '#leadership' },
  { name: 'Members | الأعضاء', href: '/members' },
  { name: 'Initiatives | المبادرات', href: '/initiatives' }
] 

const navigation2 = [
  {
    name: 'Instagram',
    href: 'mailto:erfad.organization@gmail.com',
    icon: AtSymbolIcon,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/erfad_org?igshid=YmMyMTA2M2Y=',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/erfad_org?s=21&t=vOCLoh-Qu47YSKhsVUYmUQ',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/erfad-org/',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
        clipRule="evenodd"
      />
    </svg>
    )
  },
  {
    name: 'TikTok',
    href: 'https://vt.tiktok.com/ZSdU7TQ11/',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 512 512" {...props}><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/></svg>
    )
  }
]

export const people = [
  {
    name: 'Layan Noorwali',
    nameAr: 'ليان نورولي',
    role: 'President, Founding Member',
    roleAr: 'عضوة مؤسسة، الرئيسة',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/layan-noorwali-a098a1217',
    instagramUrl: '#',
    email: 'layan.m.nr.w@gmail.com'
  },
  {
    name: 'Wareef Alghaylani',
    nameAr: 'وريف الغيلاني',
    role: 'Exec Creative Director, Founding Member',
    roleAr: 'عضوة مؤسسة، المديرة التنفيذية الإبداعية',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/1024154895319846952/2022-09-27_06.05.26.jpg',
    twitterUrl: 'https://twitter.com/wareef_p?s=21',
    linkedinUrl: 'http://linkedin.com/in/wareef-alghaylani',
    instagramUrl: '#',
    email: 'wareef.xs@gmail.com'
  },
  {
    name: 'Retal Jadaa',
    nameAr: 'ريتال جدع',
    role: 'Exec Director of Operations, Founding Member',
    roleAr: 'عضوة مؤسسة، المديرة التنفيذية للمشاريع',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/1038467265374457888/PHOTO-2022-09-07-23-39-40.jpg',
    twitterUrl: 'https://twitter.com/retaljadaa?s=21&t=GF1bQsxBw82Z-8OJTrSYNQ',
    linkedinUrl: '#',
    instagramUrl: 'https://instagram.com/retaljadaa?utm_medium=copy_link',
    email: 'retaljadaa@hotmail.com'
  },
  {
    name: 'Retaj Assulami',
    nameAr: 'رتاج السلمي',
    role: 'Former President, Founding Member',
    roleAr: 'عضوة مؤسسة، الرئيسة السابقة',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/1052245134730854490/672c83d8-f761-46bc-8f96-bd82238eba0b.jpg',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/retaj-a-03b4bb216',
    instagramUrl: '#',
    email: 'retajaasulami@gmail.com'
  },
 /*  {
    name: 'Jood Alfadhel',
    nameAr: 'جود  الفاضل',
    role: 'Riyadh Regional Officer',
    roleAr: 'مديرة الرياض الإقليمية',
    imageUrl: 'https://cdn.discordapp.com/attachments/852672256977928224/980157935160262656/PHOTO-2022-05-28-15-54-07.jpg',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/jood-alfadhel-8703a0161',
    instagramUrl: 'https://instagram.com/jood_af?igshid=NmZiMzY2Mjc=',
    email: 'joodaf@gmail.com'
  }, */
  /* {
    name: 'Fatimah Alhejji',
    nameAr: 'فاطمة الحجي',
    role: 'Al-Ahsaa Regional Officer',
    roleAr: 'مديرة الأحساء الإقليمية',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/980161040216096778/Screenshot_2022-05-28_202850.png',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/fatimahalhejji',
    instagramUrl: 'https://instagram.com/x.feto?igshid=YmMyMTA2M2Y=',
    email: 'ifetoali@gmail.com'
  }, */
/*   {
    name: 'Amr Almanjnouni',
    nameAr: 'عمرو المجنوني',
    role: 'Project Manager',
    roleAr: 'مدير مشروع',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'amr.almajnouni@gmail.com'
  }, */
  /* {
    name: 'Moayad Aliasmail',
    nameAr: 'مؤيد الإسماعيل',
    role: 'Public Relations Manager',
    roleAr: 'مدير علاقات عامة',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/980161664248860733/Screenshot_2022-05-28_203154.png',
    twitterUrl: 'http://www.twitter.com/MoayadAlismail',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'masmoayad@gmail.com'
  }, */
  {
    name: 'Hussein Al-Beshri',
    nameAr: 'حسين البشري',
    role: 'Head of Development',
    roleAr: 'رئيس قسم التطوير',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/980163727951278191/My_project_2.png',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/hussain-al-beshri-87baba206',
    instagramUrl: 'https://www.instagram.com/hussainab15/',
    email: 'hussainalialbeshri@gmail.com'
  },
  {
    name: 'Dai Shojaa',
    nameAr: 'ضي شجاع',
    role: 'HR Manager',
    roleAr: 'مسؤولة موارد بشرية',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/1052259972727193672/image.png',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: 'https://instagram.com/dai_shojaa?igshid=NmZiMzY2Mjc=',
    email: 'daialishojaa@gmail.com'
  },
  {
    name: 'Hassan Almosapeeh',
    nameAr: 'حسن المسبح',
    role: 'Web Developer',
    roleAr: 'مطور المواقع',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/981172981818621982/IMG_6120.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'hassanalmosapeeh@gmail.com'
  },
/*   {
    name: 'Talah Jalal',
    nameAr: 'تالا جلال',
    role: 'Social Media Manager',
    roleAr: 'مديرة مواقع التواصل الاجتماعي',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'talahjalal@gmail.com'
  }, */
  {
    name: 'Roiyah Bait-al-Mal',
    nameAr: 'رؤيا بيت المال',
    role: 'Content Writer',
    roleAr: 'كاتبة محتوى',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/1052260171121958912/image.png',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: 'https://instagram.com/roiyahbassam?igshid=YmMyMTA2M2Y=',
    email: 'roiyahmal5@gmail.com'
  },
  {
    name: 'Wid Altuwaijry',
    nameAr: 'ود التويجري',
    role: 'Content Writer',
    roleAr: 'كاتبة محتوى',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/980162427167596604/Screenshot_2022-05-28_203321.png',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: 'https://www.instagram.com/dim_randoms/',
    email: 'widaltuwaijry@gmail.com'
  },
  {
    name: 'Assaf Alqahtani',
    nameAr: 'عسّاف القحطاني',
    role: 'Translator',
    roleAr: 'مترجم',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: 'https://www.instagram.com/invites/contact/?i=w2driehj59m3&utm_content=1vmto5l',
    email: 'alqahtaniassaf@gmail.com'
  },
 /*  {
    name: 'Jouri Shudayyid',
    nameAr: 'جوري شديد',
    role: 'Translator',
    roleAr: 'مترجمة',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'jouri10sami@gmail.com'
  }, */
  {
    name: 'Shahad Alhamada',
    nameAr: 'شهد الحمادة',
    role: 'Head of Graphic Design',
    roleAr: 'رئيسة قسم التصميم',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/981172862377406514/bcfd6473-bb30-49f1-942d-6b1c5402b86a.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: 'https://instagram.com/shahad.abdullah31?igshid=YmMyMTA2M2Y=',
    email: 'shahad.hamadah2005@gmail.com'
  },
  {
    name: 'Sarah Altobaishi',
    nameAr: 'سارة الطبيشي',
    role: 'VP of the Operations',
    roleAr: 'نائبة رئيسة قسم المشاريع',
    imageUrl:
      'https://media.discordapp.net/attachments/852672256977928224/1052258902143672360/image.png',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/sara-altobaishi-8310ba236',
    instagramUrl: '#',
    email: 'sarahani8@hotmail.com'
  },
  {
    name: 'Raneem Alghamdi',
    nameAr: 'رنيم الغامدي',
    role: 'Mecca Projects Manager',
    roleAr: 'مسؤولة مشاريع مكة المكرمة',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/1052259328301748224/image.png',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/raneem-alaqeel-971693217/',
    instagramUrl: 'https://www.instagram.com/xane2m/',
    email: 'raneem-alghamdi06@hotmail.com'
  },
  {
    name: 'Mohammed Feedah',
    nameAr: 'محمد فيده',
    role: 'Head of HR',
    roleAr: 'رئيس قسم الموارد البشرية',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/1052259591930519613/image.png',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'mohammedf9910@gmail.com'
  },
  {
    name: 'Haifaa Al-Hussain',
    nameAr: 'هيفاء آل حسين',
    role: 'HR Manager',
    roleAr: 'مسؤولة موارد بشرية',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: '699haifa27816@gmail.com'
  },
  {
    name: 'Razaan Al-Amoudi',
    nameAr: 'رزان العامودي',
    role: 'VP of Development',
    roleAr: 'نائبة رئيس لجنة التطوير',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'Rozyamoudi@gmail.com'
  },
  {
    name: 'Nawaf Alakel',
    nameAr: 'نواف محمد العقل',
    role: 'Head of Content Management',
    roleAr: 'رئيس قسم إدارة المحتوى',
    imageUrl:
      '#',
    twitterUrl: 'https://twitter.com/NawafAlakel',
    linkedinUrl: 'https://www.linkedin.com/in/nawaf-m-alakel-b6823a219/ar?trk=people-guest_people_search-card&originalSubdomain=sa',
    instagramUrl: 'https://www.instagram.com/greytheprofessional/',
    email: 'arbiancobra@gmail.com'
  },
  {
    name: 'Joud Al-Zahrani',
    nameAr: 'جود الزهراني',
    role: 'HR Manager',
    roleAr: 'مسؤلة موارد بشرية',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'joodprofacc@gmail.com'
  },
  {
    name: 'Jude Aljizawi',
    nameAr: 'جود الجيزاوي',
    role: 'Marketing Officer',
    roleAr: 'مسؤولة تسويق',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/1052259743583961198/image.png',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: 'https://www.instagram.com/18asd1/',
    email: 'Jude.aljizawi@gmail.com'
  },
  {
    name: 'Fatima Alarfaj',
    nameAr: 'فاطمة العرفج',
    role: 'Graphic Designer',
    roleAr: 'مصممة جرافيك',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'Fatimaabdullahalarfaj@gmail.com'
  },
  {
    name: 'Haneen Alanazi',
    nameAr: 'حنين العنزي',
    role: 'Social Media Manager',
    roleAr: 'مسؤولة مواقع تواصل اجتماعي',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'haneenalanazi.f9@gmail.com'
  },
  {
    name: 'Yazan Ali-Shamrani',
    nameAr: 'يزن الشمراني',
    role: 'Voice Over',
    roleAr: 'معلق صوتي',
    imageUrl:
      'https://cdn.discordapp.com/attachments/852672256977928224/1052260382477135912/image.png',
    twitterUrl: '#',
    linkedinUrl: 'https://linktr.ee/Yazan.shamrani',
    instagramUrl: '#',
    email: 'yazan.shamrani717@gmail.com'
  },
  {
    name: 'Anas Alsefri',
    nameAr: 'أنس السفري',
    role: 'Project Manager',
    roleAr: 'مدير مشروع',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'Analsefri@gmail.com'
  },
  {
    name: 'Daniah Bas-hi',
    nameAr: 'دانية باصهي',
    role: 'VP of Marketing',
    roleAr: 'نائية قسم التسويق',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/dania-basahi-0a8a28209',
    instagramUrl: '#',
    email: 'Daniamoh05@gmail.com'
  },
  {
    name: 'Alanood Alqahtani',
    nameAr: 'العنود القحطاني',
    role: 'Content Creator',
    roleAr: 'صانعة محتوى',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: 'https://www.instagram.com/aniixalq/',
    email: 'alanoodalqahtani66@gmail.com'
  },
  {
    name: 'Ameen Al-Hachem',
    nameAr: 'امين آل هاشم',
    role: 'Development Officer',
    roleAr: 'مسؤول تطوير',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'Ameenalhashem13@gmail.com'
  },
  {
    name: 'Aryam Al-Shehri',
    nameAr: 'أريام الشهري',
    role: 'Graphic Designer',
    roleAr: 'مصممة جرافيك',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'Aryam91900@gmail.com'
  },
  {
    name: 'Fajer Alkhulaifi',
    nameAr: 'فجر الخليفي',
    role: 'Rriyadh Projects Manager',
    roleAr: 'مسؤولة مشاريع الرياض',
    imageUrl:
      '#',
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#',
    email: 'fjooore1010@hotmail.com'
  },
  {
    name: 'Talal Alqahtani',
    nameAr: 'طلال القحطاني',
    role: 'Head of PR',
    roleAr: 'مدير العلاقات العامة',
    imageUrl:
      '#',
    twitterUrl: 'https://twitter.com/Talal_Al_Bishri',
    linkedinUrl: 'https://www.linkedin.com/in/talal-alqahtani-9976a623b',
    instagramUrl: 'https://www.instagram.com/xl.iyt/',
    email: 'talloole@gmail.com'
  },
]

export const Footer =()=> (
  <footer id='footer' className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation2.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-xl text-gray-400">&copy; 2022, Erfad Org. All rights reserved.</p>
        </div>
      </div>
    </footer>
)

const Home: NextPage = () => {
  const [show, setShow] = useState(true)
  return (
    <>
 {show&&<div className="bg-blue">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-darkblue">
              <QuestionMarkCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">How can you help us? | كيف تساعدنا؟</span> 
              <span className="hidden md:inline">How can you help us? | كيف تساعدنا؟</span> 
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://forms.gle/bywP7UaFAq6bhDFk8"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-darkblue bg-white hover:bg-indigo-50"
            >
             Contact | تواصل
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={()=>setShow(false)}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>} 
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Erfad</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://cdn.discordapp.com/attachments/852672256977928224/979399215769845890/46E4B8A6-ACF3-48B9-9622-F9F6B693DC7B__1_-removebg-preview.png"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://cdn.discordapp.com/attachments/852672256977928224/979399215769845890/46E4B8A6-ACF3-48B9-9622-F9F6B693DC7B__1_-removebg-preview.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover> 
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="inline">Erfad</span>{' '}
              <span className="inline text-green">إرفاد</span>
            </h1>
            <div className='flex justify-between flex-wrap-reverse gap-10'>
            <p className="w-[400px] text-left mt-3 max-w-md mx-auto text-2xl text-gray-500 md:mt-5 md:max-w-3xl">
            A non-profit environmental organization led by a group of young environmentalists, attempting to improve public awareness of environmental issues and work on thoughtful plans to make a change in real-life.
            </p>
            <p className="w-[400px] text-right mt-3 max-w-md mx-auto text-2xl text-gray-500 md:mt-5 md:max-w-3xl">
            منظمة بيئية غير ربحية يديرها مجموعة من الشباب المؤيدين للثقافة البيئية، سعيَا منهم لزيادة الوعي عن القضايا البيئية، والعمل على خطط مدروسة تحدث تغيير على أرض الواقع.
            </p>
            </div>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="https://erfad-en.blogspot.com/" target='_blank' rel="noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent font-bold rounded-md text-white bg-green hover:bg-darkgreen md:py-4 text-2xl md:px-10"
                >
                  Our Blog
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="https://erfad-ar.blogspot.com/" target='_blank' rel="noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-2xl font-medium rounded-md text-darkgreen bg-white hover:bg-gray-50 md:py-4 md:px-10"
                >
                  مدونتنا
                </a>
              </div>

            </div>
            <div className="flex justify-center space-x-6 md:order-2 mt-10">
                {navigation2.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
          </div>
        </main>
      </div>
    </div>
    
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1462143338528-eca9936a4d09?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-center font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Our Vision | رؤيتنا</h1>
          <div className='flex justify-between gap-x-10'>
          <p className="mt-6 max-w-3xl text-2xl text-gray-300">
          A greener Saudi, where citizens work together to improve the environment by adopting environmentally-friendly habits in their daily lives.
          </p>
          <p className="mt-6 text-right max-w-3xl text-2xl text-gray-300">
          سعودية أكثر اخضرارَا, يسهم مواطنوها مجتمعين على اتباع ممارسات يومية تساعد في تحسين البيئة.
          </p>
          </div>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">  
            <div className="bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-green rounded-xl shadow-lg transform -translate-y-1/2">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 text-center">Our Message | رسالتنا</h3>
                <p className="mt-4 text-xl text-gray-500 text-right">نسعى إلى بناء مجتمع يؤثر على البيئة بشكل إيجابي من خلال رفع الوعي لديهم، وإتاحة حملات وفرص تطوعية ثريّة توطّد القيم البيئية.</p>
                <p className="mt-4 text-xl text-gray-500">We seek to build a society that has a positive impact on the environment by increasing public awareness and providing campaigns and volunteer opportunities that promote environmental values.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-green rounded-xl shadow-lg transform -translate-y-1/2">
                  <StarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 text-center">Our Mission</h3>
                <ul className='list-disc list-inside mt-4 text-xl text-gray-500'>
                  <li>Calling for urgent action on environmental issues in general and the issue of climate change in particular in Saudi society.</li>
                  <li>Clarify any misconceptions about the environment.</li>
                  <li>Improving environmental culture through creating suitable content for all segments of Saudi society in order to fulfill the organization&#39;s primary goal.</li>
                  <li>Encouraging people to make a difference and seek to discover solutions that help improve the environment.</li>
                  <li>Create opportunities for all segments of Saudi society and start taking real actions to improve the environment.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-green rounded-xl shadow-lg transform -translate-y-1/2">
                  <StarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 text-center">مهمتنا</h3>
                <ul className='list-disc list-inside mt-4 text-xl text-gray-500 [direction:rtl]'>
                  <li>الدعوة إلى اتخاذ إجراءات عاجلة بشأن القضايا البيئية بشكل عام وقضية التغير المناخي بشكل خاص في المجتمع السعودي.</li>
                  <li>تصحيح المفاهيم الخاطئة المتعلقة بالبيئة.</li>
                  <li>تعزيز الثقافة البيئية عن طريق صنع محتوى ملائم لجميع فئات المجتمع السعودي بحيث يحقق هدف المنظمة الرئيسي.</li>
                  <li>الحث على إحداث فارق وإيجاد حلول تساعد في تحسين البيئة.</li>
                  <li>خلق فرص لجميع فئات المجتمع السعودي والبدء باتخاذ إجراءات حقيقية لتحسين البيئة.</li>
                </ul>
              </div>
            </div>
        </div>
      </section>
    </div>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Our Values | قيمنا</p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              <div className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green" aria-hidden="true" />
                  <p className="ml-9 text-2xl leading-6 font-medium text-gray-900">Persistence | الإصرار</p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green" aria-hidden="true" />
                  <p className="ml-9 text-2xl leading-6 font-medium text-gray-900">Sincerity | الإخلاص</p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green" aria-hidden="true" />
                  <p className="ml-9 text-2xl leading-6 font-medium text-gray-900">Honesty | الأمانة</p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green" aria-hidden="true" />
                  <p className="ml-9 text-2xl leading-6 font-medium text-gray-900">Growth | النماء</p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green" aria-hidden="true" />
                  <p className="ml-9 text-2xl leading-6 font-medium text-gray-900">Justice | العدل</p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green" aria-hidden="true" />
                  <p className="ml-9 text-2xl leading-6 font-medium text-gray-900">Excellence | الإتقان</p>
                </dt>
              </div>
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <img
              className="h-20 w-auto mb-3"
              src="https://cdn.discordapp.com/attachments/852672256977928224/979399215769845890/46E4B8A6-ACF3-48B9-9622-F9F6B693DC7B__1_-removebg-preview.png"
              alt=""
            />
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green text-white">
                    <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-2xl leading-6 font-medium text-gray-900">Why &#34;Erfad&#34;?</p>
                </dt>
                <dd className="mt-2 text-xl text-gray-500">Erfad is a synonym of beneficence, which represents one of the goals that we seek in every work bearing the organization’s name.</dd>
              </div>
              <div className='[direction:rtl]'>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green text-white">
                    <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-2xl leading-6 font-medium text-gray-900">لماذا &#34;إرفاد&#34;؟</p>
                </dt>
                <dd className="mt-2 text-xl text-gray-500">إرفاد مرادف إحسان، والتي تمثل احدى اهدافنا التي نسعى لها في كل عمل يحمل اسم المنظمة.</dd>
              </div>
              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green text-white">
                    <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-2xl leading-6 font-medium text-gray-900">Our Logo</p>
                </dt>
                <dd className="mt-2 text-xl text-gray-500">The font has been carefully chosen to reflect the organization&#39;s target audience. <br/><br/>The letter &#34;ر&#34; was delivered in Arabic and the letter &#34;f&#34; in English to express the organization&#39;s provision of all means of communication with the various categories of its target audience.<br/><br/>The palm represents growth, and each frond of the palm represents one of the values of the organization, which are: (persistence, sincerity, honesty, growth, justice, perfection).</dd>
              </div>
              <div className='[direction:rtl]'>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green text-white">
                    <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-2xl leading-6 font-medium text-gray-900">شعارنا</p>
                </dt>
                <dd className="mt-2 text-xl text-gray-500">
                تم اختيار الخط بدقة ليعبر عن الجمهور المستهدف للمنظمة.<br/><br/>
وتم توصيل حرف ال &#34;ر&#34; باللغة العربية وحرف ال&#34;f&#34; باللغة الانجليزية ليعبر عن توفير المنظمة لجميع سبل التواصل مع مختلف فئات جمهورها المستهدف.<br/><br/>
تمثل النخلة النماء ويمثل كل سعف للنخلة قيمة من قيم المنظمة وهي: (الإصرار، الإخلاص، الأمانة، النماء، العدالة، الإتقان)
                </dd>
              </div>
          </dl>
        </div>
      </div>
    </div>
    <div id='leadership' className="bg-gray-900">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">Leadership | القادة</h2>
          </div>
          <div className="lg:col-span-2">
            <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {people.slice(0,3).map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    {person.imageUrl==='#'?<UserCircleIcon className="w-16 h-16 rounded-full lg:w-20 lg:h-20 stroke-gray-300"/>:<img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />}
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className='text-green'>{person.nameAr}</h3>
                      <h3 className='text-green'>{person.name}</h3>
                      <p className="text-white">{person.roleAr}</p>
                      <p className="text-white">{person.role}</p>
                      <ul role="list" className="flex space-x-5">
                      {person.twitterUrl!=='#'&&<li>
                        <a target='_blank' rel="noreferrer" href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>}
                      {person.linkedinUrl!=='#'&&<li>
                        <a target='_blank' rel="noreferrer" href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>}
                      {person.instagramUrl!=='#'&&<li>
                        <a target='_blank' rel="noreferrer" href={person.instagramUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Instagram</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                          </svg>
                        </a>
                      </li>}                   
                      <li>
                        <a target='_blank' rel="noreferrer" href={`mailto:${person.email}`} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">E-Mail</span>
                          <AtSymbolIcon className="w-5 h-5"/>
                        </a>
                      </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default Home
