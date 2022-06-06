import type { NextPage } from 'next'
import { people, Footer } from '.'
import { UserCircleIcon, AtSymbolIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Head from 'next/head'
const stats = [
    { label: 'الشركاء', value: '8' },
    { label: 'Partners', value: '8' },
  ]

const Members: NextPage = () => (
    <>
    <Head>
       <title>Erfad Initiatives | مبادرات إرفاد</title>
    </Head>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
                <span className="sr-only">Erfad</span>
                <Link href={'/'}>
                    <img
                    className="h-8 w-auto sm:h-10 cursor-pointer"
                    src="https://cdn.discordapp.com/attachments/852672256977928224/979399215769845890/46E4B8A6-ACF3-48B9-9622-F9F6B693DC7B__1_-removebg-preview.png"
                    alt=""
                    />
                </Link>
            </div>
        </div>
        </nav>
    </div>
    <div className="relative mt-20">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
    <div className="relative sm:py-16 lg:py-0">
        <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
        <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
        <svg
            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
        >
            <defs>
            <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
            >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
            </defs>
            <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
        </svg>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
        {/* Testimonial card*/}
        <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
            <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            />
            <div className="absolute inset-0 bg-rose-500 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90" />
            <div className="relative px-8">
              <blockquote className="mt-8 [direction:rtl]">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 right-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative mr-6">
                        .وحدنا نحقق القليل ومعاً نحقق الكثير
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-rose-200">هلن كلر</p>
                      </footer>
                    </blockquote>
            <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                        Alone we can do so little; together we can do so much.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-rose-200">Hellen Keller</p>
                      </footer>
                    </blockquote>
            </div>
        </div>
        </div>
    </div>

    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        {/* Content area */}
        <div className="pt-12 sm:pt-16 lg:pt-20">
        <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-right">
            مبادرة #نتحمل_المسؤولية 
        </h2>
        <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
            #TakingResponsibility Initiative  
        </h2>
        <div className="mt-6 text-gray-500 space-y-6">
            <p className="text-xl text-right">
            لأننا نؤمن بأن البيئة مسؤولية الجميع، وأن المتأثر الوحيد سلبًا في هذه المعادلة هم البشر وحدهم، وأن ما تحتاجه البيئة بحق هو &#34;أفعال&#34;و &#34;قرارات&#34;و &#34;مبادرات&#34;،بمناسبة اليوم العالمي للبيئة، الموافق 5 يونيو؛ تعلن منظمة إِرفاد عن إطلاقها  بالتعاون مع شركائها لمبادرة #نتحمل_المسؤولية، سعيًا منهم لنشر عادات سهلة التطبيق ، كبيرة الأثر.
            </p>
            <p className="text-xl leading-7">
            Because we believe that the environment is everyone&#39;s responsibility, that the only people who are negatively affected by this problem are humans, and that what the environment truly needs are &#34;actions&#34; and &#34;decisions,&#34; Erfad has collaborated with its partners to launch the &#34;#TakingResponsibility&#34; movement on the occasion of World Environment Day, in an effort to spread simple and effective habits.
            </p>
        </div>
        </div>

        {/* Stats section */}
        <div className="mt-10">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
            {stats.map((stat) => (
            <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
            </div>
            ))}
        </dl>
        </div>
    </div>
    </div>
</div>
<div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div className="col-span-1 flex flex-col items-center align-middle py-8 px-8 bg-gray-50">
            <img
              className="max-h-14"
              src="/sed.png"
              alt="Erfad"
            />
            <h3 className='mt-5'>SED | سدرة</h3>
          </div>
          <div className="col-span-1 flex flex-col items-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/nuqsh.png"
              alt="Nuqsh"
            />
            <h3 className='mt-5'>Nuqsh | نقش</h3>
          </div>
          <div className="col-span-1 flex flex-col items-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="/wasela.png" alt="Wasela" />
            <h3 className='mt-5'>Waselah | وسيلة</h3>
          </div>
          <div className="col-span-1 flex flex-col items-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="/atroqah.png" alt="Atroqah" />
            <h3 className='mt-5'>Atroqah | أطرقة</h3>
          </div>
          <div className="col-span-1 flex flex-col items-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="/bloomers.png" alt="Bloomers" />
            <h3 className='mt-5'>Bloomers</h3>
          </div>
          <div className="col-span-1 flex flex-col items-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/botanical.png"
              alt="Botanical"
            />
            <h3 className='mt-5'>Batonical Gardens</h3>
          </div>
          <div className="col-span-1 flex flex-col items-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/medizine.png"
              alt="Medizine"
            />
            <h3 className='mt-5'>MediZine | مديزين</h3>
          </div>
          <div className="col-span-1 flex flex-col items-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/viola.png"
              alt="Viola"
            />
            <h3 className='mt-5'>Viola | فيولا</h3>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
) 

export default Members