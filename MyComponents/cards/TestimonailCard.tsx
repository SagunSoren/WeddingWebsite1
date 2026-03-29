import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
function TestimonailCard() {
  return (
    <div>
      <div className="h-50 w-80 bg-gray-300 rounded-lg">
        <div className="p-6">
          <div className="flex justify-between">
            <div className="flex">
              <h1>Image</h1>
              <div>
                <h2>Name of the cliend</h2>
                <p>6 months ago</p>
              </div>
            </div>

            <div>Google</div>
          </div>

          <div className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <MdVerified />
          </div>
          <div>
            <p>
              Nice and pleasant photo’s all events are covered exactly final
              Album is super 👌 Thanks for memorable coverage
            </p>
          </div>
          <p>Read more</p>
        </div>
      </div>
    </div>
  );
}
export default TestimonailCard;
