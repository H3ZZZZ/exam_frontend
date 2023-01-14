import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Person = () => {
  const { personId } = useParams();
  const navigate = useNavigate();
  console.log(personId);

  return (
    <div>
      Person with Id: {personId}
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        HOME
      </button>
    </div>
  );
};

export default Person;
