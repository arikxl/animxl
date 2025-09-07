import {  FaTelegram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    { href: "https://github.com/arikxl", icon: <FaGithub /> },
    { href: "http://t.me/Arik_A", icon: <FaTelegram /> },
    { href: "https://www.linkedin.com/in/arik-alexandrov/", icon: <FaLinkedin /> },
    { href: "https://www.facebook.com/arik.alexandrov", icon: <FaFacebook /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-[#5542ff] py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left flex-1">
                    © arikxl {new Date().getFullYear()} | ISRAEL
                </p>

                <div className=" flex justify-center gap-4 md:justify-center flex-1  text-center items-center">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black transition-colors duration-500 ease-in-out hover:text-white text-xl"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="#privacy-policy"
                    className="text-center text-sm px-4 font-light hover:underline md:text-right flex-1 "
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;