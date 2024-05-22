import React from 'react';
import "./booking.css"


const bookings = [
    { banner: 'M&N', name: 'Louise Clancy', moveDate: '01-03-2024', origin: 'Alberta,AB', destn: 'British Columbia,BC', moveSize: '1 Bedroom, 1300 lbs', crewAssigned: 'Bruce', status: 'Open' },
    { banner: 'ACVL', name: 'Kevin Archer', moveDate: '01-02-2024', origin: 'Toronto,ON', destn: 'Toronto,ON', moveSize: '3 Bedroom, 3000 lbs', crewAssigned: 'karan', status: 'Open' },
    { banner: 'ACVL', name: 'Kevin Archer', moveDate: '01-02-2024', origin: 'Toronto,ON', destn: 'Toronto,ON', moveSize: '3 Bedroom, 3000 lbs', crewAssigned: 'karan', status: 'Open' }
];

function Content12({ selectedContent }) {
    const getContent = () => {
        switch (selectedContent) {
            case 'mybookings':
                return (
                    <>
                        <main className="main-content">
                            <header className="main-header">
                                <h3>My Bookings</h3>
                                <div className='all'>
                                    <button><h4>All bookings</h4></button>
                                </div>
                            </header>
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Banner</th>
                                        <th>Name</th>
                                        <th>Move Date</th>
                                        <th>Origin</th>
                                        <th>Destn</th>
                                        <th>Move Size</th>
                                        <th>Crew Assigned</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking, index) => (
                                        <tr key={index}>
                                            <td>{booking.banner}</td>
                                            <td>{booking.name}</td>
                                            <td>{booking.moveDate}</td>
                                            <td>{booking.origin}</td>
                                            <td>{booking.destn}</td>
                                            <td>{booking.moveSize}</td>
                                            <td>{booking.crewAssigned}</td>
                                            <td>{booking.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="details">
                                 <div className="tab">
                                    <button>Customer Details</button>
                                    <button>Move Details</button>
                                    <button>Supplies & Instruction</button>
                                    <button>Payment Details</button>
                                    <button>Team</button>
                                </div>
                                </div>
                            {/* <div className="pagination">
                            <button>Previous</button>
                            <span>1</span>
                            <button>Next</button>
                            </div> */}
                        </main>
                    </>
                );
            case 'allbookings':
                return (
                    <>
                        <main className="main-content">
                            <header className="main-header">
                                <h3>All Bookings</h3>
                                <div className='all'>
                                    <button><h4>My bookings</h4></button>
                                </div>
                            </header>
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Banner</th>
                                        <th>Name</th>
                                        <th>Move Date</th>
                                        <th>Origin</th>
                                        <th>Destn</th>
                                        <th>Move Size</th>
                                        <th>Crew Assigned</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking, index) => (
                                        <tr key={index}>
                                            <td>{booking.banner}</td>
                                            <td>{booking.name}</td>
                                            <td>{booking.moveDate}</td>
                                            <td>{booking.origin}</td>
                                            <td>{booking.destn}</td>
                                            <td>{booking.moveSize}</td>
                                            <td>{booking.crewAssigned}</td>
                                            <td>{booking.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* <div className="pagination">
                            <button>Previous</button>
                            <span>1</span>
                            <button>Next</button>
                            </div> */}
                        </main>
                    </>
                );
            case 'postbookings':
                return (
                    <>
                        <main className="main-content">
                            <header className="main-header">
                                <h3>Post Bookings</h3>
                                <div className='all'>
                                    <button><h4>All bookings</h4></button>
                                </div>
                            </header>
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Banner</th>
                                        <th>Name</th>
                                        <th>Move Date</th>
                                        <th>Origin</th>
                                        <th>Destn</th>
                                        <th>Move Size</th>
                                        <th>Crew Assigned</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking, index) => (
                                        <tr key={index}>
                                            <td>{booking.banner}</td>
                                            <td>{booking.name}</td>
                                            <td>{booking.moveDate}</td>
                                            <td>{booking.origin}</td>
                                            <td>{booking.destn}</td>
                                            <td>{booking.moveSize}</td>
                                            <td>{booking.crewAssigned}</td>
                                            <td>{booking.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* <div className="pagination">
                            <button>Previous</button>
                            <span>1</span>
                            <button>Next</button>
                            </div> */}
                        </main>
                    </>

                );
            case 'trailer':
                return (
                    <>
                        <main className="main-content">
                            <header className="main-header">
                                <h3>Trailer Bookings</h3>
                                <div className='all'>
                                    <button><h4>All bookings</h4></button>
                                </div>
                            </header>
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Banner</th>
                                        <th>Name</th>
                                        <th>Move Date</th>
                                        <th>Origin</th>
                                        <th>Destn</th>
                                        <th>Move Size</th>
                                        <th>Crew Assigned</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking, index) => (
                                        <tr key={index}>
                                            <td>{booking.banner}</td>
                                            <td>{booking.name}</td>
                                            <td>{booking.moveDate}</td>
                                            <td>{booking.origin}</td>
                                            <td>{booking.destn}</td>
                                            <td>{booking.moveSize}</td>
                                            <td>{booking.crewAssigned}</td>
                                            <td>{booking.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* <div className="pagination">
                            <button>Previous</button>
                            <span>1</span>
                            <button>Next</button>
                            </div> */}
                        </main>
                    </>

                );
            case 'alberta':
                return (
                    <>
                        <main className="main-content">
                            <header className="main-header">
                                <h3>Alberta Bookings</h3>
                                <div className='all'>
                                    <button><h4>All bookings</h4></button>
                                </div>
                            </header>
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Banner</th>
                                        <th>Name</th>
                                        <th>Move Date</th>
                                        <th>Origin</th>
                                        <th>Destn</th>
                                        <th>Move Size</th>
                                        <th>Crew Assigned</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking, index) => (
                                        <tr key={index}>
                                            <td>{booking.banner}</td>
                                            <td>{booking.name}</td>
                                            <td>{booking.moveDate}</td>
                                            <td>{booking.origin}</td>
                                            <td>{booking.destn}</td>
                                            <td>{booking.moveSize}</td>
                                            <td>{booking.crewAssigned}</td>
                                            <td>{booking.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* <div className="pagination">
                            <button>Previous</button>
                            <span>1</span>
                            <button>Next</button>
                            </div> */}
                        </main>
                    </>
                );
            case 'toronto':
                return (
                    <>
                        <main className="main-content">
                            <header className="main-header">
                                <h3>Toronto Booking</h3>
                                <div className='all'>
                                    <button><h4>All bookings</h4></button>
                                </div>
                            </header>
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Banner</th>
                                        <th>Name</th>
                                        <th>Move Date</th>
                                        <th>Origin</th>
                                        <th>Destn</th>
                                        <th>Move Size</th>
                                        <th>Crew Assigned</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking, index) => (
                                        <tr key={index}>
                                            <td>{booking.banner}</td>
                                            <td>{booking.name}</td>
                                            <td>{booking.moveDate}</td>
                                            <td>{booking.origin}</td>
                                            <td>{booking.destn}</td>
                                            <td>{booking.moveSize}</td>
                                            <td>{booking.crewAssigned}</td>
                                            <td>{booking.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* <div className="pagination">
                    <button>Previous</button>
                    <span>1</span>
                    <button>Next</button>
                    </div> */}
                        </main>
                    </>
                );
            default:
                return (
                    <>
                        <h3>Welcome to Acvl</h3>
                    </>
                );
        }
    };

    return (
        <div className="content">
            {getContent()}
        </div>
    );
}

export default Content12;

