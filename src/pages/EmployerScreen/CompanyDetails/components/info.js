import React from 'react'
import { Card,CardBody,Table } from 'reactstrap'
import { Link } from 'react-router-dom'
function Info() {
  return (
   <>
    <Card className='mt-4'>
    <CardBody>
        <h5 className="card-title mb-3">Information</h5>
        <div className="table-responsive">
            <Table className="table-borderless mb-0">
                <tbody>
                    <tr>
                        <th className="ps-0" scope="row">
                            Company Name :
                        </th>
                        <td className="text-muted">Syntyce Solutions</td>
                    </tr>
                    <tr>
                        <th className="ps-0" scope="row">
                            Contact No :
                        </th>
                        <td className="text-muted">
                            +(1) 987 6543
                        </td>
                    </tr>
                    <tr>
                        <th className="ps-0" scope="row">
                            E-mail :
                        </th>
                        <td className="text-muted">
                            george@syntycesolution.com
                        </td>
                    </tr>


                    <tr>
                        <th className="ps-0" scope="row">
                            linkedin URL :
                        </th>
                        <td className='text-muted'> linkedin.com/in/syntycesolution</td>
                    </tr>
                    <tr>
                        <th className="ps-0" scope="row">
                            Employee Size :
                        </th>
                        <td className='text-muted'>40-50</td>
                    </tr>
                    <tr>
                        <th className="ps-0" scope="row">
                            Company registration number :
                        </th>
                        <td className='text-muted'>LP003139(Limited Partnership)</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    </CardBody>
</Card>

<Card>
    <CardBody>
        <h5 className="card-title mb-4">Portfolio</h5>
        <div className="d-flex flex-wrap gap-2">
            <div>
                <Link to="#" className="avatar-xs d-block">
                    <div className="avatar-title bg-dark rounded-circle fs-16">
                        <i className="ri-linkedin-line"></i>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="#" className="avatar-xs d-block">
                    <span className="avatar-title rounded-circle fs-16 bg-primary">
                        <i className="ri-global-fill"></i>
                    </span>
                </Link>
            </div>
            <div>
                <Link to="#" className="avatar-xs d-block">
                    <span className="avatar-title rounded-circle fs-16 bg-success">
                        <i className="ri-dribbble-fill"></i>
                    </span>
                </Link>
            </div>
            <div>
                <Link to="#" className="avatar-xs d-block">
                    <span className="avatar-title rounded-circle fs-16 bg-danger">
                        <i className="ri-pinterest-fill"></i>
                    </span>
                </Link>
            </div>
        </div>
    </CardBody>
</Card>

</>
  )
}

export default Info