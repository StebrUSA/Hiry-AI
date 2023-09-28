import React from "react";
import { dataWidgets } from "../../../../common/data/smartpushdata";

const Widgets = () => {
  return (
    <React.Fragment>
      <div className="col-xl-12">
        <div className="card crm-widget">
          <div className="card-body p-0">
            <div className="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0">
              {dataWidgets.map((widget, index) => (
                <div className="col" key={index}>
                  <div className="py-4 px-3">
                    <h5 className="text-muted text-uppercase text-center fs-13">
                      {widget.label}
                    </h5>
                    <div className="d-flex text-center align-items-center">
                      <div className="flex-grow-1 ms-3">
                        <h2 className="mb-0">{widget.value}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Widgets;
