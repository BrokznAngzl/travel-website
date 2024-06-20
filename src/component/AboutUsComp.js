import Profile from '../profile.JPEG';

const AboutUsComp = props => {

    return (
        <div>
            <section className="mt-8 bg-gray-100" id="aboutus">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
                            <div className="mt-4 text-gray-600 text-lg text-center">
                                <p>
                                    Welcome to my website. This website was created as part of my hobby.
                                    I have a keen interest in software development using Java,
                                    JavaScript, and Python, with frameworks like React, Spring Boot,
                                    and Django. If you have any questions, feel free to contact me at <b>wisarut.hak@ku.th</b>
                                </p>
                                <br />
                                <p>
                                    Thank you for visiting and supporting my endeavors!
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0 flex justify-center items-center">
                            <img src={Profile} alt="profile image"
                                 className="object-cover rounded-lg shadow-md size-1/2"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsComp