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
        " ipsum dolor sit ametluptua. At vem, quis sequat. Duis autem vel eum iriure dolor in hendrerit in m, quis sequat. Duis autem vel eum iriure dolor in hendrerit in m, quis sequat. Duis autem vel eum iriure dolor in hendrerit in m, quis sequat. Duis autem vel eum iriure dolor in hendrerit in m, quis sequat. Duis autem vel eum iriure dolor in hendrerit in m, quis sequat. Duis autem vel eum iriure dolor in hendrerit in ro eos et accusam et justo duo dolores et ea rebum. Stet clit",
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
      technologiesUsed: ["React", "html", "ThreeJs", "NextJs"],
    },
    {
      year: "//22",
      name: "This is ME",
      type: "portfolio",
      description:
        "Nam liber tempor cum soluta nobis eleifend option con. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ",
      image: "/images/websiteCovers/websiteCover3.jpg",
      technologiesUsed: ["React", "GSAP", "css", "NextJs"],
    },
    {
      year: "//23",
      name: "winecraft",
      type: "game",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipsci inviduntam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      image: "/images/websiteCovers/websiteCover4.jpg",
      technologiesUsed: ["React", "scss"],
    },
    {
      year: "//23",
      name: "Olga",
      type: "E-Commerce",
      description:
        "eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum d",
      image: "/images/websiteCovers/websiteCover4.jpg",
      technologiesUsed: ["pimmel", "html", "css", "NextJs"],
    },
    {
      year: "//24",
      name: "tsx-3000 ultra",
      type: "E-Commerce",
      description:
        "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
      image: "/images/websiteCovers/websiteCover5.jpg",
      technologiesUsed: ["React", "html", "css", "NextJs", "otkrtokrt"],
    },
    {
      year: "//24",
      name: "CHANGE",
      type: "Education",
      description:
        "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla faci",
      image: "/images/websiteCovers/websiteCover6.jpg",
      technologiesUsed: [
        "React",
        "html",
        "css",
        "heyo",
        "sketchy plugin",
        "otkrtokrt",
      ],
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
                    <div className="flex justify-between items-center w-full pb-2 border-b border-black mt-8">
                      <p className="text-4xl font-bold">
                        {projects[activeIndex].name}
                      </p>
                      <p className="text-lg pt-[10px]">4TH | NOVEMBER | 2023</p>
                    </div>

                    <p className="text-lg w-full pt-4">
                      {projects[activeIndex].description}
                    </p>

                    <div className="flex gap-4 pb-4 border-black border-b justify-center">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="w-9 h-9"
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
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#black"
                          viewBox="0 0 16 16"
                          className="w-8 h-8"
                        >
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-evenly py-4 mt-8 text-lg border-black border">
                      {projects[activeIndex].technologiesUsed.map(
                        (item, index) => (
                          <React.Fragment key={index}>
                            {index > 0 && <span className="text-xl">|</span>}
                            <span className="text-lg">{item}</span>
                          </React.Fragment>
                        )
                      )}
                    </div>
                    <button className="w-full bg-black text-white text-2xl flex justify-center gap-4 py-4 mt-6">
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
