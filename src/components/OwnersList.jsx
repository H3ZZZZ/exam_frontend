import React from "react";

const OwnersList = ({ owners, message }) => {
  return (
    <div className="owners-list">
      {message && <div className="message">{message}</div>}
      {owners.length > 0 ? (
        <div>
          <h2>Owners</h2>
          <ul>
            {owners.map((owner) => (
              <li key={owner.id}>{owner.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="message">No owners found.</div>
      )}
    </div>
  );
};

export default OwnersList;
