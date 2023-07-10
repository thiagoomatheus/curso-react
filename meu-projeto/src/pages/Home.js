function Home({setName}) {
    return (
        <div>
            <h1>Home</h1>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Seu nome..." onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default Home