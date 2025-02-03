import React from 'react'

const Instructor = () => {
  return (
    <div>
    <div className="flex mt-10 max-w-4xl bg-[#424874] text-white rounded-2xl overflow-hidden shadow-lg">
{/* Image Section */}
<div className="w-1/3">
  <img
    src="https://imgs.search.brave.com/V773q7dJ942PmM6tYWa_bz9vEdAaGlf85KAv147Ca4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2Fj/aGluZy50aGltcHJl/c3MuY29tL2RlbW8t/aW5zdHJ1Y3Rvci93/cC1jb250ZW50L3Vw/bG9hZHMvc2l0ZXMv/NDUvMjAxNi8wMy9i/b29rLTMtMzQyeDM4/NC5qcGc"
    // Replace with actual image path
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

{/* Text Section */}
<div className="w-2/3 p-10">
  <h2 className="text-2xl font-bold text-[#Dcd6f7]">Anna Doe</h2>
  <p className="text-sm font-semibold">Graphic Designer</p>
  <p className="text-[#Dcd6f7] mt-2">
    Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis malesuada.
    Aenean gravida magna orci, non efficitur est porta id. Donec magna diam.
  </p>
  <p className="text-[#f4eeff] text-sm mt-3">
    Ad, at blanditiis quaerat laborum officia incidunt cupiditate dignissimos voluptatem.
    Perfendis et totam ipsum ex aut earum libero accusamus.
  </p>
  
  {/* Rating */}
  <div className="mt-4 flex text-[#f4eeff]">
    {[...Array(5)].map((_, index) => (
      <span key={index} className="text-lg">★</span>
    ))}
  </div>
</div>
</div>
    </div>


)


}

export default Instructor