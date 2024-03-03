import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-dark text-white " type="submit" style={{backgroundColor:"#000000"}}>Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148692632.jpg?w=2000&t=st=1698595199~exp=1698595799~hmac=ff6beedb44e3cc462851dbec5c08f91ee4a05510cfd994a56e28d1344f597703" className="d-block w-100" style={{ filter: "brightness(60%)",maxHeight:"600px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/delicious-big-burger-with-meat-bread-lettuce-tomatoes-generative-ai_169016-28842.jpg?w=1800&t=st=1698594634~exp=1698595234~hmac=1c22e91df8b6e0f3e066b704150dbfaae755e246bbde24d4f0cb3ef616060502" className="d-block w-100" style={{ filter: "brightness(60%)", maxHeight:"600px" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper-concept_23-2148671390.jpg?w=2000&t=st=1698560063~exp=1698560663~hmac=09f2d797c7305e0a400051f264a3328128aabafe0ff0ad4db688aa94fde64da4" className="d-block w-100" style={{ filter: "brightness(60%)",maxHeight:"600px" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
