import Image from "next/image";

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-black text-center text-white" id="projects">
      <h2 className="text-4xl text-white font-bold mb-8 hover:text-[#6a1b9a] transition-colors">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Project 1 - Simple Calculator */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f3e5f5]">
          <Image 
            src="/calculator.png" 
            alt="Simple Calculator" 
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-all"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Simple Calculator</h3>
            <p className="text-gray-600 mb-4">
              A simple and user-friendly calculator app that supports basic arithmetic operations like addition, subtraction, multiplication, and division.
            </p>
            <a 
              href="https://github.com/yourusername/simple-calculator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6a1b9a] font-semibold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 2 - Guessing Game */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f3e5f5]">
          <Image 
            src="/guessing-game.png" 
            alt="Guessing Game" 
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-all"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Guessing Game</h3>
            <p className="text-gray-600 mb-4">
              A fun number guessing game where players try to guess the correct number within a limited number of attempts.
            </p>
            <a 
              href="https://github.com/yourusername/guessing-game" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6a1b9a] font-semibold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 3 - ATM Machine */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f3e5f5]">
          <Image 
            src="/atm-machine2.png" 
            alt="ATM Machine" 
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-all"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">ATM Machine</h3>
            <p className="text-gray-600 mb-4">
              A simulation of an ATM machine that lets users withdraw cash, check balance, and view recent transactions.
            </p>
            <a 
              href="https://github.com/yourusername/atm-machine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6a1b9a] font-semibold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 4 - Table Generator */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f3e5f5]">
          <Image 
            src="/table-generted.jpg" 
            width={300}
            height={300}
            alt="Table Generator" 
            className="w-full h-48 object-cover rounded-lg mb-4 transition-all"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Table Generator</h3>
            <p className="text-gray-600 mb-4">
              A tool that dynamically generates HTML tables based on user input, perfect for quick data presentation.
            </p>
            <a 
              href="https://github.com/yourusername/table-generator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6a1b9a] font-semibold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 5 - Pizza Website */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f3e5f5]">
          <Image 
            src="/pizza-website.jpg" 
            alt="Pizza Website" 
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-all"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Pizza Website</h3>
            <p className="text-gray-600 mb-4">
              A modern pizza ordering website with a menu, cart, and a user-friendly interface for selecting pizza options.
            </p>
            <a 
              href="https://github.com/yourusername/pizza-website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6a1b9a] font-semibold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 6 - My Resume */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f3e5f5]">
          <Image 
            src="/my-resume.jpg" 
            alt="Resume" 
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-all"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">My Resume</h3>
            <p className="text-gray-600 mb-4">
              A personal resume that showcases my experience, skills, and education in the field of web development.
            </p>
            <a 
              href="https://github.com/yourusername/my-resume" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6a1b9a] font-semibold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 7 - Fresh Market Store */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f3e5f5]">
          <Image 
            src="/fresh-market.jpg" 
            alt="Fresh Market Store" 
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-all"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Fresh Market Store</h3>
            <p className="text-gray-600 mb-4">
              A fully responsive e-commerce website for a fresh market store, with a catalog of products, cart functionality, and user account management.
            </p>
            <a 
              href="https://github.com/yourusername/fresh-market-store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6a1b9a] font-semibold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 8 - Beauty Store */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f3e5f5]">
          <Image 
            src="/beauty-store.png" 
            alt="Beauty Store" 
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-all"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Beauty Store</h3>
            <p className="text-gray-600 mb-4">
              A beauty products online store with a product catalog, a shopping cart, and a secure checkout process for customers.
            </p>
            <a 
              href="https://github.com/yourusername/beauty-store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6a1b9a] font-semibold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 9 - Blooming Petals */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f3e5f5]">
          <Image 
            src="/roses.png" 
            alt="Blooming Petals" 
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-all"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Blooming Petals</h3>
            <p className="text-gray-600 mb-4">
              A beautiful collection of handpicked flowers to celebrate love and joy with vibrant colors and delightful fragrances.
            </p>
            <a 
              href="https://github.com/yourusername/blooming-petals" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6a1b9a] font-semibold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
