import React from "react";

function Projects() {
  const [activeButton, setActiveButton] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(null); // Neue State-Variable für den aktiven Index

  //max 7
  const projects = [
    {
      year: "//22",
      name: "Keyboards",
      type: "E-Commerce",
      description:
        " ipsum dolor sit ametluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clit",
      image: "/images/websiteCovers/websiteCover1.jpg",
      technologiesUsed: ["React", "html", "css", "NextJs"],
    },
    {
      year: "//22",
      name: "Computer",
      type: "Blog",
      description:
        "Ut wisi enim ad minim veniam, quis sequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi",
      image: "/images/websiteCovers/websiteCover2.jpg",
      technologiesUsed: ["React", "html", "css", "NextJs"],
    },
    {
      year: "//22",
      name: "This is ME",
      type: "portfolio",
      description:
        "Nam liber tempor cum soluta nobis eleifend option con. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ",
      image: "/images/websiteCovers/websiteCover3.jpg",
      technologiesUsed: ["React", "html", "css", "NextJs"],
    },
    {
      year: "//23",
      name: "winecraft",
      type: "game",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipsci inviduntam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      image: "/images/websiteCovers/websiteCover4.jpg",
      technologiesUsed: ["React", "html", "css", "NextJs"],
    },
    {
      year: "//23",
      name: "Olga",
      type: "E-Commerce",
      description:
        "eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum d",
      image: "/images/websiteCovers/websiteCover4.jpg",
      technologiesUsed: ["React", "html", "css", "NextJs"],
    },
    {
      year: "//24",
      name: "tsx-3000 ultra",
      type: "E-Commerce",
      description:
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
      image: "/images/websiteCovers/websiteCover5.jpg",
      technologiesUsed: ["React", "html", "css", "NextJs"],
    },
    {
      year: "//24",
      name: "change",
      type: "Education",
      description:
        "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla faci",
      image: "/images/websiteCovers/websiteCover6.jpg",
      technologiesUsed: ["React", "html", "css", "NextJs"],
    },
  ];

  const handleButtonClick = (index) => {
    setActiveButton(activeButton === index ? null : index);
    setActiveIndex(index); // Setze den aktiven Index beim Klicken auf den Button
  };

  return (
    <div className="flex flex-col justify-center pr-24">
      <p className="text-8xl pb-16">Projects</p>
      <div>
        <div className="w-1/2 text-2xl py-8 flex justify-between">
          <div className="grid grid-cols-3 justify-start">
            <p className="w-64 flex items-start">Year</p>
            <p className="w-64 flex items-start">Name</p>
            <p className="w-64 flex items-start">Type</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-32">
          <div>
            {projects.map((project, index) => (
              <div key={index}>
                <button onClick={() => handleButtonClick(index)}>
                  <div
                    className={`text-2xl border-t py-8 flex justify-between ${
                      activeButton === index
                        ? "bg-white text-black pl-16"
                        : "bg-transparent"
                    }`}
                  >
                    <div className="grid grid-cols-3 justify-start">
                      <p className="w-64 flex items-start">{project.year}</p>
                      <p className="w-64 flex items-start">{project.name}</p>
                      <p className="w-64 flex items-start">{project.type}</p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          <div>
            {activeButton !== null &&
              activeIndex !== null &&
              activeButton === activeIndex && (
                <div className="bg-white text-black p-16">
                  <div key={activeIndex}>
                    <img
                      src={projects[activeIndex].image}
                      className="object-cover border-2 border-black"
                    />
                    <p className="mt-8 text-2xl">
                      {projects[activeIndex].name}
                    </p>

                    <p className="mt-4 text-lg">
                      {projects[activeIndex].description}
                    </p>
                    <div className="flex justify-evenly py-4 mt-8 text-lg border-black border">
                      <p>React</p>
                      <span className="border-r border-black"></span>
                      <p>NextJS</p>
                      <span className="border-r border-black"></span>
                      <p>HTML</p>
                      <span className="border-r border-black"></span>
                      <p>CSS</p>
                    </div>

                    <div className="flex justify-between mt-8 items-center">
                      <button className="text-2xl border flex gap-4">
                        <p>Launch</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="w-8 h-8"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                          />
                        </svg>
                      </button>
                      <div className="flex gap-4">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="w-8 h-8"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                          </svg>
                        </button>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            viewBox="0 0 1024 1024"
                            className="w-10 h-10"
                          >
                            <path d="M911.7 385.3l-.3-1.5c-.2-1-.3-1.9-.6-2.9-.2-.6-.4-1.1-.5-1.7-.3-.8-.5-1.7-.9-2.5-.2-.6-.5-1.1-.8-1.7-.4-.8-.8-1.5-1.2-2.3-.3-.5-.6-1.1-1-1.6-.8-1.2-1.7-2.4-2.6-3.6-.5-.6-1.1-1.3-1.7-1.9-.4-.5-.9-.9-1.4-1.3-.6-.6-1.3-1.1-1.9-1.6-.5-.4-1-.8-1.6-1.2-.2-.1-.4-.3-.6-.4L531.1 117.8a34.3 34.3 0 0 0-38.1 0L127.3 361.3c-.2.1-.4.3-.6.4-.5.4-1 .8-1.6 1.2-.7.5-1.3 1.1-1.9 1.6-.5.4-.9.9-1.4 1.3-.6.6-1.2 1.2-1.7 1.9-1 1.1-1.8 2.3-2.6 3.6-.3.5-.7 1-1 1.6-.4.7-.8 1.5-1.2 2.3-.3.5-.5 1.1-.8 1.7-.3.8-.6 1.7-.9 2.5-.2.6-.4 1.1-.5 1.7-.2.9-.4 1.9-.6 2.9l-.3 1.5c-.2 1.5-.3 3-.3 4.5v243.5c0 1.5.1 3 .3 4.5l.3 1.5.6 2.9c.2.6.3 1.1.5 1.7.3.9.6 1.7.9 2.5.2.6.5 1.1.8 1.7.4.8.7 1.5 1.2 2.3.3.5.6 1.1 1 1.6.5.7.9 1.4 1.5 2.1l1.2 1.5c.5.6 1.1 1.3 1.7 1.9.4.5.9.9 1.4 1.3.6.6 1.3 1.1 1.9 1.6.5.4 1 .8 1.6 1.2.2.1.4.3.6.4L493 905.7c5.6 3.8 12.3 5.8 19.1 5.8 6.6 0 13.3-1.9 19.1-5.8l365.6-243.5c.2-.1.4-.3.6-.4.5-.4 1-.8 1.6-1.2.7-.5 1.3-1.1 1.9-1.6.5-.4.9-.9 1.4-1.3.6-.6 1.2-1.2 1.7-1.9l1.2-1.5 1.5-2.1c.3-.5.7-1 1-1.6.4-.8.8-1.5 1.2-2.3.3-.5.5-1.1.8-1.7.3-.8.6-1.7.9-2.5.2-.5.4-1.1.5-1.7.3-.9.4-1.9.6-2.9l.3-1.5c.2-1.5.3-3 .3-4.5V389.8c-.3-1.5-.4-3-.6-4.5zM546.4 210.5l269.4 179.4-120.3 80.4-149-99.6V210.5zm-68.8 0v160.2l-149 99.6-120.3-80.4 269.3-179.4zM180.7 454.1l86 57.5-86 57.5v-115zm296.9 358.5L208.3 633.2l120.3-80.4 149 99.6v160.2zM512 592.8l-121.6-81.2L512 430.3l121.6 81.2L512 592.8zm34.4 219.8V652.4l149-99.6 120.3 80.4-269.3 179.4zM843.3 569l-86-57.5 86-57.5v115z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
