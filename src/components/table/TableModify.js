import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Table () {
  const [data, setData] = useState([])

  const fetchData = async() => {
    const responseData = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10')
    .then(response => setData(response.data))
    .catch(error => setData(error))
    return responseData
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="ml-[33px] mt-[13px] overflow-x-auto">
      <table className="table-auto lg:w-full w-[1000px] border-separate border-spacing-y-[13px]">
        <thead>
          <tr className="text-left text-[14px] font-[400] bg-white drop-shadow-md">
            <td className="pl-[15px] py-[13px] rounded-l-[5px]"> Image </td>
            <td> Name </td>
            <td> Current price</td>
            <td className="rounded-r-[5px]"> Market cap </td>
          </tr>
        </thead>
        <tbody>
        { data.map((item) => 
          <tr className="text-left text-[14px] font-[400] bg-white drop-shadow-md cursor-pointer">
            <td className="pl-[15px] py-[13px] rounded-l-[5px]"> <img src={ item.image } width='47px' alt='' /> </td>
            <td className="text-[16px] font-[700]"> { item.name }</td>
            <td>
              <div className="flex">
                <span> {item.current_price} </span>
              </div>
            </td>
            <td className="rounded-r-[5px]">
              <span> {item.market_cap} </span>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default Table