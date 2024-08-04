import HeroImage from "/images/airbnb/airbnb-hero.png";

export const Hero = () => {
    return (
        <section className="hero">
        <img src={HeroImage} alt="Hero Image" className="hero--photo" />
        <h1 className="hero--header">Online Experience</h1>
        <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}