import "./demoLinks.scss";

const demos = [
  {
    title: "secure Access ",
    subtitle: "Demo link",
    url: "#",
  },
  {
    title: "Weather App",
    subtitle: "Demo link",
    url: "#",
  },
  {
    title: "Gym Landing Page",
    subtitle: "Demo link",
    url: "#",
  },
  {
    title: "Portfolio Variant",
    subtitle: "Demo link",
    url: "https://portfolio-delta-lovat-98.vercel.app/",
  },
  {
    title: "Tableau Report",
    subtitle: "Demo link",
    url: "/TABLEAU%20REPORT.pdf",
  },
  {
    title: "Sign Language Project",
    subtitle: "https://actionrecognition.vercel.app/  ",
    url: "#",
  },
];

const DemoLinks = () => {
  return (
    <div className="demoLinksWrap">
      <h2 className="demoTitle">Demo Links</h2>
      <p className="demoSubtitle">
        Click any cell/card below to open the demo in a new tab.
      </p>

      <div className="demoGrid" role="list">
        {demos.map((d) => (
          <a
            key={d.title}
            className="demoCard"
            href={d.url}
            target={d.url && d.url !== "#" ? "_blank" : undefined}
            rel={d.url && d.url !== "#" ? "noreferrer" : undefined}
            role="listitem"
          >
            <div className="demoCardInner">
              <div className="demoCardTitle">{d.title}</div>
              <div className="demoCardSub">{d.subtitle}</div>
              <div className="demoCardCta">Open →</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DemoLinks;

