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
                    <tr className='w-100'>
                        <th style={{width:"35%"}}  className="ps-0" scope="row">
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
                        <th className="ps-0 me-2" scope="row">
                            Organization Size :
                        </th>
                        <td className='text-muted'>40-50</td>
                    </tr>
                    <tr>
                        <th className="ps-0" scope="row">
                            Organization type :
                        </th>
                        <td className='text-muted'>Private Held</td>
                    </tr>
                    <tr>
                        <th className="ps-0" scope="row">
                            Established year :
                        </th>
                        <td className='text-muted'>1995</td>
                    </tr>
                    <tr>
                        <th className="ps-0" scope="row">
                            Tag line :
                        </th>
                        <td className="text-muted">
                        An information service firm helping small buisness succeed
                        </td>
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
                    <div className="avatar-title bg-dark rounded-circle fs-16" data-bs-toggle="tooltip" data-bs-placement="top" title="linkedin.com/in/syntycesolution">
                        <i className="ri-linkedin-fill"></i>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="#" className="avatar-xs d-block">
                    <span className="avatar-title rounded-circle fs-16 bg-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="www.syntycesolution.com">
                        <i className="ri-global-fill"></i>
                    </span>
                </Link>
            </div>
            <div>
                <Link to="#" className="avatar-xs d-block">
                    <span className="avatar-title rounded-circle fs-16 bg-success" data-bs-toggle="tooltip" data-bs-placement="top" title="www.facebook.com/george_syntyce">
                        <i className="ri-facebook-fill"></i>
                    </span>
                </Link>
            </div>
            <div>
                <Link to="#" className="avatar-xs d-block">
                    <span className="avatar-title rounded-circle fs-16 bg-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="instagram/George_">
                        <i className="ri-instagram-line"></i>
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