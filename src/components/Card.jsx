import React from "react";
import Link from "next/link";
const Card = ({ infos }) => {
  return (
    <div>
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">{infos.name}!</h2>
          <p>{infos.profession}</p>
          <p>{infos.hobbies}</p>
          <div className="card-actions justify-end">
            <button className="btn">
              <Link href={`/infos/${infos.id}`}>view</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
