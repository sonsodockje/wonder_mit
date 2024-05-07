import Card from "../components/main/Card";
import Filter from "../components/main/Filter";
import Promo from "../components/main/Promo";
import UserSimpleInfo from "../components/main/UserSimpleInfo";

function MainPage() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 h-auto">
        <div className="col-span-3">
          <Promo />
        </div>
        <div className="col-span-1">
          <UserSimpleInfo />
        </div>
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
