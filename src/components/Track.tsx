import manage_dashboard from "../assets/manage_dashboard.webp";
import { FeaturesProps } from "../modal";
import { IoMdListBox } from "react-icons/io";
import { FaFileCode } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import '../styles/track.scss'


const Features: FeaturesProps[] = [
  {
    id: 1,
    feature: "Real-time analytics",
    img: <GoCheckCircleFill/>
  },
  {
    id: 2,
    feature: "Seamless integration",
    img: <FaFileCode/>
  },
  {
    id: 3,
    feature: "Custom dashboards",
    img: <IoMdListBox/>
  },
];


export const Track = () => {
  return (
    <div className="container">
      <div className="track-container">
        <div className="track-text">
          <h1>Keep track of all usage</h1>
          <p>
            Tracking All Usage for Efficient
            Management and Comprehensive Oversight
          </p>
          <ul>
            {Features.map((item) => (
              <li key={item.id}>
                {item.img}
                {item.feature}
              </li>
            ))}
          </ul>
          <button>Go to Watchlist</button>
        </div>
        <div className="track-image">
          <img src={manage_dashboard} alt="dashboard" />
        </div>
      </div>
    </div>
  );
};
