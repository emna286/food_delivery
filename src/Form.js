import React from 'react'

export default function Form() {
  return (
    <div className='headr'>
    <form class="row g-3 needs-validation" novalidate>
<div class="col-md-4">
  <label for="validationCustom01" class="form-label"> Name</label>
  <input type="text" class="form-control" id="validationCustom01" value="" required/>
  <div class="valid-feedback">
    
  </div>
</div>

<div class="col-md-6">
  <label for="validationCustom03" class="form-label">Address</label>
  <input type="text" class="form-control" id="validationCustom03" required/>
  <div class="invalid-feedback">
    Please provide a valid city.
  </div>
</div>

<div class="col-12">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
    <label class="form-check-label" for="invalidCheck">
      Agree to our conditions
    </label>
    <div class="invalid-feedback">
      You must agree before submitting.
    </div>
  </div>
</div>
<div class="col-12">
  <button class="btn btn-primary" type="submit">Save</button>
</div>
</form>
</div>

  )  
}

