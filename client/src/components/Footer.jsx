import { assets } from "../assets/assets";

function Footer() {
    return (
        <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center gap-4 py-3 mt-20">
            <img width={160} src={assets.logo} alt="Logo Image" />
            <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">Copyright Saurav Mittal | All right reserved.</p>
            <div className="flex gap-2.5">
                <a href="https://github.com/SAURAVMITTAL15"><img style={{ borderRadius: '50%', border: "1px solid black" }} width={38} src={assets.github_icon} alt="github" /></a>
                <a href="https://www.linkedin.com/in/saurav-mittal-53528120b/"><img style={{ borderRadius: '50%', border: "1px solid black" }} width={38} src={assets.linkedin_icon} alt="linkedin" /></a>
                <a href="https://www.instagram.com/sauravmittal15/"><img style={{ borderRadius: '50%', border: "1px solid black" }} width={38} src={assets.instagram_icon} alt="Instagram" /></a>
                {/* <img width={38} src={assets.linkedin_icon} alt="LinkedIn" /> */}
            </div>
        </div>
    )
}

export default Footer;
