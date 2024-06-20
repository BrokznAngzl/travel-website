const FooterComp = () => {
    return(
        <div>
            <section>
                <footer className="bg-gray-200 text-white py-4 px-3">
                    <div className="container mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full md:w-1/2 md:text-center md:mb-4 mb-8">
                            <p className="text-xs text-gray-400 md:text-sm">Copyright 2024 &copy; All Rights
                                Reserved</p>
                        </div>
                        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                            <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                                <li><a href="#contactUs" className="text-gray-400 hover:text-white"
                                onClick={(e)=>{
                                    const emailAddress = 'wisarut.hak@ku.th';
                                    const mailtoUrl = 'mailto:' + encodeURIComponent(emailAddress);
                                    window.open(mailtoUrl, '_blank')
                                }}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default FooterComp;