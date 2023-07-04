import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div class="top-content align-items-left mx-4">
    <h3 class="my-3"><svg width="48" height="52" viewBox="8 1 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3052 12L18.1299 9.17526L16.7157 7.76105L13.891 10.5858L13.8873 10.5821L12.4731 11.9963L12.4768 12L12.4731 12.0037L13.8873 13.4179L13.891 13.4142L16.7157 16.239L18.1299 14.8248L15.3052 12Z" fill="currentColor" /></svg>Customer Profile</h3>
    <div className='row'>
    <div class="dropdown col-auto" >
      <button class="droping btn-outline btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"white"}}>
        Select Profile
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">mohammad ibrahim</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <button class="btn btn col-1 mx-1" type="submit" style={{backgroundColor: "#847eba", color:"white"}}>+ Add New</button>
    <button class="btn btn col-1 mx-1" type="submit" style={{backgroundColor: "#847eba",color:"white"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg> Edit</button>
    </div>
  </div>
  <div className='container-flex mx-2 my-4'>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
  <button class="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
  <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Appointment</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Products</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Notes</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">SOAP</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Forms</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Files</button>
  </li><li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Gift Certificates</button>
  </li><li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Packages</button>
  </li><li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Membership</button>
  </li><li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Invoices</button>
  </li>
</ul>


<div class="tab-content" id="myTabContent">
<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className='col'>
<div class="row mt-4 mx-1">
  <div class="col-sm-4">
    <div class="card" style={{backgroundColor: "#c892f2"}}>
      <div class="card-body">
      <div class="col-9 mt-3">
              <div class="profile-details">
                    <h5>mohammad ibrahim
                      </h5><h5>
                      <p  >Birthday: 14-11-1911</p>
                      <p  >Gender: Male</p>
                      <p  >Contact: +971552237236 </p>
                      <p   id="email">Email: mohammad.mca@gmail.com</p>
                      </h5></div>
                            </div>
      </div>
    </div>
  </div>
  <div class="col-sm-8">
    <div class="card" style={{backgroundColor: "#9bccf8"}}>
      <div class="card-body">
      <div class="box-1b p-3">
      <div class="row ml-4 pt-4 align-items-baseline">
        <div class="col-md p-0">
          <h5   >
            30-06-2023
          </h5>
        <p  >Customer Since</p>
      </div>
    <div class="col-md p-0">
        <center>
    <h5 >
        14
    </h5>
    </center>
    <p  >Appointments</p>
      </div>
    <div class="col-md ml-4">
      <h5   >
       $ 4190
      </h5>
      <p  >Sales</p>
    </div>
    </div>
    <div class="row ml-2 align-items-baseline mt-3">
      <div class="col-md">
    <h5>
      30-06-2023
    </h5>
    <p>Last Visit</p>
    </div>
    <div class="col-md">
    <center>
    <h5>
        0
    </h5>
      </center>
        <p>No shows</p>
    </div>
        <div class="col-md">
    <center>
      <h5>
        14
      </h5>
      </center>
      <p>Cancellations</p>
      </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
<div className='row mt-4 mx-4'>

<div class="card c-1 col mx-2" style={{backgroundColor: "#f8f69b"}} >
<div class="row p-4">
    <div class="col-12 justify-content-left d-flex">
        <h6   ><legend>Family &amp; Friends</legend></h6>
          <ul id="customer_families_list">
            </ul>
            </div>
            <div class="col-12 mt-4">
              <p class="menu-pink" data-toggle="modal" data-target="#add-family">Add Family and Friends
                </p>
                </div>
                </div>
</div>

<div class="card c-2 col mx-2"   style={{backgroundColor: "#e39b0bad"}}>
<div class="row p-4">
    <div class="col-12 justify-content-left d-flex">
        <h6   ><legend>Categoies</legend></h6>
          <ul id="customer_families_list">
            </ul>
            </div>
            <div class="col-12 mt-4">
              {/* <p class="menu-pink" data-toggle="modal" data-target="#add-family">Add Family and Friends
                </p> */}
                </div>
                </div> 
</div>

<div class="card c-3 col mx-2" style={{backgroundColor: "#a2b0bd"}} >
<div class="row p-4">
    <div class="col-12 justify-content-left d-flex">
        <h6   ><legend>Credit Card</legend></h6>
          <ul id="customer_families_list">
            </ul>
            </div>
            <div class="col-12 mt-4">
              {/* <p class="menu-pink" data-toggle="modal" data-target="#add-family">Add Family and Friends
                </p> */}
                </div>
                </div>
</div>

<div class="card c-4 col mx-2" style={{backgroundColor: "#b9e0ff"}} >
<h6 class="bold mx-2"><legend>Points Balance</legend></h6>
<h6 className='mx-2'> 0 Points</h6>


  
</div>


</div>
</div>
{/* <div class=" container-flex row">
<div class="dropdown-flex col-2" >
      <button class="droping btn-outline btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"white"}}>
        Select Profile
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">mohammad ibrahim</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>

</div> */}
<div class=" container-flex tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
<table class="table">
  <tbody style={{backgroundColor: "#f08c43", color:"white"}}>
    <tr>
    <td>ID</td>
    <td>Appintment Date</td>
    <td>Checkout Date</td>
    <td>Type</td>
    <td>Status</td>
    <td>Employee</td>
    <td>Service</td>
    <td>Price</td>
    <td>Tax</td>
    <td>Discount</td>
    <td>Paid</td>
    <td>Tip</td>
    <td>Pts Gained</td>
    <td>Pts Redeemed</td>
    </tr>
  </tbody>
  <tbody>
  <tr>
    <td>21</td>
    <td>01-07-2023</td>
    <td>01-07-2023</td>
    <td>regular</td>
    <td>Close</td>
    <td>Brody Weimann</td>
    <td>Moore Island</td>
    <td>500</td>
    <td>0%</td>
    <td>0</td>
    <td>500</td>
    <td>0</td>
    <td>32</td>
    <td>87</td>
    </tr>
    <tr>
    <td>21</td>
    <td>01-07-2023</td>
    <td>01-07-2023</td>
    <td>regular</td>
    <td>Close</td>
    <td>Brody Weimann</td>
    <td>Moore Island</td>
    <td>500</td>
    <td>0%</td>
    <td>0</td>
    <td>500</td>
    <td>0</td>
    <td>32</td>
    <td>87</td>
    </tr>
    <tr>
    <td>21</td>
    <td>01-07-2023</td>
    <td>01-07-2023</td>
    <td>regular</td>
    <td>Close</td>
    <td>Brody Weimann</td>
    <td>Moore Island</td>
    <td>500</td>
    <td>0%</td>
    <td>0</td>
    <td>500</td>
    <td>0</td>
    <td>32</td>
    <td>87</td>
    </tr>
    <tr>
    <td>21</td>
    <td>01-07-2023</td>
    <td>01-07-2023</td>
    <td>regular</td>
    <td>Close</td>
    <td>Brody Weimann</td>
    <td>Moore Island</td>
    <td>500</td>
    <td>0%</td>
    <td>0</td>
    <td>500</td>
    <td>0</td>
    <td>32</td>
    <td>87</td>
    </tr>
    <tr>
    <td>21</td>
    <td>01-07-2023</td>
    <td>01-07-2023</td>
    <td>regular</td>
    <td>Close</td>
    <td>Brody Weimann</td>
    <td>Moore Island</td>
    <td>500</td>
    <td>0%</td>
    <td>0</td>
    <td>500</td>
    <td>0</td>
    <td>32</td>
    <td>87</td>
    </tr>
  </tbody>
</table>
</div>
</div>
  </div>
    </>
  );
}

export default App;
