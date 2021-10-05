import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <table class="table table-striped table-hover mt-5" id="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights Stay</th>
        </tr>
      </thead>
      <tbody>
        {results.map(guest => {
          return (
            <>
              <tr
                key={guest.id}
                className={`tr${guest.id}`}
                onClick={event => {
                  selectedRow
                    ? setSelectedRow(null)
                    : setSelectedRow(event.target.innerText);
                }}
                style={{
                  background: guest.id == selectedRow ? "#f48fb1" : null
                }}
              >
                <th scope="row">{guest.id}</th>
                <td scope="row">{guest.title}</td>
                <td scope="row">{guest.firstName}</td>
                <td scope="row">{guest.surname}</td>
                <td scope="row">{guest.email}</td>
                <td scope="row">{guest.roomId}</td>
                <td scope="row">{guest.checkInDate}</td>
                <td scope="row">{guest.checkOutDate}</td>
                <td scope="row">
                  {moment(guest.checkOutDate).diff(guest.checkInDate, "days")}
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
