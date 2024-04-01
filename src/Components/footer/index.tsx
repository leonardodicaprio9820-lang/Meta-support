import React from "react";

const  Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-[0.5rem] md:text-base flex justify-between py-5 md:py-8">
            <p>Copyright &copy; {currentYear} Blockchain Rectification. All rights reserved</p>
            <div className="flex gap-2 ">
                <p>Privacy Policy </p>
                <p>Terms of Service</p>
            </div>
        </footer>
    )
}

export default Footer