const TopicComp = (props) => {
    return (
            <div className="py-12 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="mb-20 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {props.title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600" dangerouslySetInnerHTML={{ __html: props.description }}>
                            {/*{props.description}*/}
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#"
                               className="rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">
                                แฟนเพจ
                            </a>
                            <a href="#aboutus" className="text-sm font-semibold leading-6 text-gray-900">
                                เกี่ยวกับ
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TopicComp