import './Home.css'

export default function Home() {
    return (
        <div className='home-section'>
            <section className="hero">
                <h1>Welcome to Shape Up</h1>
                <p>Your ultimate fitness and nutrition tracker.</p>
            </section>
            <section className="content">
                <div className="card">
                    <h2>Track Your Progress</h2>
                    <p>Keep a detailed diary of your fitness journey.</p>
                </div>
                <div className="card">
                    <h2>Create Custom Meals</h2>
                    <p>Log your meals and track your calorie intake.</p>
                </div>
                <div className="card">
                    <h2>Calculate Your Calories</h2>
                    <p>Use our calculator to manage your daily intake.</p>
                </div>
            </section>
        </div>
    );
}