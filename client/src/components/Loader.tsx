import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <svg
        width={100}
        height={100}
        version="1.1"
        id="L4"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
      >
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>
        </circle>
        <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>
        </circle>
        <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
          <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>
        </circle>
      </svg>
    </div>
  );
}