import React from 'react'

function Rating() {
    return (
        <>
            <div className='col-lg-8'>
                <h6>Add your Comments</h6>
                <form class="was-validated">
                    <div class="mb-3">
                        <label for="validationTextarea" class="form-label">Textarea</label>
                        <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                        <div class="invalid-feedback">
                            Please enter a message in the textarea.
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}

export default Rating
