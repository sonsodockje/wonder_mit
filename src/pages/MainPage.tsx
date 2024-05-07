import Card from "../components/main/Card";
import Filter from "../components/main/Filter";
import Promo from "../components/main/Promo";
import UserSimpleInfo from "../components/main/UserSimpleInfo";

function MainPage() {
  return (
    <div>
      <div className="flex flex-row gap-5">
        <div className="grow">
          <Promo />
        </div>
        <div className="flex-none">
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
