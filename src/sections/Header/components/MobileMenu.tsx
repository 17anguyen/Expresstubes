import { Link } from "react-router-dom";

export type MobileMenuProps = {
    open: boolean;
    onClose: () => void;
};

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
    if (!open) return null;

    const menuItems = [
        { label: "Explore Packaging", href: "/explore-packaging" },
        {
            label: "Why Choose Green?",
            href: "/why-choose-green",
            dropdown: [
                { label: "Overview", href: "/why-choose-green" },
                { label: "Choose Green", href: "/choose-green" },
                { label: "Sustainable Options", href: "/sustainable-options" },
            ],
        },
        {
            label: "Products",
            href: "/products",
            dropdown: [
                { label: "Overview", href: "/products" },
                { label: "Tubes", href: "/catalog/tubes" },
                { label: "Bottles", href: "/catalog/bottles" },
                { label: "Jars", href: "/catalog/jars" },
            ],
        },
        {
            label: "Trends",
            href: "/trends",
            dropdown: [
                { label: "Overview", href: "/trends" },
                { label: "Mono Packaging", href: "/mono-packaging" },
                { label: "Fine Mist Sprayer Tubes", href: "/fine-mist-sprayer-tubes" },
            ],
        },
        { label: "Upcoming Events", href: "/upcoming-events" },
        {
            label: "Contact",
            href: "/contact",
            dropdown: [
                { label: "Contact Us", href: "/contact" },
                { label: "News", href: "/news" },
                { label: "Credits", href: "/credits" },
            ],
        },
    ];

    return (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm md:hidden">
            <div className="flex flex-col h-full p-6 overflow-y-auto">
                <button
                    onClick={onClose}
                    className="self-end mb-4 text-gray-800"
                    aria-label="Close menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <nav className="flex flex-col gap-4">
                    {menuItems.map((item, idx) => (
                        <div key={idx}>
                            <Link
                                to={item.href}
                                onClick={onClose}
                                className="block text-lg font-semibold text-gray-800 uppercase"
                            >
                                {item.label}
                            </Link>

                            {item.dropdown && (
                                <div className="ml-4 mt-2 flex flex-col gap-2">
                                    {item.dropdown.map((sub, subIdx) => (
                                        <Link
                                            key={subIdx}
                                            to={sub.href}
                                            onClick={onClose}
                                            className="block text-base text-gray-600 uppercase"
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <a
                    href="tel:18003654080"
                    className="mt-auto text-center text-base font-medium text-gray-800 uppercase"
                    onClick={onClose}
                >
                    1.800.365.4080
                </a>
            </div>
        </div>
    );
};
