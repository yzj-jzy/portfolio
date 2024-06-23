const SocialMediaIcons = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/zhijian-yang-943497248/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <button
        className="hover:opacity-50 transition duration-500"
        onClick={() => openLink("https://twitter.com")}
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </button>
      <button
        className="hover:opacity-50 transition duration-500"
        onClick={() => openLink("https://facebook.com")}
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </button>
      <button
        className="hover:opacity-50 transition duration-500"
        onClick={() => openLink("https://instagram.com")}
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </button>
    </div>
  );
};

export default SocialMediaIcons;
