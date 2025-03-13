const Home = () => {
    return(
        <div>
        <section className="bg-gray-900 text-white py-20 mt-12" id="Home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-80 h-80 mx-auto rounded-full overflow-hidden mb-8 border-4 border-blue-500">
            <img
              src="/public/img/dsc_3884.jpg" 
              alt="Your Name"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Asep <span className="text-blue-500">Nurdin</span></h1>
          <p className="text-xl italic mb-4">Coding with Passion, Creating with Purpose</p>
          <p className="text-lg  mx-auto max-w-3xl">
            Welcome to my portfolio. Im a passionate web developer, eager to bring creative and functional ideas to life through clean and efficient code.
          </p>
        </div>
      </div>
    </section>
    </div>
    )
}

export default Home