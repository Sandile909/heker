import React from 'react'

function HotBetway() {
  return (
    <>
    

    <section className='flex flex-col items-center gap-3 w-full z-0'>
   
        <h2 className='m-6'>Hot Hot Betway</h2>

        <div className="overflow-x-auto">
  <table className="table w-full z-5">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Early Hours</th>
        
        <th>After Hours</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>Sunday</th>
        <td>08:30 - 12:45</td>
        <td>19:15 - 23:30</td>
        
      </tr>
      {/* row 2 */}
      <tr>
        <th>Monday</th>
        <td>01:55 - 03:25</td>
        <td>21:00 - 23:55</td>
        {/* row 3 */}
      </tr>
      <tr>
        <th>Tuesday</th>
        <td>03:30 - 08:30</td>
        <td>22:00 - 00:30</td>
        
      </tr>
      {/* row 4 */}
      <tr>
        <th>Wednesday</th>
        <td>03:30 - 05:30</td>
        <td>-- : --</td>
        
      </tr>
      {/* row 5 */}
      <tr>
        <th>Thursday</th>
        <td>06:30 - 12:00</td>
        <td>17:30 - 22:00</td>
        
      </tr>
      {/* row 6 */}
      <tr>
        <th>Friday</th>
        <td>-- : --</td>
        <td>17:00 - 23:45</td>
        
      </tr>
      {/* row 7 */}
      <tr>
        <th>Saturday</th>
        <td>06:45 : 11:15</td>
        <td>22:00 : 01:15</td>
        
      </tr>
      
    </tbody>
  </table>
</div>
    </section>
    </>
  )
}

export default HotBetway