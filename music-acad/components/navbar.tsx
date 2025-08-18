export default function Navbar() {
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/courses", label: "OurCourses" },
    { href: "/", label: "Login/SignUp" },
  ];

  return (
    <div className="navbar-container   ml-80 rounded-full border-black border-3 mt-5 w-300 h-[100px]  flex items-center justify-between px-8 py-3">
      {/* Left: Logo */}
      <a href="https://google.com" className="flex items-center">
        <img
          src="//music.youtube.com/img/on_platform_logo_dark.svg"
          alt="Logo"
          width={150}
          height={30}
        />
      </a>

      {/* Right: Links */}
      <div className="  flex gap-10">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-3xl font-bold font-mono hover:text-gray-400 transition"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
