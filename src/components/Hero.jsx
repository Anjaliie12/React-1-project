const HeroSection = () => {
    return (
    <main className="hero container">
        <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Ut est voluptatum <br />
             earum, laudantium molestias officia deleniti aliquid 
             aperiam magni, nisi nam? <br />Nesciunt perspiciatis sint eum optio!
            Libero, fuga. Animi, tenetur <br />
             impedit totam consequuntur cumque, 
            s provident porro iste natus!
        </p>
        <div className="hero-btn">
            <button className="shop-now-btn">Shop Now</button>
            <button className="category-btn">Category</button>
        </div>

        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src="Amo.jpg" alt="amozon logo "className="amozon-logo" />
                <img src="flipcart.jpg" alt=" flipcart logo"className="flipcart-logo" />
            </div>
        </div>
        </div>

        <div className="hero-image">
        <img src="nikeshoe.png" alt="shoes logo" />
        </div>
        

    </main>
    );
};

export default HeroSection;
