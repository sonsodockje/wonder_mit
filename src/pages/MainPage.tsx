import Card from "../components/main/Card";
import Filter from "../components/main/Filter";
import Promo from "../components/main/Promo";
import UserSimpleInfo from "../components/main/UserSimpleInfo";

function MainPage() {
  return (
    <div>
      <div className="gird gap-5 h-[300px] bg-pink">
        <Promo />
        <UserSimpleInfo />
      </div>
      <div>
        <Filter />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default MainPage;
