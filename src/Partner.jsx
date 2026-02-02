import Image from "react-bootstrap/Image";
import partner from "./assets/images/partner.png";
import scooty from "./assets/images/scooty.png";

export default function Partner() {
  return (
    <>
      <div className="max-w-7xl mx-auto my-2 !px-2 md:!px-14">
        <div className="flex flex-col sm:flex-row gap-5 py-5 items-center justify-center">
          
          <Image
            src={partner}
            className="w-68 sm:w-40 md:w-2/4 h-auto"
          />

          <Image
            src={scooty}
            className="w-68 sm:w-40 md:w-2/4 h-auto"
          />

        </div>
      </div>
    </>
  );
}
