import himme from "../../assets/images/himme.png";

const NavigationBar = () => {
  return (
    <nav className="bg-primary fixed w-full z-10 h-16">
      <div className="mx-auto h-full flex items-center max-w-7xl px-2 sm:px-6 lg:px-8">
        <img src={himme} alt="ERROR" className="h-12" />
      </div>
    </nav>
  );
};

export default NavigationBar;
