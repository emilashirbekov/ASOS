import MainCardItem from "./MainCardItem/MainCardItem";
import "./MainCardList.css";
import { useNavigate } from "react-router-dom";

const MainCardList = (props) => {
  const { image, title, subtitle } = props;

  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/dropped");
  };

  return (
    <div className="card-list">
      <div className="card-list__body">
        <MainCardItem
          image={
            "https://content.asos-media.com/-/media/homepages/mw/2023/may/09-prime/cat-trays/mw_global_new_in_moment_870x1110.jpg"
          }
          title={"JUST DROPPED"}
          subtitle={"Head it here first"}
          onClick={() => navigateTo()}
        />
        <MainCardItem
          image={
            "https://content.asos-media.com/-/media/homepages/mw/2023/may/09-prime/cat-trays/mw_global_swim_moment_870x1110.jpg"
          }
          title={"SWIM STYLES"}
          subtitle={"A deep dive"}
        />
        <MainCardItem
          image={
            "https://content.asos-media.com/-/media/homepages/mw/2023/may/09-prime/cat-trays/mw_global_reclaimed_vintage_premium_edit_moment_870x1110.jpg"
          }
          title={"RECLAIMED VINTAGE"}
          subtitle={"The best bits edit"}
        />
        <MainCardItem
          image={
            "https://content.asos-media.com/-/media/homepages/mw/2023/may/09-prime/cat-trays/mw_global_sandals_ft_brands_moment_870x1110.jpg"
          }
          title={"TOE TALLY NEW"}
          subtitle={"Sandals from ASOS DESIGN & more!"}
        />
      </div>
    </div>
  );
};

export default MainCardList;
