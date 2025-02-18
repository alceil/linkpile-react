import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaFacebook, FaReddit } from "react-icons/fa";
import PropTypes from "prop-types";
import { IoCopyOutline } from "react-icons/io5";

const Modal = ({ username }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(`https://linkpile-bffd7.web.app/${username}`);
  };

  return (
    <div className="relative">
      <div className="absolute top-3 right-0 flex justify-center items-center">
        <div className="relative p-4 flex flex-col w-full max-w-lg bg-secondary border border-border-dark rounded-xl space-y-4">
          <h3 className="text-white text-3xl font-semibold">Share via</h3>
          <div className="flex justify-around items-center gap-2">
            <IoCopyOutline
              size={45}
              onClick={handleCopy}
              className="text-gray-50 cursor-pointer hover:scale-110"
            />
            <a
              rel="noreferrer"
              href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Flinkpile-bffd7.web.app%2F${username}`}
              target="_blank"
              className="text-gray-50 cursor-pointer hover:scale-110"
            >
              <AiFillTwitterCircle size={45} />
            </a>
            <a
              rel="noreferrer"
              href={`https://www.facebook.com/sharer.php?u=https://linkpile-bffd7.web.app/${username}`}
              target="_blank"
              className="text-gray-50 cursor-pointer hover:scale-110"
            >
              <FaFacebook size={45} />
            </a>
            <a
              rel="noreferrer"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Flinkpile-bffd7.web.app%2F${username}`}
              target="_blank"
              className="text-gray-50 cursor-pointer hover:scale-110"
            >
              <AiFillLinkedin size={45} />
            </a>
            <a
              rel="noreferrer"
              href={`https://www.reddit.com/submit?url=https%3A%2F%2Flinkpile-bffd7.web.app%2F${username}`}
              target="_blank"
              className="text-gray-50 cursor-pointer hover:scale-110"
            >
              <FaReddit size={45} />
            </a>
            <a
              rel="noreferrer"
              href={`https://api.whatsapp.com/send?text=https://linkpile-bffd7.web.app/${username}`}
              target="_blank"
              className="text-gray-50 cursor-pointer hover:scale-110"
            >
              <AiOutlineWhatsApp size={45} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  username: PropTypes.string.isRequired,
};
