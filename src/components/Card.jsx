import avatar from "../assets/images/muslim-girl-social-media-avatar-260nw-2332429175.webp";

const Card = () => {
  return (
    <div className="card flex flex-col justify-center items-center bg-[var(--Grey800)] max-w-80 w-full text-[var(--White)] rounded-[10px] p-8 max-sm:p-6 min-w-56 m-4 ">
      <img
        className="w-16 h-16 rounded-full object-cover mb-4"
        src={avatar}
        alt=""
      />
      <h2 className="font-semibold text-lg ">Rümeysa Nur Kılıç </h2>
      <h3 className="text-xs text-[var(--Green)]  font-medium mt-1">
        Uşak,Türkiye
      </h3>
      <p className=" text-sm  my-4 font-light">
        &quot;Front-end developer and avid reader.&quot;
      </p>
      <div className="flex flex-col gap-y-3 mt-2 text-sm w-full">
        <a href="https://github.com/nurkilic" target="_blank">
          <button>GitHub</button>
        </a>
        <a
          href="https://www.frontendmentor.io/profile/nurkilic"
          target="_blank"
        >
          <button>Frontend Mentor</button>
        </a>
        <a href="https://www.linkedin.com/in/rumeysanurkilic/" target="_blank">
          <button>LinkedIn</button>
        </a>
        <a href="">
          <button>Twitter</button>
        </a>
        <a href="">
          <button>Instagram</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
