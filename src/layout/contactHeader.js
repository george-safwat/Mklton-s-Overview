export default function BlogHeader({setSearchString}) {
    
    return (
        <header className="header pd-2-r pd-b-2">
            <div className="shape shape-1 blog-shape">
                <svg
                width="387"
                height="268"
                viewBox="0 0 387 268"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M218 75C360 13 381.158 -47.8275 386.158 60.1725C391.158 168.172 233.047 277.371 124 267C46.1285 259.594 -10.8423 191.172 2.15775 119.172C15.1577 47.1724 76.0001 137 218 75Z"
                    fill="#C4C4C4"
                    fillOpacity="0.1"
                />
                </svg>
            </div>
            <div className="container">
                <div className="header__content flex-col">
                <div className="title center mb-4">
                    <span>lets get in touch</span>
                    <h1>where to find me</h1>
                </div>
                </div>
            </div>
        </header>
    )
}