import { useState } from "react";

const addStatus = (status, s) => {
  return [...status, s];
};

const removeStatus = (status, s) => {
  return status.filter((item) => item !== s);
};

function TodoFilters(props) {
  const [status, setStatus] = useState([]);
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (status, begin, end) => {
    props.onFilterChange(status, begin, end);
  };

  return (
    <div className="todofilters">
      <h3>Filtres</h3>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <h6>Par état</h6>
            <div>
              <input
                type="checkbox"
                id="todo"
                name="todo"
                checked={status.includes("TODO")}
                onChange={(e) => {
                  var newstatus = e.target.checked
                    ? addStatus(status, "TODO")
                    : removeStatus(status, "TODO");
                  setStatus(newstatus);
                  handleSubmit(newstatus, begin, end);
                }}
              />
              <label htmlFor="todo">À faire</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="ongoing"
                name="ongoing"
                checked={status.includes("GOING")}
                onChange={(e) => {
                  var newstatus = e.target.checked
                    ? addStatus(status, "GOING")
                    : removeStatus(status, "GOING");
                  setStatus(newstatus);
                  handleSubmit(newstatus, begin, end);
                }}
              />
              <label htmlFor="ongoing">En cours</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="ended"
                name="ended"
                checked={status.includes("DONE")}
                onChange={(e) => {
                  var newstatus = e.target.checked
                    ? addStatus(status, "DONE")
                    : removeStatus(status, "DONE");
                  setStatus(newstatus);
                  handleSubmit(newstatus, begin, end);
                }}
              />
              <label htmlFor="ended">Terminé</label>
            </div>
          </div>

          <div className="col">
            <h6>Par date</h6>
            <p>
              du{" "}
              <input
                id="begin"
                type="date"
                value={begin}
                onChange={(e) => setBegin(e.target.value)}
              />
              <br /> au{" "}
              <input
                id="end"
                type="date"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoFilters;
