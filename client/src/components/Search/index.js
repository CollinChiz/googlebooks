import React, { useState } from "react";

export default function Search(props) {
    const [search, setSearch] = useState("");

    console.log(props)

    return (
        <div>
            <form>
                <label htmlFor="search" className="col-sm-1 col-form-label">
                    Search
                </label>
                <input
                  id="search"
                  name="search"
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="col-sm-4"
                  ></input>
                  <div className="button-div">
                      <button type="button" className="btn btn-primary btn-success" onClick={(e) => props.handleSearch(e, search)}>
                          Submit
                      </button>
                  </div>
            </form>
        </div>
    );
}