export default function ContactForm() {
    return (
        <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="h3 mb-5 text-black">Tell Us What Are You Looking For ?</h2>
          </div>
          <div className="col-md-12">
    
            <form action="#" method="post">
    
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-6">
                    <label className="text-black">Your Full Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_lname" name="c_lname"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label className="text-black">Your Contact Number <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="c_email" name="c_email" placeholder=""/>
                  </div>
                </div>
    
                <div className="form-group row">
                  <div className="col-md-12">
                    <label  className="text-black">Your Query </label>
                    <textarea name="c_message" id="c_message"  className="form-control"></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="Send Enquiry"/>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    )
}