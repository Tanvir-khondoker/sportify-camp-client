import bannerImg from "../../../public/assets/Class_page_assets/classPageBannerImg.jpg";

const ClassesPageBanner = () => {
  return (
    <div className=" rounded-2xl">
      <div
        className="hero h-[500px]"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Discover Exciting Sports Classes and Courses
            </h1>
            <p className="mb-5 font-semibold">
              Explore a diverse range of sports classes and courses to excel in
              your athletic pursuits. Whether you are a beginner or experienced,
              our qualified coaches offer comprehensive instruction.. Join us
              for an exciting journey of growth and achievement!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPageBanner;
