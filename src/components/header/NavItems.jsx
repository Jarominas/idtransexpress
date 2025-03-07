import { useTranslations } from 'next-intl'

const navItems = [
    {
        title: 'nav.about',
        id: 'about',
        href: '#about',
    },
    {
        title: 'nav.price',
        id: 'prices',
        href: '#prices',
    },
    {
        title: 'nav.contact',
        id: 'contact',
        href: '#contact',
    },
]

const NavItem = ({ id, href, children }) => {
    return (
        <a
            href={href}
            className={`${
                id === 'about' ? 'text-primary-500' : 'text-gray-300'
            } hover:bg-primary-500 hover:text-white lg:px-3 py-2 rounded-md text-md font-medium`}
        >
            {children}
        </a>
    )
}

const NavItems = () => {
    const scrollToSection = (sectionId) => (e) => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <div className='hidden sm:block sm:ml-6'>
            <div className='flex space-x-4'>
                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        onClick={scrollToSection(item.id)}
                        href={item.href}
                        id={item.id}
                    >
                        {/* {t(item.title)} */}
                    </NavItem>
                ))}
            </div>
        </div>
    )
}

export default NavItems
