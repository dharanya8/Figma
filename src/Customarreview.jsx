import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "St Qlx",
    location: "South London",
    date: "24th September, 2023",
    rating: 5,
    text:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "St Qlx",
    location: "South London",
    date: "24th September, 2023",
    rating: 5,
    text:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "St Qlx",
    location: "South London",
    date: "24th September, 2023",
    rating: 5,
    text:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

export default function Customarreviews() {
  return (
    <div className="bg-gray-300  ">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>

          <div className="flex gap-3">
            <button className="bg-orange-500 text-white p-3 rounded-pill">
              <FaChevronLeft />
            </button>
            <button className="bg-orange-500 text-white p-3 rounded-pill">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* REVIEW CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-3 shadow-sm"
            >
              {/* USER */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="border-l border-orange-400 pl-2 h-10">
                  <h4 className="font-semibold ">{review.name}</h4>
                  <p className="text-xs text-orange-500">
                    {review.location}
                  </p>
                </div>
                <div className="flex flex-col  ml-19  justify-between mt-3">
                <div className="flex flex-row text-orange-400 ">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
              </div> <p className="text-sm text-gray-600 mt-2">
        {review.text}
      </p>
                          </div>
                          
          ))}
        </div>

        {/* OVERALL RATING */}
        <div className="mt-3 text-center absolute ml-135">
          <div className="inline-block bg-white px-6 py-2 rounded-xl shadow">
            <h1 className="!text-5xl font-bold">3.4</h1>
            <div className="flex justify-center text-orange-400 mt-1">
              <FaStar /><FaStar /><FaStar /><FaStar />
              <FaStar className="text-gray-300" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              1,360 reviews
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
