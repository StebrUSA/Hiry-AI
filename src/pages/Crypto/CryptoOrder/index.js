import React, { useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import AllOrders from './AllOrders';

import { useSelector, useDispatch } from "react-redux";
import { getOrderList } from "../../../slices/thunks";


const CryproOrder = () => {
    const dispatch = useDispatch();

    const { orderList } = useSelector((state) => ({
        orderList: state.Crypto.orderList,
    }));

    useEffect(() => {
        dispatch(getOrderList());
    }, [dispatch]);

    document.title = "Orders | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Orders" pageTitle="Crypto" />
                    <Row>
                        <AllOrders orderList={orderList} />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default CryproOrder;