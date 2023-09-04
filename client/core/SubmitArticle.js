import React, { useContext, useEffect } from 'react'

const SubmitArticle = () => {

  return (
    <>
      <div>
        <div className='mt-5 text-3xl font-bold text-center text-white bg-cyan-400 dark:text-white'>Submit Online</div>
        <div className='p-10 m-5 overflow-hidden bg-white border-2 border-gray-300' >
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-4 row-span-2">
              <div>Name</div>
              <input className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 mb-4`} />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-4 row-span-2">
              <div>Email</div>
              <input className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 mb-4`} />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-4 row-span-2">
              <div>
                <div>Country</div>
                <select
                  className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 mb-4`}
                >
                  <option value="normal">Select Country</option>
                  <option value="India">India</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-4 row-span-2">
              <div>Phone</div>
              <input className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 mb-4`} />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-4 row-span-2">
              <div>Institute Address</div>
              <textarea id="message" rows="4" class="w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 mb-4"></textarea>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-4 row-span-2">
              <div>Title of the Submission</div>
              <input className={`w-full border-2 border-gray-300 rounded p-2 focus:outline-emerald-600 mb-4`} />
            </div>
          </div>
          <div className='mb-6'>
            <div>Article File</div>
            <input
              type="file"
              accept="application/pdf"
              className={`w-full bg-white border-2 border-gray-300 rounded  p-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-emerald-600 file:text-gray-100 mb-4`}
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button
              className="w-24 p-2 mb-2 text-gray-100 rounded bg-sky-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubmitArticle