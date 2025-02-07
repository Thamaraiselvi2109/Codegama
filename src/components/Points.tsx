import icon1 from "../assets/icons-1.png";
import icon2 from "../assets/icons-2.png";
import icon3 from "../assets/icons-3.png";
import { PointsProps } from "../modal";
import '../styles/points.scss'

const points:PointsProps[] = [
  {
    id: 1,
    img: icon1,
    title: "Real Time Tracking",
    description: "Monitor usage as it happens to stay updated with the latest data.",
  },
  {
    id: 2,
    img: icon2,
    title: "Detailed Reporting",
    description: "Generate in-depth reports that provide insights into usage patterns and trends.",
  },
  {
    id: 3,
    img: icon3,
    title: "Customizable Alerts",
    description: "Setup notifications for specific usage thresholds or unusual activity.",
  },
];

export const Points = () => {
  return (
    <div className="container">
      <div className="points-container">
        {points.map((item) => (
          <div key={item.id} className="point-card">
            <img src={item.img} alt={item.title} className="point-icon" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
