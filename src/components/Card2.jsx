import avatar from "../assets/images/muslim-girl-social-media-avatar-260nw-2332429175.webp";

const Card2 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#141414] p-4 ">
      <div className="max-w-sm w-full bg-[#1f1f1f] text-white rounded-lg p-8 md:p-10">
        <div className="flex flex-col items-center">
          <img 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4" 
            src={avatar} 
            alt="Profile" 
          />
          
          <h2 className="text-xl md:text-2xl font-semibold">
            Rümeysa Nur Kılıç
          </h2>
          
          <h3 className="text-xs md:text-sm text-[hsl(75,94%,57%)] font-medium mt-2">
            Uşak, Türkiye
          </h3>
          
          <p className="text-xs md:text-sm text-center my-4 font-light">
          &quot;Front-end developer and avid reader.&quot;
          </p>
          
          <div className="flex flex-col w-full gap-3">
            {[
              { label: 'GitHub', href: 'https://github.com/nurkilic' },
              { label: 'Frontend Mentor', href: 'https://www.frontendmentor.io/profile/nurkilic' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rumeysanurkilic/' },
              { label: 'Twitter', href: '#' },
              { label: 'Instagram', href: '#' }
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-[#333333] hover:bg-[hsl(75,94%,57%)] hover:text-black transition-colors duration-300 text-sm md:text-base py-3 px-4 rounded font-semibold">
                  {link.label}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
