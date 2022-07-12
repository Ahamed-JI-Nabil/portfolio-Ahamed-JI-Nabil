import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";

const navigation = [
    { name: 'About', href: '#about', id: '01. ' },
    { name: 'Skills', href: '#skills', id: '02. ' },
    { name: 'Projects', href: '#projects', id: '03. ' },
    { name: 'Blogs', href: '#blogs', id: '04. ' },
    { name: 'Contact', href: '#contact', id: '05. ' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Example() {
    return (
        <Disclosure as="nav" className="bg-slate-900 pt-6 pb-10 sticky top-0 scroll-smooth">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative">
                        <div className=" flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-emerald-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <Link to='/'><a className="hidden lg:block text-left p-2 font-mono text-lg border-solid border-teal-100 hover:border-emerald-400 hover:text-teal-100 border-2 rounded-tr-lg rounded-bl-lg mt-3" href='/'>AhamedJINabil</a></Link>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                                <Link to='/'>
                                    <div className="flex-shrink-0 flex items-center">
                                        <a className="block lg:hidden p-2 font-mono text-lg border-solid border-teal-100 hover:border-emerald-400 hover:text-teal-100 border-2 rounded-tr-lg rounded-bl-lg mt-3" href='/'>AhamedJINabil</a>

                                    </div>
                                </Link>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <div className='scroll-smooth'>
                                                <p className='font-mono text-base text-teal-100'>{item.id} <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className='text-emerald-400 hover:text-teal-100 '
                                                >
                                                    {item.name}
                                                </a></p>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden relative">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900' : 'font-mono text-base text-center hover:text-teal-100 block px-3 py-2 scroll-smooth'
                                    )}
                                >
                                    <span className='text-teal-100'>{item.id}</span>{item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
