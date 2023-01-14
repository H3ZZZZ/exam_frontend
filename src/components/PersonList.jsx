import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { getPersons } from "../data";

const PersonList = () => {
  const persons = getPersons();
  const searchObj = useSearchParams();
  console.log(searchObj);

  return (
    <nav>
      {persons.map((person) => (
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/person/${person.id}`}
          key={person.id}
        >
          {person.name}
        </Link>
      ))}
      <Outlet />
    </nav>
  );
};

export default PersonList;
