import Card from "./Card";
import Tile from "./Tile";
import { Link } from "@tanstack/react-router";

function Categories() {
  return (
    <div>
      <h2 className="text-xl font-bold py-3">Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/requests">
          <div className="indicator w-full">
            <span className="indicator-item badge badge-secondary"></span>
            <Tile />
          </div>
        </Link>
        <Tile />

        <Tile />
        <Tile />
      </div>
    </div>
  );
}

export default Categories;