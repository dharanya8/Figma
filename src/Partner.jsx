import Image from "react-bootstrap/Image";
import partner from "./assets/images/partner.png";
import scooty from "./assets/images/scooty.png";
export default function partneer() {
  return (
    <>
      <div className="max-w-7xl mx-auto my-2 px-4">
        <div className="flex flex-row gap-2 py-5">
          <Image src={partner} className="w-50 ht-50"></Image>
          <Image src={scooty} className="w-50"></Image>
        </div>
      </div>
    </>
  );
}
