import Profile from '../profile.JPEG';
const AboutUsComp = props => {

    return(
        <div>
            <section className="mt-8 bg-gray-100" id="aboutus">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
                            <p className="mt-4 text-gray-600 text-lg">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis ducimus error expedita hic illo, iste minus omnis quod totam veritatis, voluptate. Debitis dicta ipsa laboriosam modi voluptas! Eveniet, voluptate!</span><span>A animi cumque delectus, dignissimos error, excepturi hic impedit magni maiores modi molestias natus necessitatibus odio, placeat quod reprehenderit saepe sapiente! Inventore nesciunt quae, quaerat repellat tempora unde ut voluptatum.</span><span>Blanditiis culpa ea est necessitatibus quas recusandae sed. Eveniet pariatur tempore voluptatum! Blanditiis consectetur deleniti eum incidunt ipsa itaque iure maxime obcaecati, quas quis rem tempore totam ullam vitae voluptatibus?</span></p>
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