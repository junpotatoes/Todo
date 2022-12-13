import Header from "./Header.jsx";
import Calendar from "./Calendar.jsx";
import "bootstrap/dist/css/bootstrap.css";

export default function Main() {
  return (
    <div className="Container">
      <section className="Content__Container">
        <div>
          <span className="bolder">그</span> <span className="bolder">코</span>
          <span>딩 실력에</span>
        </div>
        <div>
          <span className="bolder">잠</span> <span>이 오세요?</span>
        </div>
      </section>
    </div>
  );
}
