const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-2xl font-bold">Byte Code</h2>
            <p className="text-sm mt-2">Empowering Learning, One Byte at a Time</p>
            <p className="text-sm mt-2">At Byte Code, we provide high-quality courses to enhance your skills in programming, development, and much more. Join thousands of learners on their journey to mastering new technologies.</p>
            <p className="text-sm mt-2">Our software courses cover Full Stack Development, Data Science, AI & Machine Learning, Cyber Security, and more, ensuring you stay ahead in the IT industry.</p>
          </div>
          <div className="mt-6 md:mt-0 max-w-md text-center md:text-left">
            <p className="text-sm">Stay connected with us for the latest updates, tutorials, and educational content. Follow us on social media and subscribe to our newsletter.</p>
            
            <p className="text-sm mt-2">For any inquiries, reach out to us at <a href="mailto:support@bytecode.com" className="text-blue-400 hover:underline">support@bytecode.com</a></p>
          </div>
          <div className="mt-6 md:mt-0 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Byte Code. All rights reserved.</p>
            <p className="text-sm mt-2">Designed & Developed with ❤️ for passionate learners.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  