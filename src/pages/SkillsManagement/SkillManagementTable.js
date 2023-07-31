import { Table } from "reactstrap";
import { Input } from "reactstrap";

const tableHeadersStyle = { padding: "1rem", fontSize: "18px" };
const tableDataStyle = {
  padding: "1rem",
  fontSize: "14px",
  fontWeight: "medium",
};

export const SkillsTable = ({ data, onDelete = () => { }, onEdit = () => { } }) => {
  const handleDeleteRow = (index) => {
    onDelete(index);
  };

  const handleEditRow = (item, index) => {
    onEdit(item, index);
  };

  return (
    <>
      <Table className="table-hover table-nowrap bg-white mb-0">
        <thead className="text-muted bg-soft-warning">
          <tr>
            <th style={{ ...tableHeadersStyle }} scope="col">
              Job Category
            </th>
            <th style={{ ...tableHeadersStyle }} scope="col">
              Skills | Version
            </th>
            <th style={{ ...tableHeadersStyle }} scope="col">
              Screening Enabled
            </th>
            <th style={{ ...tableHeadersStyle }} scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td scope="col" width="20%" style={{ ...tableDataStyle }}>
                {item.jobCategory}
              </td>
              <td scope="col" width="50%" style={{ ...tableDataStyle }}>
                <ul
                  className="mb-0"
                  style={{ columnCount: 2, paddingLeft: "1rem" }}
                >
                  {item?.skills?.map((cur, idx) => (
                    <>
                      {cur.skillVersion ? (
                        <li key={idx}>
                          {cur.skillName} | {cur.skillVersion}
                        </li>
                      ) : (
                        <li key={idx}>{cur.skillName}</li>
                      )}
                    </>
                  ))}
                </ul>
              </td>
              <td width="15%" scope="col" style={{ ...tableDataStyle }}>
                {item.screeningEnabled ? (
                  <>
                    <i className="ri-checkbox-circle-line align-middle text-success"></i>
                    <span className="ms-1">Enabled</span>
                  </>
                ) : (
                  <>
                    <i className="ri-close-circle-line align-middle text-danger"></i>
                    <span className="ms-1">Disabled</span>
                  </>
                )}
              </td>
              <td scope="col" width="15%" style={{ ...tableDataStyle }}>
                <div className="d-flex ms-10 align-items-center justify-content-start">
                  <div className="form-check form-switch fs-5">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="SwitchCheck1"
                      defaultChecked=""
                    />
                  </div>
                  <div className="fs-4 ms-2">
                    <i
                      onClick={() => handleEditRow(item, index)}
                      className="cursor-pointer ri-pencil-fill"></i>
                  </div>
                  <div className={"fs-4 ms-2"}>
                    <i
                      onClick={() => handleDeleteRow(index)}
                      className="cursor-pointer ri-delete-bin-line"
                    ></i>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
