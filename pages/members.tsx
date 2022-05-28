import type { NextPage } from 'next'
import { people, Footer } from '.'
import { UserCircleIcon, AtSymbolIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const Members: NextPage = () => (
    <>
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
    <div id='members' className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl text-white font-extrabold tracking-tight sm:text-4xl">Meet our team | أعضاء إرفاد</h2>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex flex-col justify-between space-y-6 h-full bg-gray-800 py-10 px-6 rounded-lg xl:px-10">
                  {person.imageUrl==='#'?<UserCircleIcon className="mx-auto h-24 w-24 rounded-full stroke-gray-300"/>:<img className="mx-auto h-24 w-24 rounded-full" src={person.imageUrl} alt="" />}
                  <div className="space-y-2">
                    <div className="text-xl leading-6 font-medium space-y-1">
                       <h3 className='text-green text-center'>{person.name} | {person.nameAr}</h3>
                      <p className="text-white">{person.roleAr}</p>
                      <p className="text-white">{person.role}</p>
                    </div>
                  </div>
                  <ul role="list" className="flex justify-center space-x-5">
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div> 
    <Footer/>
    </>
) 

export default Members