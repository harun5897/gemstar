import IconProudfoot from '../../assets/icons/icon-proudfoot.png'
import IconAvatar from '../../assets/icons/icon-avatar.svg'
import IconRmi from '../../assets/icons/icon-rmi.png'
import IconDbs from '../../assets/icons/icon-dbs.png'

function Table () {
  return (
    <div className="ml-[33px] mt-[13px] overflow-x-auto">
      <table className="table-auto lg:w-full w-[1000px] border-separate border-spacing-y-[13px]">
        <thead>
          <tr className="text-left text-[14px] font-[400] drop-shadow-md">
            <td className="pl-[15px] py-[13px] rounded-l-[5px] border border-l-black border-y-black border-r-0"> Clients </td>
            <td className="border border-y-black border-x-0"> Approval name </td>
            <td className="border border-y-black border-x-0 "> Client contact </td>
            <td className="border border-y-black border-x-0 "> Owner </td>
            <td className="border border-y-black border-x-0 "> Date issued </td>
            <td className="rounded-r-[5px] border border-r-black border-y-black border-l-0"> Status </td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left text-[14px] font-[400] drop-shadow-md cursor-pointer">
            <td className="pl-[15px] py-[13px] rounded-l-[5px] border border-l-black border-y-black border-r-0"> 
              <img src={ IconDbs } alt='' /> 
            </td>
            <td className="text-[16px] font-[700] border border-y-black border-x-0"> DBS DEG renewal energy LinkedIn post tiles... </td>
            <td className="border border-y-black border-x-0">
              <div className="flex">
                <div className="w-[22px] h-[22px] rounded-full bg-[#FE0000B0] mr-2">
                  <span className="text-[16px] font-[700] flex justify-center text-white"> </span>
                </div>
                <span> Jasmine </span>
              </div>
            </td>
            <td className="border border-y-black border-x-0">
              <div className="flex">
                <img className="mr-2" src={ IconAvatar } alt=''/> 
                <span> Radhika </span> 
              </div>
            </td>
            <td className="border border-y-black border-x-0"> January 23, 2022 </td>
            <td className="rounded-r-[5px] border border-r-black border-y-black border-l-0">
              <span className="text-black bg-[#FCE513] px-3 rounded"> In progress </span>
            </td>
          </tr>
          <tr className="text-left text-[14px] font-[400] drop-shadow-md cursor-pointer">
            <td className="pl-[15px] py-[13px] rounded-l-[5px] border border-l-black border-y-black border-r-0"> 
              <img src={ IconProudfoot } alt='' /> 
            </td>
            <td className="text-[16px] font-[700] border border-y-black border-x-0"> PF website mining and metals edit </td>
            <td className="border border-y-black border-x-0">
              <div className="flex">
                <div className="w-[22px] h-[22px] rounded-full bg-[#3B4256] mr-2">
                  <span className="text-[16px] font-[700] flex justify-center text-white"> L </span>
                </div>
                <span> Lorena </span>
              </div>
            </td>
            <td className="border border-y-black border-x-0">
              <div className="flex">
                <img className="mr-2" src={ IconAvatar } alt=''/> 
                <span> Radhika </span> 
              </div>
            </td>
            <td className="border border-y-black border-x-0"> January 23, 2022 </td>
            <td className="rounded-r-[5px] border border-r-black border-y-black border-l-0">
              <span className="text-black bg-[#F4B000] px-3 rounded"> 1st revision </span>
            </td>
          </tr>
          <tr className="text-left text-[14px] font-[400] drop-shadow-md cursor-pointer">
            <td className="pl-[15px] py-[13px] rounded-l-[5px] border border-l-black border-y-black border-r-0"> <img src={ IconRmi } alt='' /> </td>
            <td className="text-[16px] font-[700] border border-y-black border-x-0"> RMI January newletter EDM </td>
            <td className="border border-y-black border-x-0">
              <div className="flex">
                <div className="w-[22px] h-[22px] rounded-full bg-[#FE005B] mr-2">
                  <span className="text-[16px] font-[700] flex justify-center text-white"> M </span>
                </div>
                <span> Mervyn </span>
              </div>
            </td>
            <td className="border border-y-black border-x-0">
              <div className="flex">
                <img className="mr-2" src={ IconAvatar } alt=''/> 
                <span> Radhika </span> 
              </div>
            </td>
            <td className="border border-y-black border-x-0"> January 23, 2022 </td>
            <td className="rounded-r-[5px] border border-r-black border-y-black border-l-0">
              <span className="text-black bg-[#F47500] px-3 rounded"> 2nd revision </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table