import React, { useState } from "react";
import { FaRegShareSquare } from "react-icons/fa";
import PropTypes from "prop-types";
import Modal from "./modal";
export default function Share({ username }) {
  const handleShare = () => {
    setShowModal(!showModal);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full px-4 p-2 flex justify-around items-center space-x-2 bg-secondary lg:border border-border-dark lg:rounded-xl">
        <a
          href={`https://linkpile-bffd7.web.app/${username}`}
          className="flex-1 text-sm text-gray-50 truncate hover:underline"
        >{`https://linkpile-bffd7.web.app/${username}`}</a>

        <FaRegShareSquare
          size={24}
          className="text-gray-400 cursor-pointer"
          onClick={handleShare}
        />
        {showModal ? <Modal username={username} /> : null}
      </div>
    </>
  );
}

Share.propTypes = {
  username: PropTypes.string.isRequired,
};
