import React, { useState } from "react";
import Search from "./Search.js";
import SearchButton from "./SearchButton";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchButton />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
